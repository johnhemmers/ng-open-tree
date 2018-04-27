import {Component, OnInit} from "@angular/core";
import {Tree} from "./tree/tree";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // title = "app";

  public treeModel = {
    node: { label: "node1", component: "InputNodeComponent" },
    childNodes: [
      { childNodes: [], node: { label: "node1.1", component: "InputNodeComponent" } },
      { childNodes: [], node: { label: "node1.2", component: "InputNodeComponent" } }
    ]
  } as Tree;

  ngOnInit() {}
}
