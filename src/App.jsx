import './App.css'

import { useEffect, useState } from 'react'

import AddBookForm from './components/AddBookForm/AddBookForm';
import BookContainer from './components/BookContainer/BookContainer';

function App() {

  const loadLocalStorage = () => {
    const INITIAL_BOOKS = [
      {
        id: '1',
        name: 'Norwegian Wood',
        author: 'Haruki Murakami',
        cover: "https://m.media-amazon.com/images/I/81zqVhvbHbL.jpg",
        synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        review: '3'
      },
      {
        id: '2',
        name: 'Kafka on the Shore',
        author: 'Haruki Murakami',
        cover: "https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/223804_w.jpg",
        synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        review: '5'
      },
      {
        id: '3',
        name: '1984',
        author: 'George Orwell',
        cover: "https://teachprivacy.com/wp-content/uploads/Orwell-1984-Book-Cover-12.jpg",
        synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        review: '4'
      },
      {
        id: '4',
        name: 'Demian',
        author: 'Herman Hesse',
        cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/afd44046577977.585a19223ddc4.jpg",
        synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        review: '5'
      },
      {
        id: '5',
        name: 'Siddhartha',
        author: 'Herman Hesse',
        cover: "https://images.booksense.com/images/315/604/9781800604315.jpg",
        synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        review: '3'
      },
    ]
    localStorage.setItem('books', JSON.stringify(INITIAL_BOOKS))
  }

  const setStateAndStorage = (books) => {
    localStorage.setItem('books', JSON.stringify(books))
    setBooks(books)
  }

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('books'))
    setBooks(books)
  }, [])


  const addBook = (book) => {
    const newBook = {id:books.length + 1, ...book}
    setStateAndStorage([...books, newBook])
  }

  const deleteBook = (bookId) => {
    const booksCopy = [...books]
    const newBooks = booksCopy.filter(book => book.id !== bookId)
    setStateAndStorage(newBooks)
  }

  const changeReview = (bookId, newReview) => {
    const booksCopy = [...books]
    for(const book of booksCopy) {
      if (book.id === bookId) {
        book.review = newReview;
        break;
      }
    }

    setStateAndStorage(booksCopy)
  }


  return <div>
            <button onClick={loadLocalStorage}>Load Storage</button>
            <AddBookForm addBook={addBook}/>
            <BookContainer books={books} changeReview={changeReview} deleteBook={deleteBook}/>
          </div>
}

export default App
