let Record = require('../models/record');
//const mongoose = require('mongoose');

//const RecordSchema = mongoose.models;

exports.get = (req, res, next) => {

  var sStartDate = req.body.startDate;
  var sEndDate = req.body.endDate;
  var iMinCount = req.body.minCount;
  var iMaxCount = req.body.maxCount;

  Record.aggregate([
    {
      $addFields: { sDate: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } } }
    },
    { $match: { sDate: { $gte: sStartDate, $lte: sEndDate } } },
    {
      $project: {
        _id: false,
        totalCount: { $sum: "$counts" },
        createdAt: true,
        key: true
      }
    },
    { $match: { totalCount: { $gte: iMinCount, $lte: iMaxCount } } },
  ]).then((records) => {
    var response =
    {
      "code": 0,
      "msg": "Succcess",
      "records": records
    };
    res.json(response)
  }).catch((e) => {
    next(e)
  });

  // .then((records) => res.json(records),
  //   (e) => next(e));
};

//{ $dateToString: { format: "%Y-%m-%dT%H:%M:%S.%LZ", date: "$createdAt" } }