console.log('Server is starting');
const express = require('express');
const app = express();
app.use(express.static('website'));
app.set('view engine', 'html')

app.get('/', function (req, res ) {
  res.render('index');
})

app.get('/semesterGPA.html', function (res, req) {
  res.render('semesterGPA');
})

app.get('/courseGrade.html', function (res, req) {
  res.render('courseGrade');
})

app.get('/cumulativeGPA.html', function (res, req) {
  res.render('cumulativeGPA');
})

app.listen(3000, function () {
  console.log('app starting')
})
