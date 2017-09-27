
const showUserLangsTemplate = require('../templates/helpers/userlanguages.handlebars')

const getLanguagesSuccess = function (data) {
  $('.content').text(null)
  const showUserLangsHtml = showUserLangsTemplate({ userlanguages: data.userlanguages })
  $('#content').append(showUserLangsHtml)
  $('#message').text('Listed!')
}

const addSuccess = function (data) {
  $('.content').trigger('reset')
  const showUserLangsHtml = showUserLangsTemplate({ userlanguages: data })
  $('#content').append(showUserLangsHtml)
}

const deleteSuccess = function (data) {
  $('.content').text(null)
  $('#message').text('Deleted!')
}

const updateSuccess = function (data) {
  $('.content').text(null)
  $('#message').text('Updated!')
}

const fail = function (error) {
  $('.content').text(null)
  console.log(error)
  $('.content').text('Something broke')
}

module.exports = {
  addSuccess,
  getLanguagesSuccess,
  deleteSuccess,
  updateSuccess,
  fail
}
