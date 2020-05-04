import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderModule } from '@xm-ngx/components/loader';
import { NoDataModule } from '@xm-ngx/components/no-data';
import { PerPageModule } from '@xm-ngx/components/xm-per-page';
import { XmPermissionModule } from '@xm-ngx/core/permission';
import { XmTranslationModule } from '@xm-ngx/translation';
import { NgJhipsterModule } from 'ng-jhipster';
import { WordAutocompleteModule } from '../../../../src/app/shared';
import { RoleConditionDialogComponent } from './roles-management-condition-dialog.component';
import { RoleMgmtDeleteDialogComponent } from './roles-management-delete-dialog.component';
import { RoleMgmtDetailComponent } from './roles-management-detail.component';
import { RoleMgmtDialogComponent } from './roles-management-dialog.component';
import { RolesMgmtComponent } from './roles-management.component';

@NgModule({
    imports: [
        LoaderModule,
        XmTranslationModule,
        NgJhipsterModule,
        RouterModule,
        NgbPaginationModule,
        PerPageModule,
        NoDataModule,
        MatButtonModule,
        XmPermissionModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatIconModule,
        MatCheckboxModule,
        MatTooltipModule,
        WordAutocompleteModule,
    ],
    exports: [RolesMgmtComponent],
    declarations: [
        RolesMgmtComponent,
        RoleMgmtDialogComponent,
        RoleConditionDialogComponent,
        RoleMgmtDetailComponent,
        RoleMgmtDeleteDialogComponent,
    ],
    providers: [],
})
export class RolesManagementModule {
    public entry: Type<RolesMgmtComponent> = RolesMgmtComponent;
}
