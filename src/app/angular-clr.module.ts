import {NgModule} from '@angular/core';
import {
  ClarityModule,
  ClrCheckboxModule,
  ClrDatagridModule,
  ClrInputModule,
  ClrModalModule,
  ClrPasswordModule,
  ClrSelectModule
} from '@clr/angular';


@NgModule({
  exports: [
    ClarityModule,
    ClrSelectModule,
    ClrInputModule,
    ClrPasswordModule,
    ClrCheckboxModule,
    ClrDatagridModule,
    ClrModalModule
  ]
})
export class AngularClrModule {
}
