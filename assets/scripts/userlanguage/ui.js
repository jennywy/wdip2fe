// HANDLEBARS GOES HERE

// const showBooksTemplate = require('../templates/book-listing.handlebars')
//
// const getBooksSuccess = (data) => {
//   console.log(data)
//   const showBooksHtml = showBooksTemplate({ books: data.books })
//   $('.content').append(showBooksHtml)
//   $('button').on('click', function () {
//     $(this).parent().parent().html('')
//   })
// }
const showUserLangsTemplate = require('../templates/helpers/userlanguages.handlebars')

const getLanguagesSuccess = function (data) {
  const showUserLangsHtml = showUserLangsTemplate({ userlanguages: data.userlanguages })
  $('.content').append(showUserLangsHtml)
  $('#message').text('Listed!')
}

const addSuccess = function (data) {
  const showUserLangsHtml = showUserLangsTemplate({ userlanguages: data })
  $('.content').append(showUserLangsHtml)
}

const deleteSuccess = function (data) {
  $('#message').text('Deleted!')
}

const updateSuccess = function (data) {
  $('#message').text('Updated!')
}

const fail = function (error) {
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
