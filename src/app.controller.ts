import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OcrService } from './ocr/ocr.service';

@Controller()
export class AppController {
  constructor(private readonly ocrService: OcrService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const problem = await this.ocrService.parseImage(file.buffer);
    console.log(problem);
    return problem[0];
  }
}
