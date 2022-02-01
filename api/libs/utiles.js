import crypto from 'crypto'

export function hashear (cadena) {
  return crypto.createHash('md5').update('pruebas' + cadena + 'finales').digest('hex')
}
