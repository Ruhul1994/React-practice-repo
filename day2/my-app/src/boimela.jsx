 import Header from "./Header"
 import Search from "./search"
 import BookList from "./BookLIst"
 import { useState } from "react"

 function Boimela (){
   const Books = [
      { id: 1, title: "The Pragmatic Programmer", author: "Andrew Hunt", featured: false },
      { id: 2, title: "Clean Code", author: "Robert C. Martin", featured: false },
      { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", featured: false },
      { id: 4, title: "JavaScript: The Good Parts", author: "Douglas Crockford", featured: false },
      { id: 5, title: "Eloquent JavaScript", author: "Marijn Haversine", featured: false }
    ];
    const [book, setBook] = useState(Books);
   const [searchTerm, setSearchTerm] = useState("")
   
   const toggleFeatured = (id) => {
      setBook(book.map((book) => book.id === id ? {...book, featured:!book.featured}:book )
   );
   };
   
   return(
    <div className="container mx-auto p-4">
       
       <Header/>
       <Search searchTerm = {searchTerm} onSearchBook = {setSearchTerm}/>
       <BookList searchTerm = {searchTerm} books = {book}  onFeatureBook = {toggleFeatured}/>
       
    </div>
   );
}

export default Boimela