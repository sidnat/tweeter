# Tweeter Project

Tweeter is a simple, single-page Twitter clone using HTML, CSS, JS, jQuery and AJAX front-end, and Node, Express back-end.

## Getting Started

1. Fork and Clone this repository onto your local device.

2. Install dependencies using the npm install command.

3. Start the web server using the npm run local command. The app will be served at http://localhost:8080/.

4. Go to http://localhost:8080/ in your browser.

5. Increase browser width for desktop layout
!["screenshot of Desktop layout."](https://)

6. Decrease browser width for mobile layout
!["screenshot of Mobile layout."](https://)

7. Type your tweet in the text field ("What are you humming about?)
!["screenshot of text input area."](https://)

8. The character counter turns red when more than 140 characters have been typed, and it shows how many characters over the 140 limit have been typed.
!["screenshot of character limit warning."](https://)

9. When a user submits a valid tweet, the list of tweets is updated.
!["screenshot of posted tweet."](https://)

10. When a user submits an invalid tweet (the tweet text area is empty or contains more than 140 characters), an appropriate error message is displayed.
!["screenshot of empty text field warning."](https://)

## Dependencies

- Express: 4.13.4 or above
- Node 5.10.x or above
- Body-parser: 1.15.2 or above
- Chance: 1.0.2 or above
- md5: 2.1.0 or above