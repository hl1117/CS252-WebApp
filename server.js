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

app.get('/desiredGrade.html', function (res, req) {
  res.render('desiredGrade');
})

app.get('/profile.html', function (res, req) {
  res.render('profile');
})

app.get('/us.html', function (res, req) {
  res.render('us');
})

app.listen(3000, function () {
  console.log('app starting')
})
