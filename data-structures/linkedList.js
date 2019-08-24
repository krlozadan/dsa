// Linear data structure 

function createNode(value) {
    return {
        value,
        next : null
    }
}

function createLinkedList() {
    return {
        head : null,
        tail : null,
        length : 0,
        push(value) {
            const node = createNode(value);
            // This is teh first node added to the list
            if (this.head == null) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = node;             
            }
            this.length++;
        },
        pop() {
            if (this.isEmpty()) {
                return null;
            }
            
            const node = this.tail;

            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
                this.length--;
                return node;
            }
            
            let currentNode = this.head;
            let penultimateNode;
                while(currentNode != null) {
                if (currentNode.next === this.tail) {
                    penultimateNode = currentNode;
                    break;
                }
                currentNode = currentNode.next;
            }
            
            penultimateNode.next = null;
            this.tail = penultimateNode;
            this.length--;
            return node;
        },
        get(index) {
            if (index < 0 || index > this.length - 1) {
                return null;
            }
            
            let node = this.head;
            let currentIndex = 0;
            while(currentIndex < index) {
                node = node.next;
                currentIndex++;
            }
            return node;
        },
        delete(index) {
            if (index < 0 || index > this.length - 1) {
                return null;
            }

            if (index === 0) {
                const node = this.head;
                this.head = node.next;
                this.length--;
                return node;
            }

            let previousNode = this.head;
            let nodeToDelete = previousNode.next;
            let currentIndex = 0;
            while(currentIndex < index - 1) {
                currentIndex++;
                previousNode = nodeToDelete;
                nodeToDelete = previousNode.next;
            }

            if (nodeToDelete === this.tail) {
                previousNode.next = null;
                this.tail = previousNode;
            } else {
                previousNode.next = nodeToDelete.next;
            }
            this.length--;
            return nodeToDelete
        },
        isEmpty() {
            return this.length === 0;
        }
    }
}