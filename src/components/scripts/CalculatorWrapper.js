export default {
  data() {
    return {
      darkMode: false,
      operation: [],
      operationText: null,
      operatorIcons: {
        "+": '<span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg></span>',
        "-": '<span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></svg></span>',
        "*": '<span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg></span>',
        "/": '<span><svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10C5 9.83424 5.06585 9.67527 5.18306 9.55806C5.30027 9.44085 5.45924 9.375 5.625 9.375H14.375C14.5408 9.375 14.6997 9.44085 14.8169 9.55806C14.9342 9.67527 15 9.83424 15 10C15 10.1658 14.9342 10.3247 14.8169 10.4419C14.6997 10.5592 14.5408 10.625 14.375 10.625H5.625C5.45924 10.625 5.30027 10.5592 5.18306 10.4419C5.06585 10.3247 5 10.1658 5 10Z" fill="currentColor"></path><circle cx="10" cy="7" r="1" fill="currentColor"></circle><circle cx="10" cy="13" r="1" fill="currentColor"></circle></svg></span>',
      },
      rules: ["+", "-", "*", "/", "%", "."],
    };
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
    },
    addOperation(data) {
      if (this.rules.includes(data)) {
        this.operationRule(data);
      } else {
        this.operation.push(data);
      }
      // text
      this.createOperationText();
    },
    operationRule(data) {
      const len = this.operation.length;
      if (!len) {
        return;
      }
      if (this.rules.includes(this.operation[len - 1])) {
        this.operation[len - 1] = data;
        return;
      }
      this.operation.push(data);
    },
    createOperationText() {
      this.operationText = [];
      this.operation.forEach((item) => {
        if (item === "+") {
          this.operationText.push(this.operatorIcons["+"]);
          return;
        }
        if (item === "-") {
          this.operationText.push(this.operatorIcons["-"]);
          return;
        }
        if (item === "*") {
          this.operationText.push(this.operatorIcons["*"]);
          return;
        }
        if (item === "/") {
          this.operationText.push(this.operatorIcons["/"]);
          return;
        }
        this.operationText.push(item);
      });
      this.operationText = this.operationText.join("");
    },
    clean() {
      this.operation = [];
      this.createOperationText();
    },
    eraser() {
      this.operation.pop();
      this.createOperationText();
    },
  },
};
