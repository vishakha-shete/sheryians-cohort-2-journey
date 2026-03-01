const {router} = require ("express");
const authController = require ("../controllers/auth.controller");

const router = router();


router.post('/register',authController.registerUser)

router.post('/login',authController.loginUser)



module.exports = router;