import {NgModule} from '@angular/core';
import {ClarityModule, ClrCheckboxModule, ClrInputModule, ClrPasswordModule, ClrSelectModule} from '@clr/angular';


@NgModule({
  imports: [
    ClarityModule,
    ClrSelectModule,
    ClrInputModule,
    ClrPasswordModule,
    ClrCheckboxModule,
  ],
  exports: [
    ClarityModule,
    ClrSelectModule,
    ClrInputModule,
    ClrPasswordModule,
    ClrCheckboxModule
  ]
})
export class AngularClrModule {
}
