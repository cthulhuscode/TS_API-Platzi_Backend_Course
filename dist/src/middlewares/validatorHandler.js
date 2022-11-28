"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorHandler = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
/*
  Se crea un middleware de forma dinámica. Se hace uso de un closure.
  Se retorna una arrow function porque se necesita construir middlewares
  de forma dinámica.
  La función recibe un schema, se le indica dónde encontrar la info
  con property y retorna un middleware de forma dinámica.
*/
const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        /*
          La info puede venir desde el body, params o query
        */
        const data = req[property];
        // abortEarly: false -> to show all the errors instead of only one
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            // throw boom.badRequest(error);
            next(boom_1.default.badRequest(error.message));
        }
        next();
    };
};
exports.validatorHandler = validatorHandler;
