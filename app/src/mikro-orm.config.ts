import { SeedManager } from '@mikro-orm/seeder';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';
import { LoadStrategy, MariaDbDriver } from '@mikro-orm/mariadb';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const config: Options = {
  driver: MariaDbDriver,
  host: 'database',
  port: (process.env.DB_PORT ?? 3306) as number,
  dbName: process.env.DB_DATABASE ?? 'app',
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? 'password',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  registerRequestContext: false,
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
  extensions: [EntityGenerator, SeedManager],
  connect: false,
};
export default config;
