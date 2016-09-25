var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articelOne = {
    title:'Article one|Anjali Pai',
    heading:'Article One',
    date:'Sept 5, 2016',
    content: `<p>
       This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the
       content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
       This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is
       content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
      </p>
      <p>
       This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the
       content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
       This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is
       content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
      </p>
      <p>
       This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the
       content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
       This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is
       content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
      </p>`
    
};

function createTemplate(data){
    var title =data.title;
    var heading = data.heading;
    var date = data.date;
    var content =data.content;
    
    var htmlTemplate =`
            <!doctype html>
        <head>
            <title>
                Article one | Anajli Pai
            </title>
            <meta name="viewport" content="width-device-width, initial-scale-1" />
            <link href="/ui/style.css" rel="stylesheet" />
            <style>
             
            </style>
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                Article one
            </h3>
        
            <div>
            sept 23,2016
            </div>
            <div>
              <p>
               This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the
               content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
               This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is
               content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
              </p>
              <p>
               This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the
               content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
               This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is
               content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
              </p>
              <p>
               This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the
               content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
               This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is
               content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content
              </p>
            </div>
            </div>
        
        
        </body>
        </html>
`;
}





app.get('/article-one', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
