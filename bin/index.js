#!/usr/bin/env node

import { program } from 'commander'
import { create_rest } from '../src/ui.js'

program.name('JS-katana CLI').description('CLI for bootstrapping JS-katana tech projects.').version('1.1.0')

program
    .command('create-js-katana')
    .description('use to generate a JS-katana API project.')
    .option('-t, --tar', 'Download Tar From Github Api instead of using git')
    .action((options) => {
        const tar = options?.tar
        create_rest(tar)
    })

program.parse()
