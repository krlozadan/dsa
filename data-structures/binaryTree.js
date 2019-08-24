function createBinaryNode(key) {
    return {
        key, 
        left : null,
        right : null,
        addLeft(leftKey) {
            this.left = createBinaryNode(leftKey);
            return this.left;
        },
        addRight(rightKey) {
            this.right = createBinaryNode(rightKey);
            return this.right;
        }
    }
}

const TRAVERSALS = {
    IN_ORDER : (node, visitCallback) => {
        if (node != null) {
            TRAVERSALS.IN_ORDER(node.left, visitCallback);
            visitCallback(node);
            TRAVERSALS.IN_ORDER(node.right, visitCallback);
        }
    },
    PRE_ORDER : (node, visitCallback) => {
        if (node != null) {
            visitCallback(node);
            TRAVERSALS.PRE_ORDER(node.left, visitCallback);
            TRAVERSALS.PRE_ORDER(node.right, visitCallback);
        }
    },
    POST_ORDER : (node, visitCallback) => {
        if (node != null) {
            TRAVERSALS.POST_ORDER(node.left, visitCallback);
            TRAVERSALS.POST_ORDER(node.right, visitCallback);
            visitCallback(node);
        }
    }
};

function createBinaryTree(rootKey) {
    const root = createBinaryNode(rootKey);
    return {
        root,
        print(traversalType = "IN_ORDER") {
            let result = "";

            const visit = node => {
                result += result.length === 0 ? node.key : ` => ${node.key}`;
            };
            
            TRAVERSALS[traversalType](root, visit);

            return result;
        }
    }
}

const tree = createBinaryTree("A");

const b = tree.root.addLeft("B");
    const d = b.addLeft("D");
        const h = d.addLeft("H");
        const i = d.addRight("I");
    const e = b.addRight("E");

const c = tree.root.addRight("C");
    const f = c.addLeft("F");
    const g = c.addRight("G");

console.log(tree.print());


