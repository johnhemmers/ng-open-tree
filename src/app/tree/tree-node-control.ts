import {TreeNode} from './tree-node';

export abstract class TreeNodeControl {
  deleteNode: () => void;
  deleteChildNode?: (treeNode: TreeNode) => void;
  addNode: (treeNode: TreeNode) => void;
}
