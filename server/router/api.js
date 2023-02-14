const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  console.log('hello');
  res.send('hello');
});

// router.post('/minting', async(req,res,next)=>{
//   console.log('minting');
//   res.send('minting');
// })
module.exports = router;
