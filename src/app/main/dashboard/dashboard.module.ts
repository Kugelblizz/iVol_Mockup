import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {DashboardComponent, ShareDialog} from './dashboard.component';
import { MatIconModule, MatButtonModule, MatTableModule, MatIcon, MatTabsModule, MatFormFieldModule, MatSelectModule, MatCommonModule, MatDividerModule, MatMenuModule, MatTooltipModule, MatDialogModule, MatRadioModule, MatProgressSpinnerModule } from '@angular/material';
import { FuseWidgetModule } from '@fuse/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




const routes = [
  {
      path     : 'dashboard',
      component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    ShareDialog
  ],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,

    BrowserAnimationsModule,

    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCommonModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    

    FuseSharedModule,
    FuseWidgetModule
  ],
  exports: [
    DashboardComponent
  ],
  entryComponents: [
    ShareDialog
  ]
})

export class DashboardModule {
}
