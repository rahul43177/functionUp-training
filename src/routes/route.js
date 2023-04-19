const express = require('express');
const lodash = require('lodash')
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const firstTask = require('../logger/logger')
const secondTask = require('../util/helper')
const  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const odd = [1,3,5,7,9,11,13,15,17,19] 
const formatting = require('../validator/formatter')
let pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]





router.get('/test-me', function (req, res) {
    firstTask.nameAndBatch()
    secondTask.date()
    // secondTask.month()
    secondTask.month()
    secondTask.batch()
   
   
    let x = lodash.chunk(months,3)
    console.log(x)
    let y = lodash.tail(odd) //retrieves all the element from an array except the first one 
    console.log(y)

    let z = lodash.union([23,43,23,44],[43,65,75,45],[45,22,12,23],[75,57,98,22],[78,98,45,33])
    console.log(z)


    console.log(lodash.fromPairs(pairs))
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});


module.exports = router;