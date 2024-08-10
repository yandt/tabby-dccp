import {Injectable} from '@angular/core'
import {PlatformService, SubscriptionContainer} from 'tabby-core'
import { TerminalDecorator, BaseTerminalTabComponent, XTermFrontend } from 'tabby-terminal'

@Injectable()
export class DccpDecorator extends TerminalDecorator {

    private termContainerSubscriptions = new SubscriptionContainer()
    protected platform: PlatformService
    constructor () {
        super()
        // this.platform = injector.get(PlatformService)
    }


    // @ts-ignore
    attach (tab: BaseTerminalTabComponent<any>): void {
        if (!(tab.frontend instanceof XTermFrontend)) {
            // not xterm
            return
        }

        // @ts-ignore
        this.termContainerSubscriptions.subscribe(tab.frontend.mouseEvent$, (event: MouseEvent) => {
            if (event.type === 'mouseup' && event.button == 0) {
                if (tab.frontend?.getSelection()) {
                    tab.frontend?.copySelection()
                }

            }

            if (event.type === 'mouseup' && event.button == 2) {
                event.preventDefault()
                event.stopPropagation()
                tab.forEachFocusedTerminalPane(tab => {
                    tab.paste()
                })
                return false
            }
        })

    }

}