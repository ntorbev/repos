import { Module } from '@nestjs/common';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './src/auth/auth.module';
import { User } from './src/user/user.entity';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test',
      entities: [User],
      synchronize: true,
      useNewUrlParser: true
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   username: 'ntorbev',
    //   password: '17Zq8TimCRDCbblm',
    //   database: 'repos',
    //   ssl: true,
    //   host: 'cluster0-7mibb.mongodb.net',
    //   url: 'mongodb+srv://ntorbev:17Zq8TimCRDCbblm@cluster0-7mibb.mongodb.net/repos',
    //   authSource: 'admin',
    //   entities: [User],
    //   useNewUrlParser: true
    // }),
    AuthModule,
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('../server/main'),
      liveReload: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

  export class ApplicationModule {
}
