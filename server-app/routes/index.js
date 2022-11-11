const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Terbaca");
});

// * Routers Variables
const incomeRoutes = require("./incomes");
const expenseRoutes = require("./expenses");

// * Call Routers
router.use("/incomes", incomeRoutes);
router.use("/expenses", expenseRoutes);

// * Dependencies Variables

// * Call Dependencies

module.exports = router;
