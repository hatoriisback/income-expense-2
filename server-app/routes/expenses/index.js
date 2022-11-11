const expenseRouter = require("express").Router();
const expenseController = require("../../controllers/ExpenseController");

expenseRouter.get("/", expenseController.getExpenses);
expenseRouter.post("/", expenseController.add);
expenseRouter.put("/:id", expenseController.update);
expenseRouter.delete("/:id", expenseController.delete);

module.exports = expenseRouter;
