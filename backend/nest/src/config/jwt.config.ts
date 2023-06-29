// config/jwt.config.ts
import { registerAs } from '@nestjs/config';
export const jwtConstants = {
  secret: '' + process.env.JWT_SECRET,
  audience: '' + process.env.JWT_TOKEN_AUDIENCE,
  issuer: '' + process.env.JWT_TOKEN_ISSUER,
  // accessTokenTtl: parseInt('' + process.env.JWT_ACCESS_TOKEN_TTL ?? '3600', 10),
  accessTokenTtl: 3600,
};
export default registerAs('jwt', () => {
  return jwtConstants;
});
