let express = require('express');
let recordRoutes =  require('./records.js');

const router = express.Router();

/** GET /api-status - Check status of service */
router.get('/api_status', (req, res) =>
  res.json({
    status: "OK"
  })
);

router.use('/records', recordRoutes);

export default router;
