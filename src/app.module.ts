import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OcrModule } from './ocr/ocr.module';
@Module({
  imports: [OcrModule],
  controllers: [AppController],
})
export class AppModule {}
