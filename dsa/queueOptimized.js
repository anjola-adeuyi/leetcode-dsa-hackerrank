class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const tempItem = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return tempItem;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);

console.log(queue.isEmpty());
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
