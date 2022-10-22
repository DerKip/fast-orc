import { Controller, Get } from '@nestjs/common';

@Controller('ocr')
export class OcrController {
  @Get()
  getOcr() {
    return 'Holla amigos';
  }
}
