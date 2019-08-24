function createNode(key) {
    const children = [];
    return {
        key,
        children,
        addChild(key) {
            const childNode = createNode(key);
            children.push(childNode);
            return childNode;
        }
    }
}

function createTree(rootKey) {
    const root = createNode(rootKey);
    return {
        root,
        print() {
            let result = "";
            
            function traverse(node, visitCallback, depth) {
                visitCallback(node, depth);
                if (node.children.length > 0) {
                    node.children.forEach(child => traverse(child, visitCallback, depth + 1));
                }
            }
            
            function functionAddKeyToResult(node, depth) {
                return result += result.length === 0 ? node.key : `\n${" ".repeat(depth * 2)}${node.key}`;
            }

            traverse(root, functionAddKeyToResult, 1);
            
            return result;
        }
    }
}

const dom = createTree("html");
const head = dom.root.addChild("head");
const body = dom.root.addChild("body");

const title = head.addChild("Title - Learning trees");

const header = body.addChild("header");
const main = body.addChild("main");
const footer = body.addChild("footer");

const h1 = header.addChild("h1 - title");
const p = main.addChild("This is a paragraph");
const copyright = footer.addChild("Copyright");


console.log(dom.print());