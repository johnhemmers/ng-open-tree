import { Component, OnInit } from "@angular/core";
import { TreeNode } from "./tree/tree-node";
import { HeaderLabelComponent } from "./header-label/header-label.component";
import {numberTreeNodes} from './tree/tree-utils';
import {InputNode} from './input-node/input-node.model';
import {DoubleInputNode} from './double-input-node/double-input-node';

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
      componentData: {name: "hello"} as InputNode
    },
    childNodes: [
      {
        dataNode: {
          header: "HeaderLabelComponent",
          headerData: { label: "The label 1.1" },
          component: "InputNodeComponent",
          componentData: {name: "hello"} as InputNode
        },
        childNodes: [
          {
            dataNode: {
              header: "HeaderLabelComponent",
              headerData: { label: "The label 1.1.1" },
              component: "InputNodeComponent",
              componentData: {name: "hello"} as InputNode
            },
            childNodes: [
              {
                dataNode: {
                  header: "HeaderLabelComponent",
                  headerData: { label: "The label 1.1.1.1" },
                  component: "DoubleInputNodeComponent",
                  componentData: {name1: "hello", name2: ""} as DoubleInputNode
                },
                childNodes: []
              },
              {
                dataNode: {
                  header: "HeaderLabelComponent",
                  headerData: { label: "The label 1.1.1.1" },
                  component: "DoubleInputNodeComponent",
                  componentData: {name1: "hello", name2: ""} as DoubleInputNode
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
          componentData: {name: "hello"} as InputNode
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
