import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VDataBindingUsingInterpolationComponent } from './lessons/v-data-binding-using-interpolation/v-data-binding-using-interpolation.component'
import { VIPropertyBindingComponent } from './lessons/vi-property-binding/vi-property-binding.component';
import { VIIEventBindingComponent } from './lessons/vii-event-binding/vii-event-binding.component';
import { VIIITwoWayDataBindingComponent } from './lessons/viii-two-way-data-binding/viii-two-way-data-binding.component';
import { XNgIfInAngularComponent } from './lessons/x-ng-if-in-angular/x-ng-if-in-angular.component';
import { XINgForInAngularComponent } from './lessons/xi-ng-for-in-angular/xi-ng-for-in-angular.component';
import { XIINgClassInAngularComponent } from './lessons/xii-ng-class-in-angular/xii-ng-class-in-angular.component';
import { XIIINgStyleInAngularComponent } from './lessons/xiii-ng-style-in-angular/xiii-ng-style-in-angular.component';
import { XIVNgSwitchInAngularComponent } from './lessons/xiv-ng-switch-in-angular/xiv-ng-switch-in-angular.component';
import { XVTemplateVariablesInAngularComponent } from './lessons/xv-template-variables-in-angular/xv-template-variables-in-angular.component';
import { XVIIInputDecoratorInAngularComponent } from './lessons/xvii-input-decorator-in-angular/xvii-input-decorator-in-angular.component';
import { ParentComponent } from './lessons/xvii-input-decorator-in-angular/parent/parent.component';
import { ChildComponent } from './lessons/xvii-input-decorator-in-angular/child/child.component';
import { XVIIIOutputDecoratorsInAngularComponent } from './lessons/xviii-output-decorators-in-angular/xviii-output-decorators-in-angular.component';
import { OutputParentComponent } from './lessons/xviii-output-decorators-in-angular/output-parent/output-parent.component';
import { OutputChildComponent } from './lessons/xviii-output-decorators-in-angular/output-child/output-child.component';
import { XIXViewChildInAngularComponent } from './lessons/xix-view-child-in-angular/xix-view-child-in-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    VDataBindingUsingInterpolationComponent,
    VIPropertyBindingComponent,
    VIIEventBindingComponent,
    VIIITwoWayDataBindingComponent,
    XNgIfInAngularComponent,
    XINgForInAngularComponent,
    XIINgClassInAngularComponent,
    XIIINgStyleInAngularComponent,
    XIVNgSwitchInAngularComponent,
    XVTemplateVariablesInAngularComponent,
    XVIIInputDecoratorInAngularComponent,
    ParentComponent,
    ChildComponent,
    XVIIIOutputDecoratorsInAngularComponent,
    OutputParentComponent,
    OutputChildComponent,
    XIXViewChildInAngularComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
