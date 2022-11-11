/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  // returns tweet card html element
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
          <p>${escape(tweetData.content.text)}</p>
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
    $('.tweets-container').empty()

    // adds new tweet card to the top of the stack
    for (let tweet of tweets) {
      $('.tweets-container').prepend(createTweetElement(tweet));
    }
  };

  // tweet submission form, text input field
  $('.new-tweet form').submit(function(event) {
    event.preventDefault();
    const tweetData = $("#tweet-text-field").val();

    // //  use jQuery to insert the error message text into the error element. Then show the error element.
    // if (tweetData.length > 140) {
    //   $('.error').empty()
    //   const $error = `
    //   <div class="error-message">
    //     <p>Error: Please limit your tweet to 140 characters!</p>
    //   </div>
    //   `
    //   $(".error").append($error);
    //   return $(".error").slideDown();
    // }

    // // if the text box is empty, return errr message
    // if (!tweetData) {
    //   $('.error').empty()
    //   const $error = `
    //   <div class="error-message">
    //     <p>Error: The text field is empty!</p>
    //   </div>
    //   `
    //   $(".error").append($error).slideDown(slideDown);
    // }

    const serialized = $(".new-tweet form").serialize();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: serialized,
    }).done(() => {

      // reloads page after new tweet is submitted
      loadTweets();
    });
  });

  const loadTweets = () => {
    $.get("/tweets").then((data) => renderTweets(data));
  };

  loadTweets();
});