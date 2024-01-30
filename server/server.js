const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

let users= [];

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/users', async(req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = {email: req.body.email, password: hashedPassword}
      users.push(user);
      res.status(201).json({message: 'User created'})
    } catch (error) {
      res.status(500).json({message: error.message})
    }
});

app.post('/users/login', async (req, res) =>{
  const user = users.find(user => user.email === req.body.email);
  if(user === null){
    return res.status(400).send('User not found');
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)){
      res.status(200).send('Success')
    }else{
      res.status(400).send('User not authorized');
    }
  } catch (error) {
    res.status(500).send(error);
  }
})

app.delete('/users', (req, res) => {
    const indexOfUserEmail = users.filter(user => user.email === req.query.email);
    if (indexOfUserEmail.length > 0) {
        users = users.filter(user => user.email !== req.query.email);
        res.status(200).json({ message: 'User deleted' });
    } else {
        res.status(400).json({ message: 'User not found' });
    }
})

app.listen(3000);