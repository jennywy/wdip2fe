
const showUserLangsTemplate = require('../templates/helpers/userlanguages.handlebars')

const getLanguagesSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  const showUserLangsHtml = showUserLangsTemplate({ userlanguages: data.userlanguages })
  $('#content').append(showUserLangsHtml)
  $('#message').text('Listed!')
}

const addSuccess = function (data) {
  $('#content').text(null)
  $('.clearform').trigger('reset')
  const showUserLangsHtml = showUserLangsTemplate({ userlanguages: data })
  $('#content').append(showUserLangsHtml)
}

const deleteSuccess = function (data) {
  $('.clearform').trigger('reset')
  $('#content').text(null)
  $('#message').text('Deleted!')
  $('#delete-langs').trigger('reset')
}

const updateSuccess = function (data) {
  $('.clearform').trigger('reset')
  $('#content').text(null)
  $('#edit-langs').trigger('reset')
  $('#message').text('Updated!')
}

const fail = function () {
  $('#content').text(null)
  $('#message').text('Something broke!')
}

module.exports = {
  addSuccess,
  getLanguagesSuccess,
  deleteSuccess,
  updateSuccess,
  fail
}
