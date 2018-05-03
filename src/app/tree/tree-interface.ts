import {TreeNode} from './tree-node';

export abstract class TreeInterface {
  deleteNode: () => void;
  deleteChildNode?: (treeNode: TreeNode) => void;
  addNode: (treeNode: TreeNode) => void;
}
