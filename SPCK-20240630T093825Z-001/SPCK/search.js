const getAPISearch = async (value) => {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${value}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2d1b3841famshf6403fe9fed2175p15b6d0jsn941b5eb234c5",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const renderSearchPage = async (value) => {
  const container = document.querySelector(".container123");
  const dataSearch = await getAPISearch(value);
  const resultMainArtistName =
    dataSearch?.topResults?.items[0]?.data?.artists?.items[0]?.profile?.name;
  const resultMainArtistImage =
    dataSearch?.topResults?.items[0]?.data?.albumOfTrack?.coverArt?.sources[0]
      ?.url;
  const resultTracks = dataSearch?.tracks?.items;
  const resultPlaylists = dataSearch?.playlists?.items;
  let html = "";
  html += `
    <div style="display: flex;margin-top: 100px ">
      <div>`;

  for (let i = 0; i < 4; i++) {
    html += `  
              <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/${resultTracks[i]?.data?.id}?utm_source=generator"
          width="100%"
          height="100"
          frameborder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>`;
  }

  html += `
      </div>
      <div class="image">
        <p>${resultMainArtistName}</p>
        <img src="${resultMainArtistImage}" alt="">
        
      </div>
    </div>
    
      <div class="spotify-playlists">
    <h2>Spotify Playlists</h2>
    <div class="list">`;
  for (let i = 0; i < 8; i++) {
    html += `
          <div class="item">
            <img src="${resultPlaylists[i]?.data?.images?.items[0]?.sources[0]?.url}" />
            <div class="play">
              <span class="fa fa-play"></span>
            </div>
            <h4>Today's Top Hits</h4>
            <p>${resultPlaylists[i]?.data?.name}</p>
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
      <div class="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>Feelin' Good</h4>
        <p>Feel good with this positively timeless...</p>
      </div>

      <div class="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>Dark & Stormy</h4>
        <p>Beautifully dark, dramatic tracks.</p>
      </div>

      <div class="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>Feel Good Piano</h4>
        <p>Happy vibes for an upbeat morning.</p>
      </div>

      <div class="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>Feelin' Myself</h4>
        <p>The hip-hop playlist that's a whole mood...</p>
      </div>

      <div class="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>Chill Tracks</h4>
        <p>Softer kinda dance</p>
      </div>

      <div class="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>Feel-Good Indie Rock</h4>
        <p>The best indie rock vibes - classic and...</p>
      </div>

      <div class="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>idk.</h4>
        <p>idk.</p>
      </div>
    </div>

    <hr>
  `;
  container.innerHTML = html;
};
