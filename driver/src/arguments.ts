import { ArgumentParser } from 'argparse'
import { description } from '../package.json'

const parser = new ArgumentParser({ description, add_help: true })

parser.add_argument('-p', '--port', {
    required: false,
    type: 'str',
    default: '/dev/ttyUSB0',
})
parser.add_argument('-r', '--baudrate', {
    required: false,
    type: 'int',
    default: 9600,
})
parser.add_argument('-b', '--behavior', {
    required: false,
    type: 'str',
    default: 'tinkertoe',
})
parser.add_argument('-tss', '--tinkertoe', {
    required: false,
    type: 'str',
    default: 'alsa_input.usb-RODE_Microphones_RODE_NT-USB',
})

const args = parser.parse_args()
export default args