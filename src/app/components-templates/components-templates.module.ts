import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInUrlTemplateComponent } from './display-data-in-url-template/display-data-in-url-template.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightV1Directive } from './attribute-directives/highlight-v1.directive';
import { HighlightV2Directive } from './attribute-directives/highlight-v2.directive';
import { HighlightV3Directive } from './attribute-directives/highlight-v3.directive';
import { ReverseIfDirective } from './structural-directives/reverse-if.directive';
import { InteractionComponent } from './interaction/interaction.component';
import { CountdowmParentWithTempRefVarComponent } from './countdowm-parent-with-temp-ref-var/countdowm-parent-with-temp-ref-var.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentWithViewChildComponent } from './countdown-parent-with-view-child/countdown-parent-with-view-child.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

//{ RouterModule} from '@angular/router'


@NgModule({
  declarations: [DisplayDataInTemplateComponent, DisplayDataInUrlTemplateComponent, TemplateSyntaxComponent, HeroDetailComponent, CustomEventsComponent, DisplayHeroComponent, HeroBioComponent, TwoWayBindingComponent, HighlightDirective, DirectivesComponent, HighlightV1Directive, HighlightV2Directive, HighlightV3Directive, ReverseIfDirective, InteractionComponent, CountdowmParentWithTempRefVarComponent, CountdownTimerComponent, CountdownParentWithViewChildComponent, UserDetailComponent, EditUserComponent, SimpleTodoComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
    //RouterModule
  ]
})
export class ComponentsTemplatesModule { }
