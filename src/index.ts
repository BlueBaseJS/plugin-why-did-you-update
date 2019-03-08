import React from 'react';
import { whyDidYouUpdate } from 'why-did-you-update';
import { createPlugin, BootOptions, BlueBase } from '@bluebase/core';

export const WhyDidYouUpdatePlugin = createPlugin({

    name: 'Why Did You Update Plugin',
    key: 'why-did-you-update',
    filters: {
        'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
            whyDidYouUpdate(React);
            return bootOptions;
        }
    },

})