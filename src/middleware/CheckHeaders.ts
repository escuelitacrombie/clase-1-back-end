import { Request, Response, NextFunction } from 'express';

const checkHeaders = (req: Request, res: Response, next: NextFunction) => {
    console.log("pasando por el middleware 3");
    
    const headers = req.headers;
    const allowedLanguages = ['en', 'es'];
    const allowedLocales = ['ca', 'de', 'ar', 'fr'];

    if (!allowedLanguages.includes(headers['language'] as string) 
        || !allowedLocales.includes(headers['locale'] as string)) {
        return res.status(400).json({ error: 'Headers Language y/o Locale no válidos' });
    }

    next();
};

export default checkHeaders