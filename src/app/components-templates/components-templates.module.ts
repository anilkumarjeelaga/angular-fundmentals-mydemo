import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInUrlTemplateComponent } from './display-data-in-url-template/display-data-in-url-template.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';



@NgModule({
  declarations: [DisplayDataInTemplateComponent, DisplayDataInUrlTemplateComponent, TemplateSyntaxComponent, HeroDetailComponent, CustomEventsComponent, DisplayHeroComponent, HeroBioComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsTemplatesModule { }
