import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DisplayDataInTemplateComponent } from './components-templates/display-data-in-template/display-data-in-template.component';
import { TemplateSyntaxComponent } from './components-templates/template-syntax/template-syntax.component';
import { HeroDetailComponent } from './components-templates/hero-detail/hero-detail.component';
import { CustomEventsComponent } from './components-templates/custom-events/custom-events.component';
import { DisplayHeroComponent } from './components-templates/display-hero/display-hero.component';
import { HeroBioComponent } from './components-templates/hero-bio/hero-bio.component';
import { TwoWayBindingComponent } from './components-templates/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './components-templates/directives/directives.component';
import { InteractionComponent } from './components-templates/interaction/interaction.component';
import { LifecycleHooksComponent } from './components-templates/lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleViewHooksComponent } from './components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component';
import { LifecycleContentHooksComponent } from './components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component';
import { PipesComponent } from './components-templates/pipes/pipes/pipes.component';
import { ObservablesDemoComponent } from './rx-demo/observables-demo/observables-demo.component';
import { SubjectDemoComponent } from './rx-demo/subject-demo/subject-demo.component';
import { OperatorsDemoComponent } from './rx-demo/operators-demo/operators-demo.component';
import { DifferentOperatorsComponent } from './rx-demo/different-operators/different-operators.component';
import {LazyLoadingDemoComponent  } from './modules-demo/lazy-loading-demo/lazy-loading-demo.component';
import { EagerVsLazyLoadingComponent } from './modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component';
import { CounterHomeComponent as CounterOneHomeComponent } from './counter-one/counter-home/counter-home.component';
import { CounterHomeComponent as counterTwoHomeComponent } from './counter-two/counter-home/counter-home.component';
import { FormControlComponent } from './forms-demo/reactive/form-control/form-control.component';
import { FormGroupComponent } from './forms-demo/reactive/form-group/form-group.component';
import { NestedFormGroupComponent } from './forms-demo/reactive/nested-form-group/nested-form-group.component';
import { FormBuilderComponent } from './forms-demo/reactive/form-builder/form-builder.component';
import { FormArrayComponent } from './forms-demo/reactive/form-array/form-array.component';
import { SuperHeroComponent } from './forms-demo/template-driven/super-hero/super-hero.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReactiveFormValidationComponent } from './forms-demo/reactive/reactive-form-validation/reactive-form-validation.component';
import { TemplateDrivenFormValidationComponent } from './forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component';


const routes: Routes = [
{ path: 'index', component:IndexComponent},

/* Components - Templates */
{ path: 'components-templates/display-data-in-template', component:DisplayDataInTemplateComponent},
{ path: 'components-templates/template-syntax', component:TemplateSyntaxComponent},
{ path: 'components-templates/hero-detail', component:HeroDetailComponent},
{ path: 'components-templates/template-syntax/custom-events', component:  CustomEventsComponent },
{ path: 'components-templates/template-syntax/hero-bio', component:HeroBioComponent },
{ path: 'components-templates/display-hero', component:DisplayHeroComponent},
{ path: 'components-templates/template-syntax/two-way-binding', component:TwoWayBindingComponent},
{ path: 'components-templates/directives', component:DirectivesComponent},
{ path: 'components-templates/component-interaction', component:  InteractionComponent },
{ path:'components-templates/lifecycle-hooks', component:LifecycleHooksComponent},
{ path: 'components-templates/lifecycle-hooks/view-hooks', component:  LifecycleViewHooksComponent },
{ path: 'components-templates/lifecycle-hooks/content-hooks', component: LifecycleContentHooksComponent},
{ path: 'components-templates/pipes', component:PipesComponent},

/* rx-demo-modules */
{ path: 'rxjs-demo/observables-demo', component:ObservablesDemoComponent},
{ path: 'rxjs/subjects-demo', component:SubjectDemoComponent},
{ path: 'rxjs/operators-demo', component:OperatorsDemoComponent},
{ path: 'rxjs/different-operators', component:DifferentOperatorsComponent},

/* NgModules routes */ 
{ path: 'ngmodules/lazy-loading', component: LazyLoadingDemoComponent },


/* Lazy loading demo routes */
// { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
// { path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},

/* Angular 8 lazy loading syntax */
{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)}, 

/* Eager Vs Lazy loading demo routes */
{ path: 'ngmodules/eager-vs-lazy-loading', component: EagerVsLazyLoadingComponent },
{ path: 'ngmodules/eager-vs-lazy-loading/counter-one-home', component: CounterOneHomeComponent },
{ path: 'ngmodules/eager-vs-lazy-loading/counter-two-home', component: counterTwoHomeComponent },
{ path: 'lazy-loading-home', loadChildren: () => import('./counter-lazy/counter-lazy.module').then(m => m.CounterLazyModule) },
// { path: 'lazy-loading-home', loadChildren:() => import('./counter-lazy/counter-lazy.module#CounterLazyModule').then(m => m.lazy) }
// { path: 'lazy-counter-home', loadChildren: './counter-lazy/counter-lazy.module#CounterLazyModule' },


 /* Form demo routes */  
{ path:'forms/reactive/form-control', component:FormControlComponent },
{ path:'forms/reactive/form-group', component:FormGroupComponent },
{ path:'forms/reactive/nested-form-group', component:NestedFormGroupComponent },
{ path:'forms/reactive/form-builder', component:FormBuilderComponent },
{ path:'forms/reactive/form-array', component:FormArrayComponent},
{ path:'forms/template-driven', component:SuperHeroComponent },
{ path:'forms/validation/reactive', component:ReactiveFormValidationComponent },
{ path: 'forms/validation/template-driven', component: TemplateDrivenFormValidationComponent },

 /* Default path and wild match routes */  
{ path: '', redirectTo:'index',  pathMatch:'full'},
{ path:'**', component:PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
