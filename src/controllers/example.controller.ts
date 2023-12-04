import * as exampleService from '../services/example.service'
import {NextFunction, Request, Response} from 'express'
export async function exampleGet(req: Request, res: Response, next: NextFunction){
    const result = await exampleService.exampleFind()
    res.send(result)
}

