const prodData = require('../data')
const prodCtrl = (req, res) => {
    res.json(prodData) 
 }


module.exports = prodCtrl;