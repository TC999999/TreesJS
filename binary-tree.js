/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let minDepthQueue = [];
    if (this.root) {
      minDepthQueue.push([this.root]);
    }
    let final = 0;

    while (minDepthQueue.length) {
      const current = minDepthQueue.shift();
      final++;
      const depth = [];
      for (let node of current) {
        if (!node.left && !node.right) {
          return final;
        }
        if (node.right) {
          depth.push(node.right);
        }
        if (node.left) {
          depth.push(node.left);
        }
      }
      minDepthQueue.push(depth);
    }
    return final;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let maxDepthQueue = [];
    if (this.root) {
      maxDepthQueue.push([this.root]);
    }
    let final = 0;

    while (maxDepthQueue.length) {
      const current = maxDepthQueue.shift();
      final++;

      let allLeaves = current.some((node) => {
        return node.right || node.left;
      });
      if (allLeaves) {
        const depth = [];
        for (let node of current) {
          if (node.right) {
            depth.push(node.right);
          }
          if (node.left) {
            depth.push(node.left);
          }
        }
        maxDepthQueue.push(depth);
      } else {
        return final;
      }
    }
    return final;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let final = 0;

    function addBranches(node) {
      if (!node) return 0;
      let leftMax = Math.max(0, addBranches(node.left));
      let rightMax = Math.max(0, addBranches(node.right));
      final = Math.max(final, leftMax + rightMax + node.val);
      return Math.max(leftMax, rightMax) + node.val;
    }

    addBranches(this.root);

    return final;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let nextLargerQueue = [];
    if (this.root) {
      nextLargerQueue.push([this.root]);
    }
    let final = [];

    while (nextLargerQueue.length) {
      let current = nextLargerQueue.shift();

      const depth = [];
      for (let node of current) {
        if (node.val > lowerBound) {
          final.push(node.val);
        }

        if (node.right) {
          depth.push(node.right);
        }
        if (node.left) {
          depth.push(node.left);
        }
      }
      if (depth.length) {
        nextLargerQueue.push(depth);
      }
    }

    if (final.length) {
      return Math.min(...final);
    } else {
      return null;
    }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  // areCousins(node1, node2) {}

  // /** Further study!
  //  * serialize(tree): serialize the BinaryTree object tree into a string. */

  // static serialize() {}

  // /** Further study!
  //  * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // static deserialize() {}

  // /** Further study!
  //  * lowestCommonAncestor(node1, node2): find the lowest common ancestor
  //  * of two nodes in a binary tree. */

  // lowestCommonAncestor(node1, node2) {}
}

let numBinaryNode = new BinaryTreeNode(
  1,

  new BinaryTreeNode(
    2,
    new BinaryTreeNode(3, new BinaryTreeNode(13)),
    new BinaryTreeNode(
      4,
      new BinaryTreeNode(5, new BinaryTreeNode(6, new BinaryTreeNode(11))),
      new BinaryTreeNode(7, new BinaryTreeNode(8), new BinaryTreeNode(9))
    )
  ),
  new BinaryTreeNode(10, null, new BinaryTreeNode(12))
);

const numBinaryTree = new BinaryTree(numBinaryNode);
const empty = new BinaryTree();

let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
let smallTree = new BinaryTree(smallRoot);

// build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
let largeTree = new BinaryTree(root);

module.exports = { BinaryTree, BinaryTreeNode };
