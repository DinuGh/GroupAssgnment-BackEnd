const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertisement.controller');

let authController = require('../controllers/auth.controller');


// List advertisements
router.get('/', advertisementController.advertisementList);

// Delete an advertisement
router.delete('/delete/:id', authController.isAllowed, advertisementController.performDelete);

// Add advertisement
// router.get('/add', advertisementController.displayAddPage);
router.post('/add', advertisementController.processAdd);

// Edit an advertisement
// router.get('/edit/:id', advertisementController.displayEditPage);
router.put('/edit/:id', authController.isAllowed, advertisementController.processEdit);


module.exports = router;