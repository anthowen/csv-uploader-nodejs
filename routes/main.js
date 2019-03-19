const express = require('express');
const router = express.Router();
const models = require('../models');
const crypto = require('crypto');
const csvparser = require('../services/csvparser');
const pagination = require('../middlewares/pagination');

/* GET home page. */
router.get('/', (req, res, next) => {
 
  res.render('index', { title: 'Home' });
});

router.get('/show_all', pagination, (req, res, next) => {

  models.CsvUserRow.findAll({ limit: res.pagination.limit, offset: res.pagination.offset }).then(csvRows => {
    res.render('main_table', {
      title: "Main Table",
      csvRows: csvRows,
      pagination: res.pagination
    })
  });
});

router.get('/load_csv', (req, res) => {
  res.render('load_form', {
    title: "Load Form"
  })
});

router.post('/load_csv', (req, res) => {
  if(!req.files) {
    res.status(400).send('No file were uploaded');
  }

  let userfile = req.files.userfile;

  crypto.randomBytes(32, (err, buf) => {
      if(err)
        throw err;
      let filePath = `./uploads/${buf.toString('hex')}.csv`;
      userfile.mv(filePath, (err) => {
      if(err) {
        res.send(500).send(err);
      }
      csvparser.insertCsvToDb(filePath, () => {
        res.send("File uploaded");
      }, true);
  });
    });
});

module.exports = router;
