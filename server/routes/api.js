const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

const db = "mongodb://kutaygunal:6387@ds259778.mlab.com:59778/socialowl";
mongoose.Promise = global.Promise;

mongoose.connect(db,function(err){
  if(err){
    console.log("Error:" + err );
  }
});

router.get('/userAccounts', function (req,res){
  console.log('Get request for all users') ;
  User.find({})
  .exec(function(err,userAccounts){
    if(err){
      console.log("Error retrieving users");
    }
    else {
      res.json(userAccounts);
    }
  });
});

router.get('/userAccounts/:id', function (req,res){
  console.log('Get request for a single user') ;
  User.findById(req.params.id)
  .exec(function(err,userAccount){
    if(err){
      console.log("Error retrieving user");
    }
    else {
      res.json(userAccount);
    }
  });
});


router.post('/userAccounts', function (req,res){
  console.log('Create a user') ;
  var newUser = new User();
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.confirm = req.body.confirm;
  newUser.name = req.body.name;
  newUser.shortname = req.body.shortname;
  newUser.reknown = req.body.reknown;
  newUser.bio = req.body.bio;
  newUser.posts = req.body.posts;
  newUser.postsDates = req.body.postsDates;
  newUser.friends = req.body.friends;
  newUser.save(function(err,createdUser){
    if(err){
      console.log("Error creating user");
    }
    else{
      res.json(createdUser)
    }
  });
}) ;

router.put('/userAccounts/:id',function(req,res){
  console.log("Updating users");
  User.findByIdAndUpdate(req.params.id,
    {
      $set :{ username:  req.body.username,
              password:  req.body.password,
              firstName: req.body.firstName,
              lastName:  req.body.lastName,
              confirm:   req.body.confirm ,
              name:  req.body.name,
              shortname:  req.body.shortname,
              reknown: req.body.reknown,
              bio:  req.body.bio,
              posts:   req.body.posts,
              postsDates: req.body.postsDates,
              friends: req.body.friends
            }
    },
    {
      new: true
    },
    function(err,updatedUser){
      if(err){
        res.send("Error updating user");
      }else {
        res.json(updatedUser);
      }
    }
  );
});

router.delete('/userAccounts/:id',function(req,res){
  console.log("Deleting users");
  User.findByIdAndRemove(req.params.id,function(err,deletedUser){
    if(err){
      res.send("Error deleting user");
    }else{
      res.json(deleteUser);
    }
  });
});

module.exports = router;
