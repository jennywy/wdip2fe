'use strict'
const store = require('../store')
const config = require('../config')
// const getFormFields = require('/Users/jennyyee/wdi/projects/tictactoe/lib/get-form-fields.js')

const create = function (data) {
  console.log(store.user.token)
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/userlanguages',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/userlanguages/' + store.userlanguages.id,
    method: 'PATCH',
    data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/userlanguages',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/userlanguages/' + id,
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/userlanguages/' + id,
    method: 'DELETE'
  })
}
module.exports = {
  create,
  update,
  index,
  show,
  destroy
}
