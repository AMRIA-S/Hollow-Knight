const express = require('express');
const app = express();
// const createurs = require('./data/createurs');
// const path = require('path');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// app.use('/ex', express.static(path.join(__dirname, 'ex')));
// app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use(express.json());

// app.get('/', (req, res, next) => {
//     createurs.find().then(
//         (createur) => {
//             const ex = createur.map((et) => {
//                 et.picture = req.protocol + '://' + req.get('host') + '/Images/' + te.picture;
//                 return et
//             });
//             res.status(200).json(ex);
//         }
//     ).catch(
//         () => {res.status(500).json('pb')}
//     )
// })

module.exports = app;