import {TreeNode} from './tree-node';

export function numberTreeNodes(treeNode: TreeNode, parentId: string, index: number): void{
  treeNode.id = nodeId(parentId, index);
  treeNode.childNodes.forEach((value: TreeNode, index: number) => {
    numberTreeNodes(value, treeNode.id, index);
  });
}

export function nodeId(parentId: string, index: number): string {
  return parentId ? parentId + '.' + (index + 1) : '' + (index + 1);
}
