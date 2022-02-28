export interface IBook {
  name: string;
  date: string;
  desc: string;
  logo: string;
  url: string;
}

export interface IBookProps {
  book: IBook;
}
