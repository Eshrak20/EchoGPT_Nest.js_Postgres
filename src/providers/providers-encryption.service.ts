import {
    BadRequestException,
    Injectable,
} from '@nestjs/common';
import {
    createCipheriv,
    createDecipheriv,
    randomBytes,
} from 'crypto';

@Injectable()
export class ProvidersEncryptionService {
  private readonly algorithm = 'aes-256-gcm';

  private getKey(): Buffer {
    const encryptionKey = process.env.PROVIDER_ENCRYPTION_KEY;

    if (!encryptionKey) {
      throw new BadRequestException(
        'PROVIDER_ENCRYPTION_KEY is not configured',
      );
    }

    const key = Buffer.from(encryptionKey, 'hex');

    if (key.length !== 32) {
      throw new BadRequestException(
        'PROVIDER_ENCRYPTION_KEY must be a 32-byte hex key',
      );
    }

    return key;
  }

  encrypt(value: string): string {
    const key = this.getKey();

    const iv = randomBytes(12);

    const cipher = createCipheriv(
      this.algorithm,
      key,
      iv,
    );

    const encrypted = Buffer.concat([
      cipher.update(value, 'utf8'),
      cipher.final(),
    ]);

    const authTag = cipher.getAuthTag();

    return [
      iv.toString('hex'),
      authTag.toString('hex'),
      encrypted.toString('hex'),
    ].join(':');
  }

  decrypt(value: string): string {
    const key = this.getKey();

    const [ivHex, authTagHex, encryptedHex] =
      value.split(':');

    const decipher = createDecipheriv(
      this.algorithm,
      key,
      Buffer.from(ivHex, 'hex'),
    );

    decipher.setAuthTag(
      Buffer.from(authTagHex, 'hex'),
    );

    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encryptedHex, 'hex')),
      decipher.final(),
    ]);

    return decrypted.toString('utf8');
  }
}