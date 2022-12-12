import './App.css'

import Book from './components/Book/Book';
import { useState } from 'react'

const INITIAL_BOOKS = [
  {
    id: '1',
    name: 'Norwegian Wood',
    author: 'Haruki Murakami',
    cover: "https://m.media-amazon.com/images/I/81zqVhvbHbL.jpg",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
  {
    id: '2',
    name: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    cover: "",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
  {
    id: '3',
    name: '1984',
    author: 'George Orwell',
    cover: "https://teachprivacy.com/wp-content/uploads/Orwell-1984-Book-Cover-12.jpg",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
  {
    id: '4',
    name: 'Demian',
    author: 'Herman Hesse',
    cover: "",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
  {
    id: '5',
    name: 'Siddhartha',
    author: 'Herman Hesse',
    cover: "",
    synopsis: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    review: '0'
  },
]

function App() {

  const [books, setBooks] = useState(INITIAL_BOOKS);

  const book = books[0];

  return <div><Book name={book.name} author={book.author} cover={book.cover} synopsis={book.synopsis} review={book.review}/></div>
}

export default App
