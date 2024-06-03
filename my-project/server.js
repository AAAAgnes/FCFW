const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 라우트 설정
app.get('/luck', (req, res) => {
  const imageNumber = req.query.image;
  res.render('luck', { imageNumber: imageNumber });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
    
   