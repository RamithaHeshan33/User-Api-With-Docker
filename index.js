const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.json({
        Name: "Ramitha Heshan",
        Email: "ramitha2002@gmail.com"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});