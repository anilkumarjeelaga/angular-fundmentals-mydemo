import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { UserCycleComponent } from './user-cycle/user-cycle.component';
import { LifecycleViewHooksComponent } from './lifecycle-view-hooks/lifecycle-view-hooks.component';
import { LifecycleContentHooksComponent } from './lifecycle-content-hooks/lifecycle-content-hooks.component';
import { UserAfterViewDetailComponent } from './user-after-view-detail/user-after-view-detail.component';
import { UserAfterContentDetailComponent } from './user-after-content-detail/user-after-content-detail.component';
// import { TestComponent } from './pipes/pipes/test/test.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ExponentialStrengthPipe } from './pipes/pipes/exponential-strength.pipe';
import { FormatNamePipe } from './pipes/pipes/format-name.pipe';
import { FlyingHerosPurePipe } from './pipes/pipes/flying-heros-pure.pipe';
import { FlyingHerosImpurePipe } from './pipes/pipes/flying-heros-impure.pipe';
// import { PipesComponent } from './pipes/pipes.component';

//{ RouterModule} from '@angular/router'


@NgModule({
  declarations: [DisplayDataInTemplateComponent, DisplayDataInUrlTemplateComponent, TemplateSyntaxComponent, HeroDetailComponent, CustomEventsComponent, DisplayHeroComponent, HeroBioComponent, TwoWayBindingComponent, HighlightDirective, DirectivesComponent, HighlightV1Directive, HighlightV2Directive, HighlightV3Directive, ReverseIfDirective, InteractionComponent, CountdowmParentWithTempRefVarComponent, CountdownTimerComponent, CountdownParentWithViewChildComponent, UserDetailComponent, EditUserComponent, SimpleTodoComponent, TodoDetailComponent, LifecycleHooksComponent, UserCycleComponent, LifecycleViewHooksComponent, LifecycleContentHooksComponent, UserAfterViewDetailComponent, UserAfterContentDetailComponent, PipesComponent, ExponentialStrengthPipe, FormatNamePipe, FlyingHerosPurePipe, FlyingHerosImpurePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
  ]
})
export class ComponentsTemplatesModule { }
