import {Component, OnInit} from "@angular/core";
import {Tree} from "./tree/tree";
import {HeaderLabelComponent} from './header-label/header-label.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // title = "app";

  public treeModel = {
    node: { header: "HeaderLabelComponent", headerData: {label: 'The label 1'}, component: "InputNodeComponent" },
    childNodes: [
      { childNodes: [], node: { header: "HeaderLabelComponent", headerData: {label: 'The label 1.1'}, component: "InputNodeComponent" } },
      { childNodes: [], node: { header: "HeaderLabelComponent", headerData: {label: 'The label 1.2'}, component: "InputNodeComponent" } }
    ]
  } as Tree;

  ngOnInit() {}
}
