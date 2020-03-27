import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DisplayDataInTemplateComponent } from './components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInUrlTemplateComponent } from './components-templates/display-data-in-url-template/display-data-in-url-template.component';
import { TemplateSyntaxComponent } from './components-templates/template-syntax/template-syntax.component';
import { HeroDetailComponent } from './components-templates/hero-detail/hero-detail.component';
import { CustomEventsComponent } from './components-templates/custom-events/custom-events.component';
import { DisplayHeroComponent } from './components-templates/display-hero/display-hero.component';
import { HeroBioComponent } from './components-templates/hero-bio/hero-bio.component';
import { TwoWayBindingComponent } from './components-templates/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './components-templates/directives/directives.component';
const routes: Routes = [
{path: 'index', component:IndexComponent},
{path: 'components-templates/display-data-in-template', component:DisplayDataInTemplateComponent},
{path: 'components-templates/display-data-in-url-template', component:DisplayDataInUrlTemplateComponent },
{path: 'components-templates/template-syntax', component:TemplateSyntaxComponent},
{path: 'components-templates/hero-detail', component:HeroDetailComponent},
{ path: 'components-templates/template-syntax/custom-events', component:  CustomEventsComponent },
{ path: 'components-templates/template-syntax/hero-bio', component:HeroBioComponent },
{path: 'components-templates/display-hero', component:DisplayHeroComponent},
{path: 'components-templates/template-syntax/two-way-binding', component:TwoWayBindingComponent},
{path: 'components-templates/directives', component:DirectivesComponent},
{path: '', redirectTo:'index', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
