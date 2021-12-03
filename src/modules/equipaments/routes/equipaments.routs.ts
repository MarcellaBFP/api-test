import { Router } from "express";
import EquipamentsController from "../controllers/EquipamentsController";
import{celebrate, Joi, Segments} from 'celebrate'

const equipamentsRouter =Router();
const equipamentsController = new EquipamentsController();

equipamentsRouter.get(' / ',  equipamentsController.index);

equipamentsRouter.get(
    '/:id', 
 celebrate({
     [Segments.PARAMS]: {
         id:  Joi.string().uuid().required(),
     },
 }),
 equipamentsController.show,
 );

equipamentsRouter.post(
    "/", 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            serial_number: Joi.string().required(),

        },
    }),
    equipamentsController.create
    );

equipamentsRouter.put(
'/:id', 
celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            serial_number: Joi.string().required(),

        },
     [Segments.PARAMS]: {
         id:  Joi.string().uuid().required(),
     },
    }),

equipamentsController.update
);

equipamentsRouter.delete(
'/:id', 
celebrate({
     [Segments.PARAMS]: {
         id:  Joi.string().uuid().required(),
     },
 }),
equipamentsController.delete
);

export default equipamentsRouter;
