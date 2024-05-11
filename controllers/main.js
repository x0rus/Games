const staticFile = require("../appModules/http-utils/static-file");
const { getData, endpoins} = require('../appModules/api')
const { config, makeRatingFile } = require('../appModules/rating')

async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoins.games);
    console.log(data);
    await makeRatingFile(config.PATH_TO_RATING_FILE, data)
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;