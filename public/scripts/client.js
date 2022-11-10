/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function () {
  const createTweetElement = (tweetData) => {
    const $tweet = `
      <article class="tweet">
        <header class="username">
          <div class="pic-username">
            <img class="profile-pic" src=${tweetData.user.avatars}>
            <p>${tweetData.user.name}</p>
          </div>
          <p class="userhandle">${tweetData.user.handle}</p>
        </header class="username">
        <div class="posted-tweet">
          <p>${tweetData.content.text}</p>
        </div>
        <footer class="metadata">
          <p>${tweetData.created_at
          }</p>
          <div class="retweet-icons">
            <i class="fa-solid fa-flag icon"></i>
            <i class="fa-solid fa-retweet icon"></i>
            <i class="fa-solid fa-heart icon"></i>
          </div>
        </footer>
      </article>
    `

    return $tweet
  };
  
  const renderTweets = (arrOfTweets) => {
    for (let tweet of arrOfTweets) {
      $('.tweets-container').append(createTweetElement(tweet));
    }
  };

  renderTweets(data);
  
  $('.new-tweet form').submit(function(event) {
    event.preventDefault();
    const serializedData = $(".new-tweet form").serialize()
    console.log(serializedData);
    
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: serializedData
    });
  });
});

