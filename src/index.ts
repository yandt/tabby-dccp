import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import TabbyCoreModule, {ConfigProvider} from 'tabby-core'
import { TerminalDecorator} from 'tabby-terminal'
import { DccpConfigProvider } from "./configProvider";
import {DccpDecorator} from "./decorator";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TabbyCoreModule,
    ],
    providers: [
        { provide: ConfigProvider, useClass: DccpConfigProvider, multi: true },
        { provide: TerminalDecorator, useClass: DccpDecorator, multi: true },
    ]
})
export default class ClippyModule { }
