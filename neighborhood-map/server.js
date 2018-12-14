const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const cache = require('memory-cache');
let queue = require('express-queue');

const app = express();
const port = process.env.PORT || 5000;

//Must be limited because of yelp free tier restrictions
const queueMw = queue({ activeLimit: 3, queuedLimit: 15});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(queueMw);

app.get('/api/yelp', (req, res) => {
    const uri = req.headers['x-uri'];
    const authentication = req.headers['authorization'];
    //If we have seen this URI before return the cached body, otherwise query the Yelp API
    if (cache.get(uri) === null) {
        let options = {
            uri: req.headers['x-uri'],
            headers: {
                'authorization': authentication
            },
            json: true // Automatically parses the JSON string in the response
        };
        rp(options)
            .then(function (yelpData) {
                const data = {
                    code: 200,
                    data: yelpData,
                    cached: false
                };
                //Put in the cache for 10 minutes.
                cache.put(uri, data, 600000);
                res.send(data);
            })
            .catch(function (err) {
                res.send({
                    code: 500,
                    data: err
                });
            });
    } else {
        //if cached give it back
        let data = cache.get(uri);
        //Set cached to true so we know it is a cached response.
        data.cached = true;
        res.send(data);
    }


});

app.listen(port, () => console.log(`Listening on port ${port}`));