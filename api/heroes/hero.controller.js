const Hero = require('./hero.dao');

exports.createHero = async (req, res, next) => {
    try{
        const heroInfo = {
            name: req.body.name,
            description: req.body.description
        }

        //Check for hero existence
        // let heroQuery = await Hero.find({name: heroInfo.name});
        // console.log(heroQuery);
        // if(heroQuery || heroQuery.length !== 0){
        //     return res.status(400).json({error: 'Hero already exists'});
        // }

        //Creating new hero
        let hero = new Hero(heroInfo);
        let dbResp = await hero.save();
        return res.json(dbResp);
    }
    catch(err){
        return res.status(500).json(err);
    }
}

exports.getHeroes = async (req, res, next) => {
   try{
    let heroes = await Hero.find({})
    return res.json(heroes);
   }
   catch (err){
        return res.status(500).json(err);
   }
}

exports.getHero = async (req, res, next) => {
    try{
      let hero = await Hero.find({name: req.params.name});
      return res.json(hero);
    }
    catch (err){
      return res.status(500).json(err);
    }
};

exports.updateHero = async (req, res, next) => {
    try{
        
        let heroUpdate = await Hero.findOneAndUpdate({name: req.params.name}, {$set: req.body.heroInfo}, {new: true})
        return res.json(heroUpdate);
    }
    catch(err){
        return res.status(500).json(err);
    }
}

exports.removeHero = async (req, res, next) => {
    try{
        let heroName = req.params.name;
        let heroRemove = await Hero.findOneAndDelete({name: heroName});
        if(heroRemove === null){
          return res.status(400).json({error: "There is nothing to delete!"})
        }
        return res.json(heroRemove);
    }
    catch(err){
        return res.status(500).json(err);
    }
}