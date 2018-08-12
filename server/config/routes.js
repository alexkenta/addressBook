const addressController = require('../controllers/addresses');

module.exports = function(app){
    app.post('/addNewContact', addressController.create)
    app.get('/getAllContacts', addressController.index)
    app.get('/getOne/:id', addressController.show)
    // app.get('/notes', noteController.index);
    
    // app.post('/processNote', noteController.create);
}