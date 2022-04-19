import { Meta } from '../common/entities';

export interface Thumbnail2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Formats {
  thumbnail: Thumbnail2;
  small: Small;
}

export interface Attributes2 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Thumbnail {
  data: Data;
}

export interface Article {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  thumbnail: Thumbnail;
}

export interface DataArticle {
  id: number;
  attributes: Article;
}

export interface ArticleResponse {
  data: DataArticle;
  meta: Meta;
}

export interface ArticlesResponse {
  data: DataArticle[];
  meta: Meta;
}
