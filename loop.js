import "./style.css";

const fetchURL = "https://picsum.photos/v2/list?page=2&limit=100";

const LOOP_PIC = document.querySelector("#loop-app");

const runCode = async function () {
  try {
    const api = await fetch(fetchURL);
    const json = await api.json();

    console.log(json);
    // eslint-disable-next-line no-const-assign, no-plusplus
    for (let j = 0; j < json.length; j++) {
      const loopPicture = json[j].download_url;

      LOOP_PIC.innerHTML += `
        <img src="${loopPicture}" />
      `;
    }
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
