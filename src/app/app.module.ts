import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ComponentsTemplatesModule } from './components-templates/components-templates.module';
import { RxDemoModule } from './rx-demo/rx-demo.module';
import { ModulesDemoModule } from './modules-demo/modules-demo.module';

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
    FormsModule,
    ModulesDemoModule,
    RxDemoModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
