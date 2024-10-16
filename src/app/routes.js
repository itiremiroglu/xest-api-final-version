const express = require("express");

const { ADMIN } = require("~root/constants/userTypes");
const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const putPassword = require("./controllers/password-recovery/putPassword");
const postRecoveryRequest = require("./controllers/password-recovery/postRecoveryRequest");
const healthcheck = require("./platform/healthcheck");
const getAppointment = require("./controllers/appointment/getAppointment");
const getDoctor = require("./controllers/doctor/getDoctor");
const getSlot = require("./controllers/slot/getSlot");
const getPatient = require("./controllers/patient/getPatient");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);

router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);

router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.post("/recovery-request", postRecoveryRequest);

router.put("/update-password/:shortcode", putPassword);

router.get("/healthcheck", healthcheck);

router.get("/appointment", /*- TODO: auth middleware -*/ getAppointment);
router.get("/doctor", /*- TODO: auth middleware -*/ getDoctor);
router.get("/slot", /*- TODO: auth middleware -*/ getSlot);
router.get("/patient", /*- TODO: auth middleware -*/ getPatient);
module.exports = router;
