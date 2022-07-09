import "./style.css";

const fetchURL = "https://picsum.photos/v2/list?page=2&limit=100";

const RANDOM_PIC = document.querySelector("#app");

const runCode = async function () {
  try {
    const api = await fetch(fetchURL);
    const json = await api.json();

    const i = Math.floor(Math.random() * 100);

    const author = await json[i].author;
    const id = await json[i].id;
    const picture = await json[i].download_url;

    console.log(i, author, id, picture);

    RANDOM_PIC.innerHTML += `
      <h2> ${author} - ${id} </h2>
      <img src="${picture}" alt="random pic" />
    `;

    const button = document.querySelector("#button");
    button.addEventListener("click", () => {
      location.reload();
    });
  } catch (e) {
    console.log("Error", e);
  }
};

runCode();

// fetch("https://picsum.photos/v2/list?page=2&limit=100")
//   .then((res) => res.json())
//   .then((listOfPhotos) => {
//     const i = Math.floor(Math.random() * 100);

//     console.log(i, listOfPhotos[i].id, listOfPhotos[i].download_url);

//     const button = document.querySelector("#button");

//     button.addEventListener("click", () => {
//       location.reload();
//     });

//     document.querySelector("#app").innerHTML += `
//       <h2> ${listOfPhotos[i].author} - ${listOfPhotos[i].id} </h2>

//       <img src="${listOfPhotos[i].download_url}" alt="Random Picture" />
//     `;
//   });
