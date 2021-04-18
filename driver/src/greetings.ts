import chalk from 'chalk'
import figlet from 'figlet'
import { name, author } from '../package.json'

console.log(figlet.textSync(name, 'Standard'))
console.log(chalk.yellow('>> by ' + author))
console.log()