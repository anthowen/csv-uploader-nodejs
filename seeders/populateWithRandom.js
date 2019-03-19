const fs = require('fs');
const crypto = require('crypto');

const populateWithRandoms =  function() {
    const wstream = fs.createWriteStream('../uploads/test.csv', {
        flags: 'w+'
    });

    wstream.on('finish', () => {
        console.log("completed successfully");
    });

    wstream.on('error', (err) => {
        console.log(err);
    });

    for(let i = 0; i < 100000; i++) {
        crypto.randomBytes(16, (err, buf) => {
            if(err)
                throw err;
            let newLine = `${buf.toString('hex').slice(0,16)},${buf.toString('hex').slice(16)}, ${buf.toString('hex').slice(0,8)}@mail.com\n`;
            wstream.write(newLine);
        });
    }

}

populateWithRandoms();

module.exports = populateWithRandoms;

