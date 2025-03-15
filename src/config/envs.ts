import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
  PRODUCTS_MICROSERVICE_PORT: number;
  ORDERS_MICROSERVICE_HOST: string;
  ORDERS_MICROSERVICE_PORT: number;
}

export const envsSchema = joi
  .object<EnvVars>({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.string().required(),
    ORDERS_MICROSERVICE_HOST: joi.string().required(),
    ORDERS_MICROSERVICE_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envsVars: EnvVars = value;

export const envs = {
  port: envsVars.PORT,
  productsMicroserviceHost: envsVars.PRODUCTS_MICROSERVICE_HOST,
  productsMicroservicePort: envsVars.PRODUCTS_MICROSERVICE_PORT,
  ordersMicroserviceHost: envsVars.ORDERS_MICROSERVICE_HOST,
  ordersMicroservicePort: envsVars.ORDERS_MICROSERVICE_PORT,
};
