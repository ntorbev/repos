import {NgModule} from '@angular/core';
import {ClarityModule, ClrCheckboxModule, ClrDatagridModule, ClrInputModule, ClrPasswordModule, ClrSelectModule} from '@clr/angular';


@NgModule({
  imports: [
    ClarityModule,
    ClrSelectModule,
    ClrInputModule,
    ClrPasswordModule,
    ClrCheckboxModule,
    ClrDatagridModule
  ],
  exports: [
    ClarityModule,
    ClrSelectModule,
    ClrInputModule,
    ClrPasswordModule,
    ClrCheckboxModule,
    ClrDatagridModule
  ]
})
export class AngularClrModule {
}
