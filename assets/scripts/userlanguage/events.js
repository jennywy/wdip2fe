const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onGetLanguages = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.getLanguagesSuccess)
    .catch(ui.fail)
}

const onAddLanguage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.addSuccess)
    .catch(ui.fail)
}

const onUpdateLanguage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.userlanguage.id
  api.update(id, data)
    .then(ui.updateSuccess)
    .catch(ui.fail)
}

const onDeleteLanguage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroy(data.userlanguage.id)
    .then(ui.deleteSuccess)
    .catch(ui.fail)
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
