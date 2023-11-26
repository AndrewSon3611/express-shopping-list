const express = require("express")
const app = express();

const itemsRouter = require("./routes/items")
const ExpressError = require("./expressError")

//handle 404
app.use(express.json());
app.use("/items", itemsRouter);

app.use(function (req, res, next) {
    return new ExpressError("Not Found", 404);
});

//general handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        error: err.message,
    });
});

module.exports = app