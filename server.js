const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Node.js básica rodando 🚀  2.3we32' });
});

app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nome: 'Josué' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Carlos' }
  ]);
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  res.json({ message: 'Usuário recebido com sucesso!', usuario });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
