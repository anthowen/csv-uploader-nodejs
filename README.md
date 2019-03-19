# csv-uploader-nodejs
This simple nodejs application takes data from uploaded csv, and show it as a sortable dashboard on a webpage.

### If you using docker and docker-compose:
```
$ docker-compose build
$ docker-compose up
```
### Else you need nodejs installed locally and run the following
```
$ npm install
```
### For development environment
```
$ npm run start:dev
```
### For production
```
$ npm start
```
### To run tests
```
$ npm test
```
### Sample data

This example app assumes that the uploaded csv file has 3 columns as follows (including the header row):

| id | name | memo |
|---|---|---|
| 1 | AAA | xxxxxxxx  |
| 2 | BBBB | yyyyy  |
| 3 | CCC | zzzzz  |
