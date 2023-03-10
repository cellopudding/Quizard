//todo: require whatever model we're using and make one GET route
const router = require('express').Router();
const { Quiz, User  } = require('../../models');
const withAuth = require('../utils/auth');