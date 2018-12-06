const path = require('path');
const fs = require('fs');
const sass = require('node-sass');
const destPath = path.join('src', 'assets');
const inputPath = path.join('src', 'assets');
const customList = ['custom-1', 'custom-2'];

customList
  .forEach(item => {
    var result = sass.renderSync({
      file: path.join(inputPath, `${item}.scss`),
      outputStyle: 'compressed',
      importer: function(url, prev, done) {
        if (url[0] === '~') {
          url = path.resolve('node_modules', url.substr(1));
        }

        return { file: url };
      }
    })

    fs.writeFile(path.join(destPath, `${item}.css`), result.css, function(err) {
      if (err) {
        console.log(err);
        throw err;
      }
    });
  });
