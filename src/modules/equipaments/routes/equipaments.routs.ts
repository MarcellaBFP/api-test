import { Router } from "express";
import EquipamentsController from "../controllers/EquipamentsController";

const equipamentsRouter =Router();
const equipamentsController = new EquipamentsController();

equipamentsRouter.get(' / ',  equipamentsController.index);
equipamentsRouter.get(' /:id', equipamentsController.show);
equipamentsRouter.post("/", equipamentsController.create);
equipamentsRouter.put('/:id', equipamentsController.update);
equipamentsRouter.delete('/:id', equipamentsController.delete);

export default equipamentsRouter;
