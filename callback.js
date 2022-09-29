// # callback and callback hell demo
// asynchronously get the following by using call back.
// https://www.youtube.com/watch?v=_8gHHBlbziw&t=1308s

// 1. login
// 2. get userEmail
// 3. get videos posted
// 4. get title of each videos

// # callback
function userLogin(userId, password, printLoginStatus) {
  setTimeout(() => {
    printLoginStatus("Login Success"); // callback
    return { userEmail: "devdev" }; // asyn optn returns user object
  }, 1000);
}

// # For callback hell
function getUser(findEmailCallback) {
  setTimeout(() => {
    console.log("getUser success");
    findEmailCallback({ userID: "dev123" });
  }, 1000);
}

function getUserEmail(user, findVideosCallback) {
  console.log("getUserEmail success");
  setTimeout(() => {
    findVideosCallback({ ...user, Email: "dev123@dev.com" });
  }, 1000);
}

function getVideosPosted(userId, printVideosCallback) {
  setTimeout(() => {
    printVideosCallback(["Video 1", "Video 2"]);
  }, 1000);
}

// 1. login
userLogin("dev", 12345, (status) => console.log(status));

// 2. get UserEmail
getUser((user) =>
  getUserEmail(user, (u) => {
    console.log(u.Email);
    getVideosPosted(u.userID, (videos) => console.log(videos));
  })
);
