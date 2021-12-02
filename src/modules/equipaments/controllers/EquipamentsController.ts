import { Request, Response } from "express";
import { UpdateDateColumn } from "typeorm";
import CreateEquipamentService from "../services/CreateEquipamentService";
import DeleteEquipamentService from "../services/DeleteEquipamentService";
import ListEquipamentsService from "../services/ListEquipamentsService";
import ShowEquipamentService from "../services/ShowEquipamentsService";
import UpdateEquipamentService from "../services/UpdateEquipamentService";
import UpdateEquipamentsService from "../services/UpdateEquipamentService";
import equipament from "../typeorm/entities/equipament";

export default class EquipamentsController {
    public async index(request: Request , response: Response){
        const listEquipaments = new ListEquipamentsService();

        const equipaments = await listEquipaments.execute();

        return response.json(equipaments);

        

    }

    public async show(request: Request, response: Response): Promise<Response>{
        const { id} = request.params;

        const showEquipament = new  ShowEquipamentService();

        const equipament = await showEquipament.execute({ id});

        return response.json(equipament);
    }

    public async create(request: Request, response: Response): Promise<Response>{
        const{name, serial_number} = request.body;

        const createEquipament = new CreateEquipamentService();

        const equipament = await createEquipament.execute({
            name,
            serial_number,
        });

        return response.json(equipament);
    }


  public async update(request: Request, response: Response): Promise<Response> {
    const { name, serial_number } = request.body;
    const { id } = request.params;

    const updateEquipament= new UpdateEquipamentService();

    const equipament= await updateEquipament.execute({
      id,
      name,
     serial_number,
    });

    return response.json(equipament);

}

    public async delete(request: Request, response: Response): Promise<Response>{
        const{id}= request.params;

        const deleteEquipament = new DeleteEquipamentService();

        await deleteEquipament.execute({id});

        return response.json([]);


    }

}