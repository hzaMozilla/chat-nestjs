import { DataSource } from 'typeorm';

import { ORM_CONFIG } from '../../ormconfig';

// 连接数据库

const connection = {
  async create(callback?: (c: any) => void): Promise<void> {
    try {
      const connection = await new DataSource(ORM_CONFIG);

      if (callback) {
        callback(connection);
      }
    } catch (error) {
      throw new Error(`ERROR: creating db connection: ${error}`);
    }
  },
};

export default connection;
