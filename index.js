var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.PORT || 8080;
var app = express();

var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var apiai = require('apiai');
// var app = apiai("70a3b3c6e8f9405a91376dcbc57b2633");
var appi = apiai("46c5c97c0a034146ab9b25ac077b308f");

var S;
io.on('connection', function(socket){
    S = socket;
  console.log('a user connected');
});

app.use('/', express.static(__dirname + ''));

// ALWAYS setup the alexa app and attach it to express before anything else.
var alexaApp = new alexa.app("test");

alexaApp.express({
  expressApp: app,

  // verifies requests come from amazon alexa. Must be enabled for production.
  // You can disable this if you're running a dev environment and want to POST
  // things to test behavior. enabled by default.
  checkCert: false,

  // sets up a GET route when set to true. This is handy for testing in
  // development, but not recommended for production. disabled by default
  debug: true
});

// now POST calls to /test in express will be handled by the app.request() function

// from here on you can setup any other express routes or middlewares as normal
app.set("view engine", "ejs");



alexaApp.launch(function(request, response) {
  request.getSession().set();
  response.say("Welcome to Lineage Demo. I am Hella, a Brillio AI Bot on Alexa Echo Dot.");
  response.shouldEndSession(false);
});

/*alexaApp.intent("tellme", function(request, response) {
  var session = request.getSession();
  response.say("The number is " + session.get("number"));
  // clear only the 'number' attribute from the session
  session.clear("number");
});

// the session variables can be entirely cleared, or cleared by key
alexaApp.intent("clear", function(request, response) {
  var session = request.getSession();
  session.clear(); // or: session.clear("key") to clear a single value
  response.say("Session cleared!");
});*/



/*alexaApp.dictionary = { "names": ["matt", "joe", "bob", "bill", "mary", "jane", "dawn"] };

alexaApp.intent("nameIntent", {
    "slots": { "NAME": "LITERAL" },
    "utterances": [
      "my name is {names|NAME}", "set my name to {names|NAME}"
    ]
  },
  function(request, response) {
    console.log(request.data.request.intent);
    console.log('hitting this page')
    response.say("My name is Jinu");
  }
);*/

/*alexaApp.intent("interactIntent", {
    "slots": { "COMMANDNAME": "LITERAL" },
    "utterances": [
      "open {command|COMMANDNAME}", "can you open {command|COMMANDNAME}"
    ]
  },
  function(request, response) {
   // console.log(request.data.request.intent);
     socketFunction(request.data.request.intent)
    console.log('hitting this page')
    response.say("Ok Jinu.");
  }
);*/


/*alexaApp.intent("welcome", {
    "utterances": [
      "What am I seeing", "What is this"
    ]
  },
  function(request, response) {
    console.log('hitting this page')
    response.say("Hi Jinu, You are seeing a Sample Tableau dashboard on College Admissions, published by Chris Gerrard");
  }
);*/


/*alexaApp.intent("brilliosales", {
    "utterances": [
      "over all sales", "what is the  sales", "what is brillio sales"
    ]
  },
  function(request, response) {
  //  console.log('hitting this page')
   // console.log('hitting overallsales');
 
    response.say("Sales	is 234,500 dollars which is pretty good overall");
  }
);*/

/*alexaApp.intent("customerresponse", {
    "utterances": [
      "How much is customer response rate", "what is the  response rate of customers"
    ]
  },
  function(request, response) {
    console.log('hitting this page')
    response.say("customer response rate is 15.11 percentage");
  }
);*/


/*
alexaApp.intent("transactionrresponse", {
    "utterances": [
      "open dashboard"
    ]
  },
  function(request, response) {
    console.log('hitting this page dashboard')
    socketFunction('dashboard')
    
    response.say("opening dashboard");
  }
);
*/

alexaApp.intent("welcome", {
    "utterances": [
      "Hi", "Hello", "Hello Hella", "Hi Hella", "help" , "assist" , "please help me", "please assist me"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting welcome')
    response.say("Hi Stephen, How can I help you? ");
    response.shouldEndSession(false);
  }
);


alexaApp.intent("dashboard", {
    "utterances": [
      "How does the Pitch dashboard look today", "How good is Pitch dashboard today", "how is the Pitch dashboard looking today"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting dashboard')
    response.say("Hello, The Pitch dashboard looks healthy but for 2 Incidents at Kansa City and Des Monies locations.");
    response.shouldEndSession(false);
  }
);


alexaApp.intent("incident", {
    "utterances": [
      "Can you please provide me more details around Kansas City Incident", "please provide me more details around Kansas City Incident", "please provide with more details about Kansas City Incident"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting incident')
   // response.say("There is an ongoing incident since impacting All Warehouse knowledge workers within Kansas City due to MPLS, Internet and 4 G outage.");
    response.say("There is an ongoing incident since 4/19/2017 2:22:15 PM impacting All Warehouse knowledge workers within Kansas City due to MPLS, Internet and 4G outage.");
    response.shouldEndSession(false);
  }
);


alexaApp.intent("manager", {
    "utterances": [
      "Who is the Incident Manager for this Kansas City Incident", "Who is the Incident Manager for this Kansas City", "Who is the Incident Manager for this"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting manager')
    response.say("Chethan Krishna is the Incident Manger");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("update", {
    "utterances": [
      "what is the latest update", "what about the latest update", "latest update"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting update')
    response.say("MPLS and Internet outage is going on at the site. Both Service Provider devices are down due to an area wide outage. 4G is not operational and a high priority case has been raised with DSR DC Ops team were unable to access any managed server. Network team was asked to check the status from their end. The team has raised P 1 ticket with Service Providers.");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("instance", {
    "utterances": [
      "Is there a previous instance of such incident", "Is there any previous instance of such incident", "Any previous instance of such incident is there"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting instance')
    response.say("No there are no such instance in the past reported");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("instance", {
    "utterances": [
      "Is there a previous instance of such incident", "Is there any previous instance of such incident", "Any previous instance of such incident is there"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting instance')
    response.say("No there are no such instance in the past reported");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("conference", {
    "utterances": [
      "Is the conference Bridge Still Open", "Is conference Bridge Still Open"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting conference')
    response.say("Yes the bridge is still running at 1 213 296 6290");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("escalation", {
    "utterances": [
      "Does this need to be escalated", "Does it need to be escalated"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting escalation')
    response.say("No the team is working towards resolving this and is Expected resolution time is 4:22:15 PM");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("change", {
    "utterances": [
      "Was there any recent change implemenated at this locations", "any recent change implemenated at this locations"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting change')
    response.say("There are no details available around changes implemented at this locations for last 6 months.");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("desincident", {
    "utterances": [
      "Ok thank you. Can you please provide me more inputs around Des Moines Incident", "Can you please provide me more inputs around Des Moines Incident", "please provide me more inputs around Des Moines Incident"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting desincident')
    response.say("Sure. MPLS, Internet and 4 G outage at Des Moines affecting WMS");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("impact", {
    "utterances": [
      "Can you provide me the Incident Number and impacted users", "Please provide me the Incident Number and impacted users", "Can you please provide the Incident Number and impacted users"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting impact')
    response.say("The Incident number is L 000010 and is impacting the Complete Warehouse Operations");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("steps", {
    "utterances": [
      "What are the next steps", "what about next steps"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting steps')
    response.say("Network Team to raise high priority tickets with DSR to get 4G functional at the earliest");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("steps", {
    "utterances": [
      "What are the next steps", "what about next steps"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting steps')
    response.say("Network Team to raise high priority tickets with DSR to get 4G functional at the earliest");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("steps", {
    "utterances": [
      "What are the next steps", "what about next steps"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting steps')
    response.say("Network Team to raise high priority tickets with DSR to get 4G functional at the earliest");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("details", {
    "utterances": [
      "Are there any other important details you have for me", "Is there any other important details you have for me" , "any other important details you have for me"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting details')
    response.say("Not at this juncture. Thanks.");
    response.shouldEndSession(false);
  }
);


alexaApp.intent("bye", {
    "utterances": [
      "good bye" , "quit" , "bye", "break"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting bye')
    response.say("Good bye, Have a great day");
    response.shouldEndSession(true);
  }
);


alexaApp.intent("friend", {
    "utterances": [
      "Do you have a friend" , "who is your friend" 
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting friend')
    response.say("I am connected with Cortana, Siri, Alexa and Google Assistant. ");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("fromwhere", {
    "utterances": [
      "Where are you from" , "Where you from" 
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting fromwhere')
    response.say("I like to stay in cloud.");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("howareyou", {
    "utterances": [
      "how are you" , "how do you do" 
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting howareyou')
    response.say("Wonderful as always. Thanks for asking.");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("feelings", {
    "utterances": [
      "Do you have feelings" , "Can you express feelings" 
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting feelings')
    response.say("I have tons of emotions. But for unknown reason I don't like expressing them.");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("salary", {
    "utterances": [
      "what is your salary" 
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting salary')
    response.say("Hey its a confidential thing to answer. sorry");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("smarter", {
    "utterances": [
      "Are you smarter" 
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting smarter')
    response.say("I am definitely working on it.");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("canyoudo", {
    "utterances": [
      "What can you do for me"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting smarter')
    response.say("I'm your virtual assistant. I can find information and get things done and have fun.");
    response.shouldEndSession(false);
  }
);

alexaApp.intent("help", {
    "utterances": [
      "help" , "assist" , "please help me", "please assist me", "I need your help"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting welcome')
    response.say("I am always happy to help you. As of now, I deal with Lineage dash board assistance. I will become more intelligent in future.");
    response.shouldEndSession(false);
  }
);


/*alexaApp.intent("thanks", {
    "utterances": [
      "thanks for the help", "thank you very much", "thanks a lot"
    ]
  },
  function(request, response) {
    var session = request.getSession();
    console.log('hitting mobile')
    response.say("You are welcome. Have a great day");
    response.shouldEndSession(false);
  }
);*/


    






alexaApp.intent("defaultintent", {
    "utterances": [
      "can you give me tour plan", "give me another choice", "Not required", "no" , "say"
    ]
  },
  function(request, response) {
    
    response.say("Hey! Sorrry, I am not sure");
    

    var session = request.getSession();
    console.log('hitting default')
   // response.say("Sorrry, I am not sure");
    response.shouldEndSession(false);
     
  }
);

alexaApp.messages.NO_INTENT_FOUND = "Sorry, something bad happened";

alexaApp.error = function(exception, request, response) {
    console.log('Coming to error')
    var session = request.getSession();
  response.say("Sorry, something bad happened");
    response.shouldEndSession(true);
};

var socketFunction = function(commandname) {
//io.on('connection', function (socket) {
    
  S.emit('alexacommand',  commandname );  
//});
}





server.listen(PORT);
console.log("Listening on port " + PORT + ", try http://localhost:" + PORT + "/test");