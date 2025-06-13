const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Kullanıcı adı ve şifre sabit (gerçek sistemde veritabanından alınır)
const kullanıcı = {
  username: 'admin',
  password: '1234'
};

app.use(express.static('public')); // login.html buradan sunulur
app.use(express.json());

app.post('/giris', (req, res) => {
  const { username, password } = req.body;

  if (username === kullanıcı.username && password === kullanıcı.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Hatalı giriş' });
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
