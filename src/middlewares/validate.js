import Joi from 'joi';

const registerSchema = Joi.object({
  firstName: Joi.string().min(3).max(20).required(),
  lastName: Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  password: Joi.string().alphanum().min(3).max(30), // cambiar luego el minimo por seguridad a la hora de aplicar en produccion.
});

export const userValidator = (req, res, next) => {
    const { error } = registerSchema.validate(req.body, { abortEarly: false });
    if (error) {
      console.error('Validation error:', error.details);
      return res.status(400).send(error);
    }
    next();
  };


const loginSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().alphanum().min(3).max(30),
});

export const loginValidator = (req, res, next) => {
    const { error } = loginSchema.validate(req.body, { abortEarly: false });
    if (error) {
      console.error('Validation error:', error.details);
      return res.status(400 , 'Validation error:', error.details);
    } 
    next();
  };

const productSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().min(3).max(255).required(),
  });

export const productValidator = (req, res, next) => {
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    if (error) {
      console.error('Validation error:', error.details);
      return res.status(400).send(error);
    }
    next();
  };