/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toAddStack = [];
    if (this.root) {
      toAddStack.push(this.root);
    }
    let total = 0;
    while (toAddStack.length) {
      const current = toAddStack.pop();
      total = total + current.val;
      for (let child of current.children) {
        toAddStack.push(child);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let evensStack = [];
    if (this.root) {
      evensStack.push(this.root);
    }
    let total = 0;
    while (evensStack.length) {
      const current = evensStack.pop();
      if (current.val % 2 === 0) {
        total++;
      }
      for (let child of current.children) {
        evensStack.push(child);
      }
    }
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let greaterStack = [];
    if (this.root) {
      greaterStack.push(this.root);
    }
    let total = 0;
    while (greaterStack.length) {
      const current = greaterStack.pop();
      if (current.val > lowerBound) {
        total++;
      }
      for (let child of current.children) {
        greaterStack.push(child);
      }
    }
    return total;
  }
}

let numNode = new TreeNode(1, [
  new TreeNode(2, [new TreeNode(3)]),
  new TreeNode(4, [
    new TreeNode(5, [new TreeNode(6), new TreeNode(7, [new TreeNode(8)])]),
  ]),
]);

const mathTree = new Tree(numNode);

module.exports = { Tree, TreeNode };
