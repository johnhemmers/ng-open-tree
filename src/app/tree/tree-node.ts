import {TreeNodeData} from './tree-node-data';

export interface TreeNode {
  id: string;
  dataNode: TreeNodeData;
  childNodes: TreeNode[];
}
