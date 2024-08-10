import { ConfigProvider } from 'tabby-core'

/** @hidden */
export class DccpConfigProvider extends ConfigProvider {
    defaults = {
        dccpPlugin: {
            agent: 'Dccp',
        },
        hotkeys: {
            'toggle-dccp': [],
        },
    }
}