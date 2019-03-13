import React from 'react';
import { whyDidYouUpdate } from 'why-did-you-update';
import { createPlugin, BootOptions, BlueBase } from '@bluebase/core';

export default createPlugin({
	description: 'A BlueBase plugin boilerplate!',
	key: '@bluebase/plugin-why-did-you-update',
	name: 'Untitled Plugin',
    version: '1.0.0',
    filters: {
        'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
            whyDidYouUpdate(React);
            return bootOptions;
        }
    },
});
