var sass = require("node-sass");
var eyeglass = require("eyeglass");
var fs = require("fs");
var colors =require('colors');

var options = eyeglass({
    file: 'src/sass/styles.scss',
    outFile: 'public/css/styles.css',
    eyeglass: {
      engines: {
        sass: require('node-sass'),
        buildDir: 'public/css/styles.css'
      }
    }
  });

sass.render(options, function(error, result) {
	if(!error){
      fs.writeFile('public/css/styles.css', result.css, function(err){
        if(!err){
          console.log('Stylesheet ' .rainbow + 'successfully created'.red)
        } else { console.log(err)}
      });
    } else { console.log(error)}
});

