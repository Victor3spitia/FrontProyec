const express = require("express");
const app = express()
const port = 3000;
const usuarioRouter = require("./routes/usuarioRoutes");
const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});/* este es el /api */

app.use("/Usuarios", usuarioRouter); 
/* este te lleva a la tabla, tienes que pegarlo con el localhost */

/* Error handler middleware */
app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/Usuarios`);
});/* este es el /api */
