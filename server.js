const express = require('express')
const app = express()
const port = 3000

// Trova metodo per salvare dati (SQLITE? Servizio DB?)

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {            // Vedi se puoi mettere SynapSeeds come nome
  res.render('./extensions/index.ejs', { _page_title : "Home" })
})
app.listen(port, () => console.log(`App listening on port ${port}!`))