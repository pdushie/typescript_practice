"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function registerUser(user) {
    console.log("User ".concat(user.username, " registered successfully"));
}
// Correct usage
registerUser({ id: 1, username: "phil" });
