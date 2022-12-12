import './App.css'

import { useEffect, useState } from 'react'

import AddBookForm from './components/AddBookForm/AddBookForm';
import BookContainer from './components/BookContainer/BookContainer';
import Carousel from './components/Carousel/Carousel';

function App() {

  const loadBooksLocalStorage = () => {
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

  const loadAuthorsLocalStorage = () => {
    const INITIAL_AUTHORS = [
      {
        id: '1',
        name: 'Haruki Murakami',
        image: 'https://media.npr.org/assets/img/2021/04/05/haruki-murakami-author-photo-elena-seibert_custom-587c056cd651b2521ccbe0e1efd2a6f563e0b7eb.jpg',
        synopsis: 'Lorem Ipsum',
        yearBorn: '1990',
        yearDied: ''
      },
      {
        id: '2',
        name: 'Herman Hesse',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Hermann_Hesse_2.jpg',
        synopsis: 'Lorem Ipsum',
        yearBorn: '1990',
        yearDied: '2020'
      },
      {
        id: '3',
        name: 'George Orwell',
        image: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/546150-flickr-41928180381-de04c41049-o-d2094143e22c623ab2be33b2268bad79.jpg',
        synopsis: 'Lorem Ipsum',
        yearBorn: '1975',
        yearDied: '1980'
      }
    ]
    localStorage.setItem('authors', JSON.stringify(INITIAL_AUTHORS))
  }

  const setBooksStateAndStorage = (books) => {
    localStorage.setItem('books', JSON.stringify(books))
    setBooks(books)
  }

  const setAuthorsStateAndStorage = (authors) => {
    localStorage.setItem('authors', JSON.stringify(authors))
    setAuthors(authors)
  }

  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('books'))
    const authors = JSON.parse(localStorage.getItem('authors'))
    setBooks(books)
    setAuthors(authors)
  }, [])


  const addBook = (book) => {
    const newBook = {id:books.length + 1, ...book}
    setBooksStateAndStorage([...books, newBook])
  }

  const deleteBook = (bookId) => {
    const booksCopy = [...books]
    const newBooks = booksCopy.filter(book => book.id !== bookId)
    setBooksStateAndStorage(newBooks)
  }

  const changeReview = (bookId, newReview) => {
    const booksCopy = [...books]
    for(const book of booksCopy) {
      if (book.id === bookId) {
        book.review = newReview;
        break;
      }
    }

    setBooksStateAndStorage(booksCopy)
  }


  return <div>
            <button onClick={loadBooksLocalStorage}>Load Books</button>
            <button onClick={loadAuthorsLocalStorage}>Load Authors</button>
            <Carousel authors={authors} />
            <AddBookForm addBook={addBook} />
            <BookContainer books={books} changeReview={changeReview} deleteBook={deleteBook} />
          </div>
}

export default App
