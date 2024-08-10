import { Frontend } from 'tabby-terminal'
import {Injectable} from "@angular/core";
import {SearchOptions} from "tabby-terminal/typings/frontends/frontend";

@Injectable()
export class FrontendProvider extends Frontend {
    // @ts-ignore
    attach(host: HTMLElement): Promise<void> {
        return Promise.resolve(undefined);
    }

    clear(): void {
    }

    clearSelection(): void {
    }

    configure(): void {
    }

    copySelection(): void {

    }

    // @ts-ignore
    findNext(term: string, searchOptions?: SearchOptions): boolean {

        return false;
    }

    // @ts-ignore
    findPrevious(term: string, searchOptions?: SearchOptions): boolean {
        return false;
    }

    focus(): void {
    }

    getSelection(): string {

        return "";
    }

    // @ts-ignore
    restoreState(state: string): void {
    }

    saveState(): any {
    }

    scrollToBottom(): void {
    }

    selectAll(): void {
    }

    // @ts-ignore
    setZoom(zoom: number): void {
    }

    supportsBracketedPaste(): boolean {
        return false;
    }

    visualBell(): void {
    }

    // @ts-ignore
    write(data: string): void {
    }

}