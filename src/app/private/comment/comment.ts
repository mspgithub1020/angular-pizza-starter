export interface Comment {
  id: string;
  text: string;
  score: number;
  created: string;
  user: {
    id: string;
    name: string;
  };
}
