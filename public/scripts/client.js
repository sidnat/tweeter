/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const createTweetElement = (tweetData) => {
    const $tweet = `
      <article class="tweet">
        <header class="username">
          <div class="pic-username">
            <img class="profile-pic" src=${tweetData.user.avatars}>
            <p>${tweetData.user.name}</p>
          </div>
          <p class="userhandle">${tweetData.user.handle}</p>
        </header>
        <div class="posted-tweet">
          <p>${tweetData.content.text}</p>
        </div>
        <footer class="metadata">
          <p>${timeago.format(tweetData.created_at)
      }</p>
          <div class="retweet-icons">
            <i class="fa-solid fa-flag icon"></i>
            <i class="fa-solid fa-retweet icon"></i>
            <i class="fa-solid fa-heart icon"></i>
          </div>
        </footer>
      </article>
    `;

    return $tweet;
  };

  // renders array of tweets into tweet cards.
  const renderTweets = (tweets) => {

    // adds new tweet to the top of the stack
    for (let tweet of tweets) {
      $('.tweets-container').prepend(createTweetElement(tweet));
    }
  };

  // tweet submission form, text input field
  $('.new-tweet form').submit(function(event) {
    event.preventDefault();
    const tweetData = $("#tweet-text-field").val();

    if (tweetData.length > 140) {
      return alert("Please limit your tweet to 140 characters!");
    }

    // if the text box is empty, return errr message
    if (!tweetData) {
      return alert("The text field is empty!");
    }

    const serialized = $(".new-tweet form").serialize();
    const safeTweetData = $("<div>").text(serialized).val();

    console.log(safeTweetData);

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: safeTweetData,
    }).done(() => {

      // reloads page after new tweet is submitted
      location.reload();
    });
  });

  const loadTweets = () => {
    $.get("/tweets").then((data) => renderTweets(data));
  };

  loadTweets();
});