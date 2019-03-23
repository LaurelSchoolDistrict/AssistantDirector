import { Component } from "@angular/core";

import { AppTitle } from "./core/app-title.service";

@Component({
    selector: "ad-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    providers: [AppTitle]
})
export class AppComponent {

    constructor(private readonly _appTitle: AppTitle) {
        this._appTitle.set("My Students");
    }

    get title(): string {
        return this._appTitle.get();
    }

}
