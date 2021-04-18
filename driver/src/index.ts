import './greetings'
import args from './arguments'
import behaviors from './behaviors'
import { log, error } from './console'
import chalk from 'chalk'
import SerialPort from 'serialport'
const Readline = SerialPort.parsers.Readline

// setup serial connection to micro controler
const port = new SerialPort(args['port'], { baudRate: args['baudrate'] })
port.on('open', () => log('Connected to device'))
port.on('close', () => error('Connection lost'))
port.on('error', (err?) => {
    if (err && !err.disconnected) { error(err.message) }
})

// the eval functions further down don't include imported modules in their scope
// this means we have to reallocate the imported module into a new variable
const b = behaviors // eslint-disable-line

// read data from serial connection
// the micro controler sends "on" or "off"
const parser = port.pipe(new Readline({delimiter: '\r\n'}))
parser.on('data', (data) => {
    try {
        switch (data) {
        case 'on':
            log(`Using behavior ${chalk.yellow(args['behavior'])} to switch ${chalk.yellow('on')}`)
            eval(`b.${args['behavior']}.on()`)
            break
        case 'off':
            log(`Using behavior ${chalk.yellow(args['behavior'])} to switch ${chalk.yellow('off')}`)
            eval(`b.${args['behavior']}.off()`)
            break
        }
    } catch (err) {
        error(err)
        error('Does the behavior you specified exists? Try to omit the "behavior" flag to use the default.')
    }
})