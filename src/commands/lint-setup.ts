import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import {readFileSync, writeFile, writeFileSync} from 'fs'

const Listr = require('listr')
const util = require('util')

const exec = util.promisify(require('child_process').exec)

function updatePackageJson<PackageType>(callback: (arg0: PackageType) => PackageType) {
  const packageJson = JSON.parse(readFileSync('package.json', 'utf8'))

  const updatedPackageJson = callback({...packageJson})

  writeFileSync('package.json', JSON.stringify(updatedPackageJson, null, 2))
}

const tasks = [
  {
    title: 'Install Dependencies',
    task: () => exec('yarn add -D eslint husky@4 lint-staged eslint-config-cratebind'),
  },
  {
    title: 'Update package.json',
    task: () => {
      updatePackageJson((packageJson: any) => {
        const updatedPackageJson = {
          ...packageJson,
          husky: {
            hooks: {
              'pre-commit': 'lint-staged',
            },
          },
          'lint-staged': {
            '*.js': [
              'eslint --fix',
            ],
            '{app,test}/**/*.rb': [
              'bundle exec rubocop -a',
            ],
          },
        }

        return updatedPackageJson
      })

      return true
    },
  },
  {
    title: 'Add eslint config file',
    task: () => {
      writeFileSync('.eslintrc.js', `module.exports = {
  extends: ['cratebind'],
  rules: {},
  settings: {},
};
`)
    },
  },
]

export default class LintSetup extends Command {
  static description = 'add ES lint config with husky and lint-staged to lint on commit'

  static examples = [
    `$ cratebind-scripts lint-setup
      hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(LintSetup)

    const shouldAddScript = await cli.confirm('Add a lint command to your package.jsons scripts? (Y/N)')

    if (shouldAddScript) {
      tasks.push({
        title: 'Add Lint Script',
        task: () => {
          updatePackageJson((packageJson: any) => {
            packageJson.scripts.lint = 'eslint --cache "**/*.{js,ts,jsx,tsx}" --fix'

            return packageJson
          })
        },
      })
    }

    const list = new Listr(tasks)

    await list.run()

    this.log('Lint Setup Completed 🧹')
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
