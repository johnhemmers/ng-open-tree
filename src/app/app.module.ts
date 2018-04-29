import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TreeComponent} from './tree/tree.component';
import {NodeComponentHostDirective} from './tree/node-component-host.directive';
import {SimpleNodeComponent} from './simple-node/simple-node.component';
import {ComponentMappingService} from './mapping-service/component-mapping.service';
import {InputNodeComponent} from './input-node/input-node.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {PopUpMenuComponent} from './menu/pop-up-menu.component';
import {NodePopUpMenuHostDirective} from './tree/node-pop-up-menu-host.directive';
import {PopUpMenuMappingService} from './mapping-service/pop-up-menu-mapping.service';
import {CommonModule} from '@angular/common';
import { NodeHeaderHostDirective } from './tree/node-header-host.directive';
import { HeaderLabelComponent } from './header-label/header-label.component';
import {HeaderMappingService} from './mapping-service/header-mapping.service';


@NgModule({
  entryComponents: [
    SimpleNodeComponent,
    InputNodeComponent,
    PopUpMenuComponent,
    HeaderLabelComponent
  ],
  declarations: [
    AppComponent,
    TreeComponent,
    NodeComponentHostDirective,
    NodePopUpMenuHostDirective,
    SimpleNodeComponent,
    InputNodeComponent,
    PopUpMenuComponent,
    NodeHeaderHostDirective,
    HeaderLabelComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    CommonModule
  ],
  providers: [ComponentMappingService, FormBuilder, PopUpMenuMappingService, HeaderMappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
