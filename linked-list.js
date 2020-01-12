class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }
    find(item) {
        let curNode = this.head
        if (!this.head) {
            return null
        }
        while (curNode.value !== item) {
            if (curNode.next === null) {
                return null
            } else {
                curNode = curNode.next
            }
        }
        return curNode
    }
    insertBefore(item, next) {
        let nextNode = this.find(next)
        if (!nextNode) {
            throw new Error('Node not found!')
        }
        new _Node(item, nextNode) 
    }
    insertAfter(item, prev) {
        let prevNode = this.find(prev)
        let newPtr = prevNode.next
        if (!prevNode) {
            throw new Error('Node not found!')
        }
        prevNode.next = new _Node(item, newPtr)
        
    }
    remove(item) {
        if (!this.head) {
            return null
        }
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        let curNode = this.head
        let prevNode = this.head
        while ((curNode !== null) && (curNode.value !== item)) {
            prevNode = curNode
            curNode = curNode.next
        }
        if (curNode === null) {
            throw new Error('Item not found!')
        }
        prevNode.next = curNode.next
    }
}

function main() {
    const SLL = new LinkedList
    ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'].forEach(n => SLL.insertLast(n))
    SLL.insertLast('Tauhida')
    SLL.remove('Husker')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.remove('Tauhida')
}

function display(list) {
    let current = list.head
    while (current !== null) {
        console.log(current)
        current = current.next
    }
}

function size(list) {
    let current = list.head
    let count = 0
    while (current !== null) {
        count++
        current = current.next
    }
    return `This linked list has ${count} nodes.`
}

function isEmpty(list) {
    if (list.head) {
        return 'The list is not empty.'
    } else {
        return 'The list is empty.'
    }
}

function findPrevious(list, item) {
    let current = list.head
    while ((current !== null) && (current.next !== item)) {
        current = current.next
    }
    if (current === null) {
        return 'I couldn\'t find anything, sorry!'
    }
    return current
}

function findLast(list) {
    let current = list.head
    if (!current) { 
        throw new Error('The list is empty, you ding-dong.')
    }
    while ((current !== null) && (current.next !== null)) {
        current = current.next
    }
    if (current === null) {
        return 'I couldn\'t find anything, sorry!'
    } else if (current.next === null) {
        return current
    }
}