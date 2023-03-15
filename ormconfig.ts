import {
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_PORT,
  PRODUCTION_ENV,
  TYPEORM_TYPE,
} from './src/configs';

export const ORM_CONFIG = {
  type: TYPEORM_TYPE as 'mysql' | 'postgres' | 'mongodb',
  host: TYPEORM_HOST,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  port: Number.parseInt(TYPEORM_PORT || '5432'),
  entities: [
    PRODUCTION_ENV ? 'dist/src/entities/**/*.js' : 'src/entities/**/*.ts'
  ],
  synchronize: true,
  logging: false,
};
