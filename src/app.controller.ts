import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { OcrService } from './ocr/ocr.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ocrService: OcrService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.ocrService.parseImage(
      'https://www.computerhope.com/jargon/h/hello-world.jpg',
    );
  }
}
