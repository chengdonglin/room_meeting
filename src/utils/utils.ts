/*
 * @Description:
 * @Date: 2023-09-01 11:40:41
 */
import * as crypto from 'crypto';

export function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}
