export type BlogModelType = {
  title: string; // 博客标题
  content: string; // 博客内容
  authorId?: number; // 作者ID（可选）
  createdAt?: Date; // 博客创建日期（可选）
  updatedAt?: Date; // 博客最后更新日期（可选）
  coverImage?: string; // 封面图片的URL（可选）
  seoDescription?: string; // 博客的SEO描述（可选）
  seoKeywords?: string; // 博客的SEO关键词（可选）
  categoryId?: number; // 分类ID（可选）
  summary?: string; // 博客摘要（可选）
  tags?: string[]; // 与博客相关的标签数组（可选）
  accessMode?: string; // 访问模式（例如：公开、私密）（可选）
  allowReprint?: boolean; // 是否允许转载的标志（可选）
  isPublic?: boolean; // 是否公开的标志（可选）
  isPinned?: boolean; // 是否置顶的标志（可选）
  immediatePublish?: boolean; // 是否立即发布的标志（可选）
  allowComments?: boolean; // 是否允许评论的标志（可选）
};

export type BlogResponseType<T> = {
  code: number;
  data: BlogModelType<T>;
  message: string;
  status: boolean;
};
