import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { XmSharedTestingModule } from '@xm-ngx/shared';

import { DashboardsListComponent } from './dashboards-list.component';

describe('DashboardListComponent', () => {
    let component: DashboardsListComponent;
    let fixture: ComponentFixture<DashboardsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [XmSharedTestingModule, HttpClientTestingModule],
            declarations: [DashboardsListComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});