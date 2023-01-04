import express from "express";
import cors from "cors";
import {config} from "dotenv";

const app = express();

// Add models
import usersModel from './models/user-model.js';
let users = usersModel;

// Port variable
config();
const PORT = process.env.PORT || 3001;

// Cors middleware to allow cross-origin requests
// When you limit the domains that are allowed to access your API, you can use the cors middleware to allow cross-origin requests.
// app.use(cors({ origin: ['http://example.com', 'http://my-app.com'] }));
app.use(cors());

// Parses incoming Data in json format
app.use(express.json());

// For new user a new id is generated
const generateId = (arr) => {
    const maxId = arr.length > 0
        ? Math.max(...arr.map(n => n.id))
        : 0;
    return maxId + 1;
}

// Routes
// Shows a link to the Repo
app.get('/', (req, res) => {
  res.send('<h1>Hi two check the API-Server go to:</h1>' +
      '<br>'
      + '<a href="https://github.com/CodingBapthi/simple-express-api.git">simple-express-api</a>');
})
// Show all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Show a special user
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({error: 'User not found'}).end();
    }
});

// Add a new user
app.post('/users', (req, res) => {
    const newUser = req.body;

    if (!newUser.name || !newUser.email || !newUser.password) {
        return res.status(400).json({
            error: 'Name, email, and password are required'
        });
    }

    const user = {
        id: generateId(users),
        name: {
            first: newUser.name.first,
            last: newUser.name.last
        },
        email: newUser.email,
        password: newUser.password,
        createdAt: new Date()
    }
    users = users.concat(user);
    res.json(user);
});

// Edit a user
app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    const newUser = req.body;
    // Check if user exists
    if (!user) {
        return res.status(404).json({error: 'User not found'}).end();
    }
    // Check witch fields must be updated
    if (newUser.name && newUser.name.first) {
        user.name.first = newUser.name.first;
    }
    if (newUser.name && newUser.name.last) {
        user.name.last = newUser.name.last;
    }
    if (newUser.email) {
        user.email = newUser.email;
    }
    if (newUser.password) {
        user.password = newUser.password;
    }
    res.json(user);
});

// Delete a user
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    users = users.filter(user => user.id !== id);
    res.status(204).end();
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

