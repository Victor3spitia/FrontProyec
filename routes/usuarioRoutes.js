const express = require("express");
const router = express.Router();
const usuarioRoutes = require("../services/usuarioServices");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await usuarioRoutes.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* POST programming language */
router.post("/guarda", async function (req, res, next) {
  try {
    res.json(await usuarioRoutes.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await usuarioRoutes.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await usuarioRoutes.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
});

module.exports = router;
