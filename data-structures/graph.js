const createQueue = require("./queue");

function createNode(key) {
    const neighbors = [];
    return {
        key,
        neighbors,
        addNeighbor(node) {
            neighbors.push(node);
        }
    }
}

function createGraph(directed = false) {
    const nodes = [];
    const edges = [];
    return {
        directed,
        nodes,
        edges,
        addNode(key) {
            nodes.push(createNode(key));
        },
        getNode(key) {
            return nodes.find(node => node.key === key);
        },
        addEdge(node1Key, node2Key) {
            const node1 = this.getNode(node1Key);
            const node2 = this.getNode(node2Key);
            node1.addNeighbor(node2);
            edges.push(`${node1Key}-${node2Key}`);
            if (!directed) {
                node2.addNeighbor(node1);
            }
        },
        print() {
            return nodes.map(({ key, neighbors }) => {
                let result = key;
                if (neighbors.length > 0) {
                    result += ` => ${neighbors
                        .map(neighbor => neighbor.key)
                        .join(" ")}`;
                }
                return result;
            })
            .join("\n");
        },
        breadthFirstSearch(startingNodeKey, visitCallback) {
            const startingNode = this.getNode(startingNodeKey);
            const visited = nodes.reduce((acc, node) => {
                acc[node.key] = false;
                return acc;
            },{});
            const nodesToVisit = createQueue();
            nodesToVisit.enqueue(startingNode);
            while(!nodesToVisit.isEmpty()) {
                const currentNode = nodesToVisit.dequeue();
                if (!visited[currentNode.key]) {
                    visitCallback(currentNode);
                    visited[currentNode.key] = true;
                }
                currentNode.neighbors.forEach(neighbor => {
                    if (!visited[neighbor.key]) {
                        nodesToVisit.enqueue(neighbor);
                    }
                });
            }
        },
        depthFirstSearch(startingNodeKey, visitCallback) {
            const startingNode = this.getNode(startingNodeKey);
            const visited = nodes.reduce((acc, node) => {
                acc[node.key] = false;
                return acc;
            },{});

            function explore(node) {
                if (visited[node.key]) {
                    return;
                }
                visitCallback(node);
                visited[node.key] = true;
                if (node.neighbors.length == 0) {
                    return;
                }
                node.neighbors.forEach(neighbor => explore(neighbor));
            }
            
            explore(startingNode);
        }
    }
}

const g = createGraph(true);
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");

g.addEdge("A", "B");
g.addEdge("A", "E");
g.addEdge("A", "F");
g.addEdge("B", "D");
g.addEdge("B", "E");
g.addEdge("C", "B");
g.addEdge("D", "C");
g.addEdge("D", "E");

g.depthFirstSearch("A", node => console.log(`Visiting: ${node.key}`));