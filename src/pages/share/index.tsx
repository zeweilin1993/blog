import './styles/index.scss';

import Book from './Book';
import { Books } from './share-helper';

function Share() {
  document.title = 'SHARE - 林泽伟的个人博客';
  return (
    <div className='share padding-content'>
      <main className='main inner'>
        <ul className='books-wrapper'>
          {Books.map((book, index) => {
            return (
              <li key={index}>
                <a href={book.url} rel='noreferrer' target='_blank'>
                  <Book book={book} />
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default Share;
