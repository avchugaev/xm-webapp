import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import swal from 'sweetalert2';
import { LoginService } from '../../shared';
import { XmEntitySpecWrapperService } from '../../xm-entity';

@Component({
    selector: 'xm-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

    constructor(protected readonly loginService: LoginService,
                protected readonly xmEntitySpecWrapperService: XmEntitySpecWrapperService,
                protected readonly translateService: TranslateService,
                protected readonly route: ActivatedRoute,
                protected readonly router: Router) { }

    public ngOnInit(): void {
        const isForce = this.route.snapshot.paramMap.get('force');

        if (isForce) {
            this.logout();
        }

        swal({
            title: this.translateService.instant('global.common.are-you-sure'),
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonClass: 'btn mat-raised-button btn-primary',
            cancelButtonClass: 'btn mat-raised-button',
            confirmButtonText: this.translateService.instant('global.common.yes-exit'),
            cancelButtonText: this.translateService.instant('global.common.cancel'),
        }).then((result) => result.value ? this.logout() : history.back());
    }

    public logout(): void {
        this.loginService.logout();
        this.xmEntitySpecWrapperService.clear();
        this.router.navigate(['']);
        /** TODO: transform below as a listener of auth state */
        const body = document.querySelector('body');
        /** TODO: mobile view backdrop form the sidebar not hidden */
        body.classList.remove('nav-open');
        body.classList.add('xm-public-screen');
    }

}
