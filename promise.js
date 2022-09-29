// refactoring callback.js code using promise

// # 1 Simple promise
// var promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("Failure")); // executed and returned
//     resolve({ user: "devdev" }); // not executed
//   }, 1000);
// });

// Uncomment to see in action...
// promise
//   .then((user) => console.log(`1# + ${user}`))
//   .catch((err) => console.log(`1# + ${err.message}`));

// # 2. convert below callback hell code from callback.js into promise.js

// get user
// get user email
// get vidoes
// get titles

function getUserP() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ user: "dev123" }), 1000);
  });
}

function getUserEmailP() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("dev123@gmail.com"), 1000);
  });
}

function getVideosP() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(["Video1", "Video2"]), 1000);
  });
}

getUserP()
  .then((user) => {
    return getUserEmailP(user);
  })
  .then((email) => getVideosP()) // single line arrow function will return implicitly. here the promise is returned.hence, then works.
  // otherwise throws undefined error. Occurs due to calling then method on undefined.
  .then((videos) => console.log(videos))
  .catch((err) => console.error(err));

//   # Error scenario
// getUserP()
//   .then((user) => {
//     console.log(user.user);
//     return getUserEmailP(user);
//   })
//   .then((email) => {
//     console.log(email);
//     throw new Error("Videos not found");
//   })
//   .then((videos) => console.log(videos))
//   .catch((err) => console.error(err));
