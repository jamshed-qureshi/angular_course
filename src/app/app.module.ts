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

@NgModule({
  declarations: [
    AppComponent,
    VDataBindingUsingInterpolationComponent,
    VIPropertyBindingComponent,
    VIIEventBindingComponent,
    VIIITwoWayDataBindingComponent,
    XNgIfInAngularComponent,
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
