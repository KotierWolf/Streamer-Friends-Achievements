let database = [{ username: "andre", password: "supersecret" }];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tier from all that learning",
  },
  {
    username: "Sally",
    timeline: "Javascript is soooo cool",
  },
];

var userNamePrompt = promt(`What's your username?`);
var passwordPrompt = promt(`What's your password?`);

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  }
}

signIn(userNamePrompt, passwordPrompt);
