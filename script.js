console.log("Let's write javascript");

// async function main() {
//   let a = fetch("http://127.0.0.1:5500/songs/");
//   let songs = await a.json();
//   console.log(songs);
// }
// main();

async function getSongs() {
  let url = "http://127.0.0.1:5500/songs/";
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    let songs = await response.text();
    let div = document.createElement("div");
    div.innerHTML = songs;
    let links = div.querySelectorAll('a[href$=".me.mp3"]');
    let data = Array.from(links).map((link) => link.href);

    console.log(data);
  } catch (error) {
    console.error("Error fetching songs:", error.message);
  }
}

getSongs();
