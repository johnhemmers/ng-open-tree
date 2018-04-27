import {TreeNode} from './tree-node';

export interface Tree {
  node?: TreeNode;
  childNodes?: Tree[];
  parent?: Tree;
}
