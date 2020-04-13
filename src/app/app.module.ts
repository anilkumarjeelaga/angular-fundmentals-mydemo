import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ComponentsTemplatesModule } from './components-templates/components-templates.module';
import { RxDemoModule } from './rx-demo/rx-demo.module';
import { ModulesDemoModule } from './modules-demo/modules-demo.module';
import { CounterOneModule } from './counter-one/counter-one.module';
import { CounterTwoModule } from './counter-two/counter-two.module';
import { FormsDemoModule } from './forms-demo/forms-demo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module'
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsTemplatesModule,
    NgbModule,
    ModulesDemoModule,
    RxDemoModule,
    CounterOneModule.forRoot(),
    CounterTwoModule,
    FormsDemoModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
