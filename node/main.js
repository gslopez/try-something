function getHelloWorld(message) {
    return `Hello World! ${message.name} is saying ${message.message}`;
}
const gonzaloHelloMessage = {
    name: `Gonzalo`,
    message: `🐶`,
};
console.log(getHelloWorld(gonzaloHelloMessage));