import { Injectable } from '@nestjs/common';
import * as tesseract from 'node-tesseract-ocr';

@Injectable()
export class OcrService {
  config = {
    lang: 'eng',
    psm: 7,
    oem: 1,
  };

  parseImage(imageBuffer) {
    return tesseract
      .recognize(imageBuffer, this.config)
      .then((text) => {
        return text.split('\n');
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
