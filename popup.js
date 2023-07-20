document.addEventListener("DOMContentLoaded", function() {
    var newsList = document.getElementById("news-list");
  
    fetchNews();
  
    function fetchNews() {
      var apiKey = "a6dd0e2e765b47e9b211cf5fc2f5c8f1";
      var apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
  
      fetch(apiUrl)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          displayNews(data.articles);
        })
        .catch(function(error) {
          console.log("Error fetching news:", error);
        });
    }
  
    function displayNews(articles) {
      for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = article.url;
        link.textContent = article.title;
        listItem.appendChild(link);
        newsList.appendChild(listItem);
      }
    }
  });


// Example: Send a notification after a delay
setTimeout(() => {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'path/to/icon.png',
    title: 'Notification Title',
    message: 'Notification Message'
  });
}, 5000); // 5000 milliseconds = 5 seconds
