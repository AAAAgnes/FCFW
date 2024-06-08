const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // 'views' 디렉토리 경로 설정

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index'); // 'views/index.ejs' 파일을 렌더링
});

// 라우트 설정
app.get('/luck', (req, res) => {
  const imageNumber = req.query.image;
  res.render('luck', { imageNumber }); // 'views/luck.ejs' 파일을 렌더링하고 imageNumber 변수를 전달
});

// 라우트 설정
app.get('/event', (req, res) => {
  res.render('event'); // 'views/event.ejs' 파일을 렌더링
});

// 라우트 설정
app.get('/info', (req, res) => {
  res.render('info'); // 'views/event.ejs' 파일을 렌더링
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
