const bcrypt = require('bcrypt')
const saltRounds = 10;

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static');
const { RSA_NO_PADDING } = require('constants');
const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.use(express.urlencoded({ extended: true }));

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/styles?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


app.get('/home', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.json({ "status": "OK" })

})

app.get('/api/download', async (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    await res.download(path.join(__dirname, `public/eui_css/eui_css.min.css`), `eui_csscss.min.css`, function (err) {
        if (err) {
            return res.json({ "status": "error to download file" })
        } else {
            return res.redirect(`http://eui_css.herokuapp.com/`)
        }
    })

})

app.get('/api/cdn/eui_css.min.css', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.sendFile(__dirname + `/public/eui_csscss/eui_csscss.min.css`)

})

app.get('**', (req, res) => {
    
    return res.redirect(`/?redirectroute=${req.path}`)

})

const port = process.env.PORT || 8080

app.listen(port)