class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peak() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    if (this.isEmpty) return 0;
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}
