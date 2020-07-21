import express from 'express';
import IndexController from '../controllers/indexController.js';
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('HOLA');
});

router.get('/inicio',IndexController.home);


export default router;