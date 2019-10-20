class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			this.left.parent = this;
		} else if(!this.right) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
		if (this.left.data === node.data) {
			node.parent = null;
			this.left = null;
		} else if (this.right.data === node.data) {
			node.parent = null;
			this.right = null;
		} else {
			throw new Error('Passed node is not a child of this node');
		}
	}

	remove() {
		if (!this.parent) {
			return;
		}

		this.parent.removeChild(this);
	}

	swapWithParent() {
		if (!this.parent) {
			return;
		}

		const child = this;
		const parent = child.parent;

		child.left = parent;
		child.parent = parent.parent;

		if (parent.parent) {
			parent.parent.left = child;
			// parent.parent - don't change
		}

		parent.parent = child;
		parent.left = null;


	}
}

module.exports = Node;
