const Hero = require('./hero.dao');

exports.createHero = async (req, res, next) => {
    try{
        const heroInfo = {
            name: req.body.name,
            description: req.body.description
        }

        //Check for hero existence
        //TODO
        // let heroQuery = await Hero.find({name: heroInfo.name});

        //Creating new hero
        let hero = new Hero(heroInfo);
        let dbResp = await hero.save();
        res.json(dbResp);
    }
    catch(err){
        res.json(err)
    }
}

exports.getHeroes = async (req, res, next) => {
   try{
    let heroes = await Hero.find({})
    res.json(heroes);
   }
   catch (err){
       res.json(err);
   }
}

exports.getHero = async (req, res, next) => {
    try{
      let hero = await Hero.find({name: req.params.name});
      res.json(hero);
    }
    catch (err){
        res.json(err);
    }
};

exports.updateHero = async (req, res, next) => {
    try{
        let heroInfo = {
            name: req.body.name,
            description: req.body.description
        }
        let heroUpdate = await Hero.findOneAndUpdate({name: heroInfo.name}, {$set: heroInfo}, {new: true})
        res.json(heroUpdate);
    }
    catch(err){
        res.json(err);
    }
}

exports.removeHero = async (req, res, next) => {
    try{
        let heroName = req.body.name;
        let heroRemove = await Hero.findOneAndDelete({name: heroName});
        res.json(heroRemove);
    }
    catch(err){
        res.json(err);
    }
}