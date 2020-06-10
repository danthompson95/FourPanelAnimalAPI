function start() {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const urls = [
    "https://shibe.online/api/birds?count=1&urls=true&httpsUrls=true",
    "https://aws.random.cat/meow",
    "https://random.dog/woof.json",
    "https://randomfox.ca/floof/",
  ];

  Promise.all([
    fetch(proxy + urls[0]),
    fetch(proxy + urls[1]),
    fetch(proxy + urls[2]),
    fetch(proxy + urls[3]),
  ])
    .then((result) => Promise.all(result.map((v) => v.json())))
    .then((data) => {
      const birdData = data[0][0];
      const catData = data[1].file;
      const dogData = data[2].url;
      const foxData = data[3].image;

      document.getElementById("birdLocation").setAttribute("src", birdData);
      document.getElementById("catLocation").setAttribute("src", catData);
      document.getElementById("dogLocation").setAttribute("src", dogData);
      document.getElementById("foxLocation").setAttribute("src", foxData);
    });
}

start();

setInterval(() => {
  start();
}, 240000);
