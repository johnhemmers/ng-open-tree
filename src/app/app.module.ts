import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TreeComponent} from './tree/tree.component';
import {ComponentHostDirective} from './tree/component-host.directive';
import {SimpleNodeComponent} from './simple-node/simple-node.component';
import {ComponentMappingService} from './component-mapping-service/component-mapping.service';
import {InputNodeComponent} from './input-node/input-node.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {PopUpMenuComponent} from './menu/pop-up-menu.component';
import {PopUpMenuHostDirective} from './tree/pop-up-menu-host.directive';
import {PopUpMenuMappingService} from './pop-menu-component-mapping-service/pop-up-menu-mapping.service';


@NgModule({
  entryComponents: [
    SimpleNodeComponent,
    InputNodeComponent,
    PopUpMenuComponent
  ],
  declarations: [
    AppComponent,
    TreeComponent,
    ComponentHostDirective,
    PopUpMenuHostDirective,
    SimpleNodeComponent,
    InputNodeComponent,
    PopUpMenuComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ComponentMappingService, FormBuilder, PopUpMenuMappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
