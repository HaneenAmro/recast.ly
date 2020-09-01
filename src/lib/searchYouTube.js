import apiKey from '../config/youtube.js';

console.log("apiKey: ", apiKey);

var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&key=${options.key}&videoEmbeddable=true`,
    type: 'GET',
    contentType: 'application/json',
    success: callback,
    error: function (data) {
      console.error(data);
    }
  });



};

searchYouTube({ key: apiKey, query: 'cats', max: 10 }, (data) => {
  console.log(data);
});

export default searchYouTube;
