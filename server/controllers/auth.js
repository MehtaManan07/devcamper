const User = require("../models/User");
const ErrorResponse = require("../utils/errorRes");
const asyncHandler = require("../middlewares/async");

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public

exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create a user
  const user = await User.create({ name, email, password, role });
  //create token;
  const token = user.getSignedJwtToken()
  res.status(201).json({ success: true, token })
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // validate password and email
  if(!email || !password) {
    return next(new ErrorResponse('Please add an email and a password',400))
  }

  // check for user
  const user = await User.findOne({ email }).select('+password');
  if(!user) {
    return next(new ErrorResponse('Invalid credentials',401))
  }
  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if(!isMatch) return next(new ErrorResponse('Invalid credentials',401))

  //create token;
  const token = user.getSignedJwtToken()
  res.status(200).json({ success: true, token })
});
