/* eslint-disable @typescript-eslint/no-empty-function */

import Behavior from './Behavior'
import { log } from '../console'
import args from '../arguments'
import { execSync } from 'child_process'

const searchString = args['tinkertoe']
const searchResult = execSync(`pactl list short | grep "${searchString}"`).toString()
const sourceId = searchResult.split('\t')[0]
log('tinkertoe: Using sourceId ' + sourceId)

const tinkertoe: Behavior = {
    on() {
        execSync(`pactl set-source-mute ${sourceId} 0`)
    },

    off() {
        execSync(`pactl set-source-mute ${sourceId} 1`)
    },
}

export default tinkertoe
