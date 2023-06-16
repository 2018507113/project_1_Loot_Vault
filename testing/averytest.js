/* function fetchHighestRated() {
    const gamesUrl = `https://www.cheapshark.com/api/1.0/deals?storeID=1&metacritic=80&steamRating=80`;
  
    // Get the parent container where games will be displayed
    const parentContainer = document.getElementById("games-container");
  
    fetch(gamesUrl)
      .then(response => response.json())
      .then(data => {
        data.slice(0, 10).forEach((game) => {
          const gameName = game.title;
          const metacriticReview = game.metacriticScore;
          const steamRatingPercent = game.steamRatingPercent;
          const normalPrice = game.normalPrice;
          const id = game.dealID;
          const averageRating = (metacriticReview + steamRatingPercent) / 2;
  
          // Create a new container element for the game
          const gameContainer = document.createElement("div");
          gameContainer.classList.add("individual-container");
  
          // Create the HTML content for the game container
          gameContainer.innerHTML = `
            <h3>${gameName}</h3>
            <p>Metacritic Score: ${metacriticReview}</p>
            <p>Steam Rating: ${steamRatingPercent}</p>
            <p>Average Rating: ${averageRating}</p>
            <p>Normal Price: ${normalPrice}</p>
            <a href="https://www.cheapshark.com/redirect?dealID=${id}" target="_blank">Buy Now</a>

            <p>-----------------------------</p>
          `;
  
          // Append the game container to the parent container
          parentContainer.appendChild(gameContainer);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  
  highestRatedBtn.addEventListener('click', function(event) {
    event.preventDefault();
    gamesContainer.innerHTML = "";
    fetchHighestRated();
  });


   */

  //&dates=${ratedStartDate},${ratedEndDate}
  let ratedStartDate = dayjs().format('YYYY-MM-DD')
  let ratedEndDate = dayjs().subtract(1, 'year').format('YYYY-MM-DD')

function fetchHighRated() {
  var gamesUrl = `https://api.rawg.io/api/games?key=${apiKey}&metacritic&platforms=18,1,7&ordering=-metacritic`;

  fetch(gamesUrl)
    .then(response => response.json())
    .then(data => {
      var games = data.results.slice(0, 10);
      console.log(data)

      games.forEach(game => {
        const gameName = game.name;
        const metacritic = game.metacritic;
        const purchaseLink = game.stores[1];
        console.log(gameName, metacritic);

        gamesContainer.innerHTML += `  
          <h3>${gameName}</h3>
          <p>Metacritic Score: ${metacritic}</p>
          <a href="${purchaseLink}" target="_blank">Buy Now</a>


          <p>-----------------------------</p>
        `;
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

highestRatedBtn.addEventListener('click', function(event) {
  event.preventDefault();
  gamesContainer.innerHTML = "";
  fetchHighRated();
});
  