// export default router;
let recordCtrl = require('../controllers/records.js');
let express = require('express');
let router = express.Router();
let validations = require('./validation/records');

//QueryString => query property on the request object
/**  
 *  
 */
//router.post('/records', validate(validations.getRecords),recordCtrl.get);
router.post('/records', recordCtrl.get);

module.exports =  router;

// let express = require('express');
// //import validate from 'express-validation'
// let recordCtrl = require('../controllers/records.js');
// //import validations from './validation/records';

// const router = express.Router();

// router.route('/')
//     /** POST /api/records - Get Records by request payload */
//     .post(recordCtrl.filteredList);
//     // .post(validate(validations.createTask),
//     //     recordCtrl.filteredList);

//validate(validations.getRecords),recordCtrl.filteredList)
    