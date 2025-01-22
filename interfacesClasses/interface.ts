export interface User {
  id: number;
  username: string;
  email?: string;
}

function registerUser(user: User) {
  console.log(`User ${user.username} registered successfully`);
}

// Correct usage
registerUser({id: 1, username: "phil"});

// Incorrect usage
//registerUser({username: "Phil"}); // id parameter is missing
