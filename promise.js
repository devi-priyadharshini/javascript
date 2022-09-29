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
  console.log("getUserP Called");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserP success");
      resolve({ user: "dev123" });
    }, 4500);
  });
}

function getUserEmailP() {
  console.log("getEmail Called");

  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve("dev123@gmail.com"), 1000);
    setTimeout(() => {
      console.log("getEmail success");
      resolve("dev123@gmail.com");

      // console.log("getEmail failed");
      //   reject(new Error("Email not found"));
    }, 1500);
  });
}

function getVideosP() {
  console.log("getVideos Called");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getVideos success");
      resolve(["Video1", "Video2"]);
    }, 3000);
  });
}

// 1# Promise resolved successfully
// getUserP()
//   .then((user) => {
//     return getUserEmailP(user);
//   })
//   .then((email) => getVideosP()) // single line arrow function will return implicitly. here the promise is returned.hence, then works.
//   // otherwise throws undefined error. Occurs due to calling then method on undefined.
//   .then((videos) => console.log(videos))
//   .catch((err) => console.error(err));

//   2# Error scenario
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

// Promise.all([getUserP(), getUserEmailP(), getVideosP()])
//   .then((res) => console.log(`Promise all : ${res}`))
//   .catch((err) => console.error(err));

Promise.all([getUserEmailP(), getUserP(), getVideosP()])
  .then((res) => console.log(`Promise all : ${res}`))
  .catch((err) => console.error(err.message));
