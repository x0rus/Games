const mimeTypes = require('./appModules/http-utils/mime-types');
const staticFile = require('./appModules/http-utils/static-file');
const mainRouteController = require('./controllers/main');
const defaultRouteController = require('./controllers/default');
const path = require('path');
const http = require('http');
const gameRouteController = require('./controllers/game');
const voteRouteController= require('./controllers/vote');
const express = require('express');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 


const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(mainRoute, gamesRouter); 

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

/*const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break;
        case "/vote":
            voteRouteController(req, res);
            break;
        default:
            defaultRouteController(res, url);
    }
});

server.listen(3005);*/