const express = require('express');
//const sharp = require('sharp'); // !!! maybe you don't need it !!!
const app = express()
const port = 3000

// Trova metodo per salvare dati (SQLITE?)

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
	res.render('./extensions/index.ejs', { _page_title: "Synapseeds - Home" })
})
app.get('/:project', (req, res) => {
	res.render('./extensions/project.ejs', { _page_title: req.params.project }) //pass the project so it can do the query??
})
app.get('/events', (req, res) => {
	res.render('./extensions/events.ejs', { _page_title: "Synapseeds - Events" })
})
app.get('/profile', (req, res) => {
	res.render('./extensions/profile.ejs', { _page_title: "Synapseeds - My Profile" })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))