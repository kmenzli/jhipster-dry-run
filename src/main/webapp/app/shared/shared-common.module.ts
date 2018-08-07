import { NgModule } from '@angular/core';

import { DrySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DrySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DrySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DrySharedCommonModule {}
