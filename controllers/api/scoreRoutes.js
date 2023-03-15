const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Score } = require('../../models');
const withAuth = require('../../utils/auth');

