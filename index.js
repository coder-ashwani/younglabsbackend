const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const cors = require('cors');

// app.use(cors());
// app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//serving static files
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//required endpoint as mentoined in the task
app.get('/api', (req, res) => {
    res.json({ message: "Welcome to Younglabs." });
});

app.get('/api/greet', (req, res) => {
    const name = req.query.name;
    // console.log(name);
    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }
    
    res.json({ message: `Hello, ${name}! Welcome to young labs Younglabs.` });
});


app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
})
