import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInUrlTemplateComponent } from './display-data-in-url-template/display-data-in-url-template.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



@NgModule({
  declarations: [DisplayDataInTemplateComponent, DisplayDataInUrlTemplateComponent, TemplateSyntaxComponent, HeroDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsTemplatesModule { }
