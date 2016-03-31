var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');


//this goes to api/fish
router.route('/')
  .get(function(req, res){          //"get is http verbage"/
    Fish.find(function(err, fishes){
      if(err) {
        console.log(err)
      } else {
        res.json(fishes)
      }
    })
  })

  .post(function(req, res){
    var fish = new Fish({
      name:         req.body.name,
      color:        req.body.color,
      people_eater: req.body.people_eater,
      length:       req.body.length,
      img:          req.body.img,
    })
    //save fish with node style callback

    fish.save(function(err, fish) {
      if (err) {
       res.status(500).send(err, 'Something failed!');
      } else {
        res.json (fish);
      }
    })
  });

//without one_fish, next route would conflict...
router.route('/oneFish/:fish_id')
  .get(function(req, res) {
    Fish.findById(req.params.fish_id, function(err, fish) {
      if (err) {
        res.status(500).send(err, "Something broke!");
      } else {
        res.json(fish);
      }
    })
  });
// api/fish/man_eater
  router.route('/man_eater')
    .get(function(req, res) {
      Fish.find({people_eater: true}, function(err, fish){
      if(err){
        res.status(500).send(err, 'Something broke!');
      } else {
        res.json(fish)
      }
    })
  });

router.route('/:fish_id')
  .get(function(req, res) {
    Fish.findById(req.params.fish_id, function(err, fish) {
      if (err) {
        res.status(500).send(err, "Something broke!");
      } else {
        res.json(fish);
      } 
    });
  })
  .put(function(req,res) {
    Fish.findById(req.params.fish_id, function(err, fish) {
      if (err) {
        res.status(500).send(err, "Something broke!");
      } else {
        fish.name = req.body.name ? req.body.name : fish.name;
        fish.color = req.body.color ? req.body.color : fish.color;
        fish.people_eater = req.body.people_eater ? req.body.people_eater : fish.people_eater;
        fish.length = req.body.length ? req.body.length : fish.length;
        fish.img = req.body.img ? req.body.img : fish.img;

        fish.save(function(err, newFish) {
          if (err) {
            console.log(err);
          } else {
            res.json({message: 'Fish Updated'});
          }
        })
      }
  });
})
  .delete(function(req, res, next){
      Fish.remove({_id: req.params.fish_id}, function(err, fish){
        if(err){
          console.log(err);
          next();
        } else {
          console.log(Fish);
          res.json({message: "fish deleted!"})
        }
      });
  })

 

module.exports = router;