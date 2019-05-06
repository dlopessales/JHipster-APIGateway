import { NgModule } from '@angular/core';

import { JHipsterApiGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JHipsterApiGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JHipsterApiGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JHipsterApiGatewaySharedCommonModule {}
