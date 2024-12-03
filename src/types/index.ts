export interface PostAttributes {
  id: number,
  title?: string
  content: string;
  userId: number | string | undefined;
  parentPostId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LoggedinUser {
  createdAt: string,
  email: string,
  exp: number,
  fullName: string,
  iat: number,
  id: number,
  password: string,
  phoneNumber: string,
  updatedAt: string,
  userName: string,
  expiredLogin?: boolean
}