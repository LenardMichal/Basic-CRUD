const Hero = require('./hero.controller');
const router = require('express').Router();


router.post('/heroes', Hero.createHero);
    
router.get('/heroes', Hero.getHeroes);

router.get('/heroes/:name', Hero.getHero);

router.put('/heroes/:name', Hero.updateHero);

router.delete('/heroes/:name', Hero.removeHero);

module.exports = router;