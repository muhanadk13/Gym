document.addEventListener('scroll', function () {
  const body = document.body;


  if (window.scrollY > 1) { 
    body.classList.add('show-buttons');
  } else {
    body.classList.remove('show-buttons');
  }
});


const quotes = [
    "The only bad workout is the one that didn’t happen. - Unknown",
    "Push yourself because no one else is going to do it for you. - Unknown",
    "Success is not given. It is earned. - Unknown",
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    "Your only limit is you. - Unknown",
    "The body achieves what the mind believes. - Unknown",
    "Don’t count the days, make the days count. - Muhammad Ali",
    "Fitness is not about being better than someone else. It’s about being better than you used to be. - Unknown",
    "Train insane or remain the same. - Unknown",
    "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun",
    "You don’t have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Don’t wait for the perfect moment. Take the moment and make it perfect. - Unknown",
    "Strength does not come from what you can do. It comes from overcoming the things you once thought you couldn’t. - Rikki Rogers",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Fall in love with taking care of yourself. - Unknown",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "Don’t limit your challenges. Challenge your limits. - Unknown",
    "A champion is someone who gets up when they can’t. - Jack Dempsey",
    "Discipline is the bridge between goals and accomplishment. - Jim Rohn",
    "Sweat is fat crying. - Unknown",
    "You are stronger than you think. - Unknown",
    "The pain you feel today will be the strength you feel tomorrow. - Unknown",
    "No matter how slow you go, you are still lapping everybody on the couch. - Unknown",
    "Your fitness is 100% mental. Your body won’t go where your mind doesn’t push it. - Unknown",
    "Great things never come from comfort zones. - Unknown",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Work hard in silence, let success be your noise. - Frank Ocean",
    "If it doesn’t challenge you, it won’t change you. - Fred DeVito"
];


function getCurrentQuoteIndex() {

  const numberOfQuotes = quotes.length;
  

  const now = new Date();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysSinceEpoch = Math.floor(now.getTime() / millisecondsPerDay);
  

  return daysSinceEpoch % numberOfQuotes;
}


function displayQuote() {
  const quoteElement = document.querySelector('.quote');
  const quoteIndex = getCurrentQuoteIndex();
  quoteElement.textContent = quotes[quoteIndex];
}


window.onload = displayQuote;


