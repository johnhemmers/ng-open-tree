import { Component, OnInit } from "@angular/core";
import { TreeNode } from "./tree/tree-node";
import { HeaderLabelComponent } from "./header-label/header-label.component";
import {numberTreeNodes} from './tree/tree-utils';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // title = "app";

  public treeModel = {
    dataNode: {
      header: "HeaderLabelComponent",
      headerData: { label: "The label 1" },
      component: "InputNodeComponent",
      componentData: {name: "hello"}
    },
    childNodes: [
      {
        dataNode: {
          header: "HeaderLabelComponent",
          headerData: { label: "The label 1.1" },
          component: "InputNodeComponent",
          componentData: {name: "hello"}
        },
        childNodes: [
          {
            dataNode: {
              header: "HeaderLabelComponent",
              headerData: { label: "The label 1.1.1" },
              component: "InputNodeComponent",
              componentData: {name: "hello"}
            },
            childNodes: [
              {
                dataNode: {
                  header: "HeaderLabelComponent",
                  headerData: { label: "The label 1.1.1.1" },
                  component: "DoubleInputNodeComponent"
                },
                childNodes: []
              },
              {
                dataNode: {
                  header: "HeaderLabelComponent",
                  headerData: { label: "The label 1.1.1.1" },
                  component: "DoubleInputNodeComponent"
                },
                childNodes: []
              }
            ]
          }
        ]
      },
      {
        dataNode: {
          header: "HeaderLabelComponent",
          headerData: { label: "The label 1.2" },
          component: "InputNodeComponent",
          componentData: {name: "hello"}
        },
        childNodes: []
      }
    ]
  } as TreeNode;

  public constructor() {
    numberTreeNodes(this.treeModel, '', 0);
    console.dir(this.treeModel);
  }

  ngOnInit() {}
}
