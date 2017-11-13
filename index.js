var express = require('express');
var router = express.Router();
// var config = require('../config/config');
var request = require('request');
var GoogleSignIn = require('google-sign-in');
var project = new GoogleSignIn.Project('39494722778-r47d8480i7g34t199gm26qlbb7ng5jbe.apps.googleusercontent.com	')

var baseUrl = "https://api.betterdoctor.com/2016-03-01"
const express = require('express');
const http = require('http');
const ejs = require('ejs')
const fs = require('fs');
const request_module = require('request');
const bodyParser = require('body-parser')
const geocode = require('./geocode/geocode.js');//module to extract lat,lng from zip code
const doctors = require('./doctors/doctor_retrieval.js')//module to get doctors from api
const port = process.env.PORT || 3000; //configures to available port based on
//enviroment variable or port 3000 by default
var router = express.Router();
var app = express();
app.use(express.json());
app.use(express.urlencoded()); //what is urlencoded ?

//here is a key:value pair (declaring the engine I'd like to use for view)
app.set('view engine', 'ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // if(req.session.name == 
});
router.get('/practiceSearch', (req,res)=>{
	res.render('phones',{
		number: "number"

	})

})

function login() 
        {
          var myParams = {
            clientid : '39494722778-r47d8480i7g34t199gm26qlbb7ng5jbe.apps.googleusercontent.com',
            cookiepolicy : 'single_host_origin',
            callback : 'loginCallback',
            approvalprompt:'force',
            scope : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
          };
          gapi.auth.signIn(myParams);
        }

        function loginCallback(result)
        {
            if(result['status']['signed_in'])
            {
                var request = gapi.client.plus.people.get(
                {
                    userId: 'me'
                });
                request.execute(function (resp)
                {
                    /* console.log(resp);
                    console.log(resp['id']); */
                    var email = '';
                    if(resp['emails'])
                    {
                        for(i = 0; i < resp['emails'].length; i++)
                        {
                            if(resp['emails'][i]['type'] == 'account')
                            {
                                email = resp['emails'][i]['value'];//here is required email id
                            }
                        }
                    }
                   var usersname = resp['displayName'];//required name
                });
            }
        }
        // function onLoadCallback()
        // {
        //     gapi.client.setApiKey('YOUR_API_KEY');
        //     gapi.client.load('plus', 'v1',function(){});
        // }
       // (function() {
       //         var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
       //         po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
       //         var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
       //       })();

// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }
// project.verifyToken('token').then((jsonData) => {
// 	console.log(JSON.stringify(jsonData)); // Does not execute
// }, (error) => {
// 	console.error(error.message); // Logs 'Invalid Value'
// });
 // function signOut() {
 //    var auth2 = gapi.auth2.getAuthInstance();
 //    auth2.signOut().then(function () {
 //      console.log('User signed out.');
 //    });
 //  }

module.exports = router;
