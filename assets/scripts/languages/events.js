const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onGetLanguages = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.addSuccess)
    .catch(ui.fail)
}

const onAddLanguage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.getLanguagesSuccess)
    .catch(ui.fail)
}

const onUpdateLanguage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.update(data)
    .then(console.log('update win'))
    .catch(console.log('update lose'))
}

const onDeleteLanguage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroy(data)
    .then(console.log('delete win'))
    .catch(console.log('delete lose'))
}

const addHandlers = () => {
  $('#list-langs').on('submit', onGetLanguages)
  $('#add-langs').on('submit', onAddLanguage)
  $('#edit-langs').on('submit', onUpdateLanguage)
  $('#delete-langs').on('submit', onDeleteLanguage)
}

module.exports = {
  addHandlers
}
