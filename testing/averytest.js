function fetchHighestRated() {
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
  
          // Create a new container element for the game
          const gameContainer = document.createElement("div");
          gameContainer.classList.add("individual-container");
  
          // Create the HTML content for the game container
          gameContainer.innerHTML = `
            <h3>${gameName}</h3>
            <p>Metacritic Score: ${metacriticReview}</p>
            <p>Steam Rating: ${steamRatingPercent}</p>
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
    event.preventDefault()
    gamesContainer.innerHTML = ""
    fetchHighestRated(event)
    })