const express = require("express");
const app = express();
const route = require("./routes/user");
app.use("/user", route);
app.use(express.json());
app.listen(5000, () => {
  console.log("App is running...");
});
