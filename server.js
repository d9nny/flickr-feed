/* jshint esversion: 6 */

const express = require('express');
const app = express();
const request = require('request');
const rp = require('request-promise-native');

app.get('/api/flickr', (req, res, next) => {
    rp({
        method: 'GET',
        uri: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&nojsoncallback=?',
        json: true
    })
    .then(response => {
        return res.status(200).json({ success: true, data: response });
    })
    .catch(err => {
        return res.status(200).json({ success: false });
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
