const express = require("express")
const router = express.Router()
const controller = require("../controllers/institutionsController")

router.get("/", controller.getAll)
router.get("/:state", controller.getByState)
router.get("/:state/activeservice", controller.getForActiveService)
router.post("/", controller.postInstitution)
router.put("/:id", controller.putInstitution)
router.delete("/:id", controller.deleteInstitution)

module.exports = router;