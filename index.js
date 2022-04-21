const tvShow = {
  "id": 1,
  "name": "Under the Dome",
  "rating": {
    "average": 6.5
  },
  "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
  },
};

const tvShowApiUrl = 'https://api.tvmaze.com/shows';

fetch(tvShowApiUrl)
  .then(response => response.json())
  .then(allTvShows => {
    const tvShowContainer = document.querySelector('.tv-show-container');
    tvShowContainer.innerHTML = '';

    allTvShows.forEach(tvShowInfo => {
      const tvShowEl = document.createElement('li');
      tvShowEl.classList.add('tv-show');

      const tvShowName = document.createElement('h2');
      tvShowName.classList.add('tv-show-name');
      tvShowName.textContent = tvShowInfo.name;

      const tvShowRating = document.createElement('p');
      tvShowRating.classList.add('tv-show-rating');
      tvShowRating.textContent = `rating ${tvShowInfo.rating.average}`;

      const tvShowSummary = document.createElement('p');
      tvShowSummary.classList.add('tv-show-summary', 'closed');
      tvShowSummary.textContent = 'show summary >';
      tvShowSummary.addEventListener('click', toggleSummary);

      function toggleSummary(event) {
        const summaryEl = event.target;

        if (summaryEl.classList.contains('closed')) {
          summaryEl.classList.remove('closed');
          tvShowSummary.innerHTML = tvShowInfo.summary;
        } else if (!summaryEl.classList.contains('closed')) {
          summaryEl.classList.add('closed');
          tvShowSummary.textContent = 'show summary >';
        }
      }


      const tvShowImage = document.createElement('img');
      tvShowImage.classList.add('tv-show-image');
      tvShowImage.src = tvShowInfo.image.medium;

      tvShowEl.append(tvShowName);
      tvShowEl.append(tvShowRating);
      tvShowEl.append(tvShowSummary);
      tvShowEl.append(tvShowImage);
      tvShowContainer.append(tvShowEl);
    });
  });