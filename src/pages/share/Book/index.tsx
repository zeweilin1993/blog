import './styles/index.scss';
import { IBook } from '../share-helper';

interface IBookProps {
  book: IBook;
}

function Book({ book }: IBookProps) {
  return (
    <div className='book'>
      <h2>{book.date}</h2>
      <div className='logo'>
        <img src={book.logo} alt={book.name} />
        <span className='bd_n1'></span>
        <span className='bd_n2'></span>
        <span className='bd_n3'></span>
        <span className='bd_n4'></span>
      </div>
      <h1>{book.name}</h1>
      <p>{book.desc}</p>
    </div>
  );
}

export default Book;
