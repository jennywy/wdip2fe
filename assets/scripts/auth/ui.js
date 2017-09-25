'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  store.user = data.user
  $('#sign-up').hide()
  // $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#start-game').show()
  $('#join-game').show()
  $('#get-game').show()
  $('#get-games').show()
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const signOutSuccess = function () {
  $('#message').text('Signed Out Successfully')
  store.user = null
  $('#sign-in').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#message').text(null)
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failure')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}