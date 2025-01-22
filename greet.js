// Practice default and optional function parameters
function greetDefault(firstName, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(firstName, "!");
}
function greetOptional(firstName, greeting) {
    return "".concat(greeting || "Hello", ", ").concat(firstName);
}
// Default parameter test case
console.log(greetDefault("Philip")); // test case 1: Default parameter used as greeting
console.log(greetDefault("Philip", "Good morning")); // case 2: second parameter used as greeting
// Optional parameter test case
console.log(greetOptional("Philip")); // test case 1: No greeting parameter given
console.log(greetOptional("Philip", "Hi"));
