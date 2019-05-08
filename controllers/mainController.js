const UserDetail = require('../models/UserDetail');
const EmailDetail = require('../models/EmailDetail');

exports.getAddDetail = (req, res, next) => {
  res.render('addUser', {
    pageTitle: 'Add Detail',
    path: '/'
  });
};

exports.postAddDetail = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const userDetail = new UserDetail(null, name, email, phoneNumber);
  userDetail.save();
};

exports.getEmail = (req, res, next) => {
  res.render('emailSend', {
    pageTitle: 'Email Send',
    path: '/email-send'
  });
};

exports.postEmail = (req, res, next) => {
  const toEmail = req.body.toemail;
  const fromEmail = req.body.fromemail;
  const subject = req.body.subject;
  const bodyi = req.body.body;
  const emailDetail = new EmailDetail(null, toEmail, fromEmail, subject, bodyi);
  emailDetail.save();
};