import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { UserModule } from './user/user.module';
import { CrudService } from './crud/crud.service';

@Module({
  imports: [ProjectsModule, UserModule],
  controllers: [AppController],
  providers: [AppService, CrudService],
})
export class AppModule {}
