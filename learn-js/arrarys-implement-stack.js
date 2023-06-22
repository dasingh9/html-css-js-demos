var stack = [];

stack.push("Hello");
stack.push("How are you!");
stack.push("Good to hear that");

console.log("Stack has these elements:", stack );

console.log("----------------------------------------------");

while(stack.length > 0) {
    const message = stack.pop();
    console.log("Process message:" + message + "; Stack size:" + stack.length);
}

console.log("----------------------------------------------");
console.log("Stack has been processed:", stack);
