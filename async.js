function getUserA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ user: "dev123" }), 1000);
  });
}

function getUserEmailA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("dev123@gmail.com"), 1000);
  });
}

function getVideosA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(["Video1", "Video2"]), 1000);
  });
}

async function getUserVideos() {
  let user = await getUserA();
  let email = await getUserEmailA();
  let videos = await getVideosA();

  return videos;
}

getUserVideos()
  .then((videos) => console.log(`user videos:   ${videos}`))
  .catch((err) => console.error(err));
