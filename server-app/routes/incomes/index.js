const incomeRouter = require("express").Router();
const incomeController = require("../../controllers/IncomeController");

incomeRouter.get("/", incomeController.getIncomes);
incomeRouter.post("/", incomeController.add);
incomeRouter.put("/:id", incomeController.update);
incomeRouter.delete("/:id", incomeController.delete);

module.exports = incomeRouter;
