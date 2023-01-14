const { readFile} = require('fs');
// const path = require('path');


const getText = (path) => {
  return new Promise((res,rej) => {
      readFile(path, 'utf-8', (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data)
        }
      })
  })
}

getText('./content/input.txt')
  .then(result => console.log(result));