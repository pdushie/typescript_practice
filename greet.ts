// Practice default and optional function parameters
function greetDefault(firstName: string, greeting: string = "Hello"): string {
  return `${greeting}, ${firstName}!`;
}

function greetOptional(firstName: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${firstName}`;
}

// Default parameter test case
console.log(greetDefault("Philip")); // test case 1: Default parameter used as greeting
console.log(greetDefault("Philip", "Good morning")); // case 2: second parameter used as greeting

// Optional parameter test case
console.log(greetOptional("Philip")); // test case 1: No greeting parameter given
console.log(greetOptional("Philip", "Hi"));
