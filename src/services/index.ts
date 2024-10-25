import jwt, { JwtPayload } from 'jsonwebtoken'

export function JwtValidator(token: string | null): string | JwtPayload | undefined {
  // verificar e salva as informacoes do usuaria vindas do token

  try {
    const decoded: JwtPayload = jwt.verify(token as string, process.env.JWT_SECRET as string) as JwtPayload & JwtPayload
    return decoded
  } catch (err) {
    return 'Expired or invalid token'
  }
}
