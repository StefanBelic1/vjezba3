const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/slike', (req, res) => {
  const dataPath = path.join(__dirname, 'images.json');
  const images = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  res.render('slike', { images });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server pokrenut na http://localhost:${PORT}`);
});