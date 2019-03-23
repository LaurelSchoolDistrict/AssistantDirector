import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable()
export class AppTitle {

    private _value: string;

    constructor(private readonly _title: Title) {
        this._value = this._title.getTitle();
    }

    get(): string {
        return this._value;
    }

    set(value: string, setDocumentTitle?: boolean): void {
        this._value = value;

        if (setDocumentTitle) {
            this._title.setTitle(value);
        }
    }

}
