const { Router } = require("express")

const notesController = require("../controllers/notesController")

const notesRoutes = Router()


const notes_Controller = new notesController()

notesRoutes.get("/", notes_Controller.index)
notesRoutes.post("/:user_id", notes_Controller.create)
notesRoutes.get("/:id", notes_Controller.show)
notesRoutes.delete("/:id", notes_Controller.delete)


module.exports = notesRoutes