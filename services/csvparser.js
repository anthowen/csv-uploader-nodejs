const fs        = require('fs');
const csv       = require('csv');
const sqlite3   = require('sqlite3').verbose();
const env       = process.env.NODE_ENV || 'development';
const db        = new sqlite3.Database(ROOT_DIR + "/" + env + ".db");

const insertCsv = (filePath, responseCallback, removeFlag) => {
    var start = Date.now();
    var runs = 100000;
    var parser = csv.parse();

    fs.createReadStream(filePath).pipe(parser);
    db.serialize(function() {

        db.run("begin transaction");
        var stmt = db.prepare("insert into CsvUserRows (first_name, last_name, email, createdAt, updatedAt) values (?, ?, ?, ?, ?)");

        parser.on('data', (chunk) => {
            
            stmt.run( 
                chunk[0], 
                chunk[1], 
                chunk[2],
                new Date().toString(),
                new Date().toString()
            );
           
            //console.log(chunk);
        });

        parser.on('error', (err) => {
            console.log(err);
        });

        parser.on('end', () => {
            console.log('end');
        });
     
    });

    parser.on('finish', () => {
            console.log('finished');
            db.run("commit");
            db.close(function() {
                if(removeFlag) {
                    fs.unlink(filePath, () => {
                        responseCallback();
                    })
                } else {
                    responseCallback();
                } 
            });
    });
}

module.exports = {
    insertCsvToDb: insertCsv
};