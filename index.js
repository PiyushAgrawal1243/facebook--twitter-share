// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

const fb = document.getElementById('fb');
fb.addEventListener('click', shareOnFacebook);

const tweet = document.getElementById('twitter');
tweet.addEventListener('click', shareOnTwitter);

function shareOnFacebook() {
  const navUrl =
    'https://www.facebook.com/sharer/sharer.php?u=' +
    'https://github.com/knoldus/angular-facebook-twitter.git';
  window.open(navUrl, '_blank');
}

function shareOnTwitter() {
  const navUrl =
    'https://twitter.com/intent/tweet?text=' +
    'https://github.com/knoldus/angular-facebook-twitter.git';
  window.open(navUrl, '_blank');
}
