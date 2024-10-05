export interface PostAttributes {
  id: number,
  title?: string
  content: string;
  userId: number | string | undefined;
  parentPostId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}