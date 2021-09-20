export interface Posts {
  id:number;
  imageUrl: string;
  userName: string;
  location: string;
  caption: string;
  tag: string[];
  likes: number;
  liked: boolean;
}
