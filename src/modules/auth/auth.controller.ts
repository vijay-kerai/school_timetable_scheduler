import { Request, Response, NextFunction } from 'express';
import tryCatch from '../../utils/tryCatch';
import appError from '../../utils/appError';
import jwt from '../../utils/jwt';
import bcrypt from '../../utils/bcrypt';
import db from '../../database/database.source'
import { User } from '../../database/entities/admin.entity';

const userEntity = db.getRepository(User)
const login = (Model: any) => tryCatch(async (res: Response) => {
    const user = await Model.findOne({
        where:
        {
            username: res.locals.user.username,
            email: res.locals.user.email
        }
    });
});