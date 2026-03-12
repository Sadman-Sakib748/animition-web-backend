import jwt from "jsonwebtoken"

export const createToken = (data: any) => {
  return jwt.sign(data, process.env.JWT_SECRET!, {
    expiresIn: "7d"
  })
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!)
}