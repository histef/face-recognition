const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: '1',
      name: 'John',
      email: 'john@gmail.com',
      password: 'testJohn',
      entries: 0,
      joined: new Date()
    },
    {
      id: '2',
      name: 'Sal',
      email: 'sal@gmail.com',
      password: 'testSal',
      entries: 0,
      joined: new Date()
    }
  ]
}

const findUser = (id, res) => {
  let foundUser = database.users.filter(user => {
    if(user.id === id) {
      return res.json(user)
    }
  })
  if (foundUser.length === 0) {
    res.status(400).json('user not found');
  }
}

app.get('/', (req, res) => {
  res.send(database.users);
})

app.post('/signin', (req,res) => {
  if(req.body.email === database.users[0].email){
    if(req.body.password === database.users[0].password){
      //turns into json string
      res.json(database.users[0]);
    } else {
      res.status(400).json('error logging in');
    }
  }
})

app.post('/register', (req,res) => {
  const { email, name, password } = req.body;
  database.users.push({
      id: '3',
      name: name,
      email: email,
      password: password,
      entries: 0,
      joined: new Date()
  })
  //return a response, so we know it got added
  res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  findUser(id, res);
})

app.put('/image', (req, res) => {
  const { id } = req.body;
  let foundUser = database.users.filter(user => {
    if(user.id === id) {
      //add entries counter
      user.entries++
    }
  })
  findUser(id, res);
})

app.listen(3000, () => {
  console.log('app is running on port 3000')
})

//image -> put -> updated user rank count