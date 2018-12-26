var async = require("async");
var http = require("http");
var nodemailer = require("nodemailer");
var fs = require('fs');
// This will store emails needed to send.
// We can fetch it from DB (MySQL,Mongo) and store here.
var listofemails = [ 'christoper.limawan@binus.edu',
'willson.haryanto@binus.edu',
'antoni.wijaya@binus.edu',
'christian.setiabudi@binus.edu',
'aldo.vernando@binus.edu',
'kevin.riyanto@binus.edu' ];
var listofpasswords = ['cpcpcp05', 'wowowo18', 'aiaiai03', 'avavav04', 'dododo20', 'krkrkr12'];
// Will store email sent successfully.
var success_email = [];
// Will store email whose sending is failed. 
var failure_email = [];

var transporter;

// var line = fs.readFileSync('../../18-1.txt').toString().split("\r\n");
// for(i in line) {
//     var data = line[i].split(',');
//     listofemails.push(data[0]);
//     listofpasswords.push(data[1]);
//     console.log(listofemails);
// }

/* Loading modules done. */

function massMailer() {
    var self = this;
    transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "chrisando.siahaan@gmail.com",
            pass: "007isKingsman!!"
        }
    });
    // Fetch all the emails from database and push it in listofemails
    // Will do it later.
    self.invokeOperation();
};

/* Invoking email sending operation at once */

massMailer.prototype.invokeOperation = function () {
    var self = this;
    async.each(listofemails, self.SendEmail, function () {
        console.log(success_email);
        console.log(failure_email);
    });
}

/* 
* This function will be called by multiple instance.
* Each instance will contain one email ID
* After successfull email operation, it will be pushed in failed or success array.
*/

massMailer.prototype.SendEmail = function (Email, callback) {
    var Password = listofpasswords[listofemails.indexOf(Email)]
    console.log("Sending email to " + Email + " with password " + Password);
    var self = this;
    self.status = false;
    // waterfall will go one after another
    // So first email will be sent
    // Callback will jump us to next function
    // in that we will update DB
    // Once done that instance is done.
    // Once every instance is done final callback will be called.
    async.waterfall([
        function (callback) {
            var mailOptions = {
                from: 'AO',
                to: Email,
                subject: 'Merry Christmas from Petrik Allstars',
                text: `Dear dearest member of 18-1, your email is binus.edu email and your password is: ${Password}. Please login at http://santa.potatoastech.xyz/ .`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error)
                    failure_email.push(Email);
                } else {
                    self.status = true;
                    success_email.push(Email);
                }
                callback(null, self.status, Email);
            });
        },
        function (statusCode, Email, callback) {
            console.log("Will update DB here for " + Email + " With " + statusCode);
            callback();
        }
    ], function () {
        //When everything is done return back to caller.
        callback();
    });
}

new massMailer(); //lets begin