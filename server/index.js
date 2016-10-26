var Feed = require('rss-to-json');
var fs = require('fs');
var path = require('path');


var fileName = path.join(__dirname, 'api','feeds.json');
console.log(fileName);

Feed.load('https://kodi.tv/feed/', function (err, rss) {
      if(!err) {
            fs.writeFile(fileName, JSON.stringify(rss), function (err) {
                  if (err) {
                        return console.log(err);
                  } 
                  console.log("The file was saved!");
            });
      }
      //console.log(rss);
});