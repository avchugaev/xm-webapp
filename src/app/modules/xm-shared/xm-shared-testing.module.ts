import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable, NgModule, Pipe } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { XmSharedModule } from './xm-shared.module';

@Injectable()
@Pipe({name: 'translate'})
export class TranslatePipe {
   public transform: any = (arg) => of(arg);
}

@NgModule({
    declarations: [TranslatePipe],
    imports: [
        XmSharedModule,
        HttpClientTestingModule,
        RouterTestingModule,
    ],
    exports: [
        XmSharedModule,
        HttpClientTestingModule,
        RouterTestingModule,
        TranslatePipe,
    ],
    providers: [
        TranslatePipe,
        {provide: TranslateService, useValue: {get: (i) => of(i)}},
        {provide: MatDialogRef, useValue: {}},
    ],
})
export class XmSharedTestingModule {
}
