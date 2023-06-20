import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    res.send('Este es el login pa, bien ahi.')
}

export const generateCode = (req: Request, res: Response) => {
    res.send('Este es el que genera el codigo pa, bien ahi.')
}