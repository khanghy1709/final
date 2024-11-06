import { LoginPage } from "./login.js";
import { renderSearchPage } from "./search.js";
import { signUp } from "./signup.js";
const getAPIArtists = async () => {
  try {
    const res = await fetch(
      "https://66160055b8b8e32ffc7c19db.mockapi.io/artists"
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getAPISongs = async () => {
  try {
    const res = await fetch(
      "https://66160055b8b8e32ffc7c19db.mockapi.io/toptracks"
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const renderHomePage = async () => {
  const dataArtists = await getAPIArtists();
  const dataSongs = await getAPISongs();
  let html = "";
  html += `
  
  <div class="spotify-playlists" style="margin-top:74px;">
    <h2>Spotify Playlists</h2>
    <div class="list">`;

  for (let i = 0; i < dataArtists.length; i++) {
    html += `
            <div class="item">
              <img src="${dataArtists[i]?.image}" />
              <div class="play">
                <span class="fa fa-play"></span>
              </div>
              <h4>Today's Top Hits</h4>
              <p>${dataArtists[i]?.nameArtist}</p>
            </div>`;
  }
  html += `
    </div>
  </div>

  <div class="spotify-playlists">
    <h2>Focus</h2>
    <div class="list">`;

  html += `
      <div class="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>Peaceful Piano</h4>
        <p>Relax and indulge with beautiful piano pieces</p>
      </div>`;

  html += `
    </div>
  </div>

  <div class="spotify-playlists">
    <h2>Mood</h2>
    <div class="list">
      <div class="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>Mood Booster</h4>
        <p>Get happy with today's dose of feel-good...</p>
      </div>
    </div>
    <hr>
  </div>
  `;
  document.querySelector(".container123").innerHTML = html;
};

renderHomePage();

const searchInput = document.querySelector(".Search");
const btnSearch = document.querySelector(".btnSearch");
btnSearch.addEventListener("click", function () {
  const value = searchInput.value;
  if (localStorage.getItem("user")) {
    renderSearchPage(value);
  } else {
    alert("Mời bạn đăng nhập");
    LoginPage();
  }
});

export function checkLogin() {
  if (localStorage.getItem("user")) {
    document.querySelector(".wrapperAccount").innerHTML = `
             <div class="wrapperControl">
                <i style="color:white" class="fa-solid fa-user"></i>
                <p style="color:white;margin-bottom:0" >${localStorage.getItem(
                  "user"
                )}</p>
                <ul>
                  <li> <i class="fa-regular fa-user"></i> Profile</li>
                  <li class="logout"> sign out <i class="fa-solid fa-right-from-bracket"></i></li>
                </ul>
              </div>
`;
    document.querySelector(".logout").addEventListener("click", function () {
      localStorage.removeItem("user");
      checkLogin();
      alert("Đăng xuất thành công");
    });
  } else {
    document.querySelector(".wrapperAccount").innerHTML = `
    <button type="button" style="background-color:black;color:white" class="btnSignUp">Sign Up</button>
     <button type="button" class="btnLogin123">Log In</button>
`;
    document.querySelector(".btnSignUp").addEventListener("click", function () {
      signUp();
    });
    document
      .querySelector(".btnLogin123")
      .addEventListener("click", function () {
        LoginPage();
      });
  }
}
checkLogin();
