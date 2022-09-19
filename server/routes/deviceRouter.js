const Router = require("express");
const router = new Router();
const deviceController = require("../controller/deviceController");

router.post("/add", deviceController.create);
router.get("/getAll", deviceController.getAll);
router.get("/:id", deviceController.getOne);

module.exports = router;
