import BookDetails
 from "./BookDetails"
 import FeatureBook from "./FeatureBook"
 import PropTypes from "prop-types";

function BookRow({book ,onFeatureBook}) {
  return (
    <div className="flex items-center justify-between w-full p-4 hover:scale-105 transition-transform duration-500 ">
        <div className="flex item-center justify-between p-4 bg-white shadow rounded-lg w-full">
            <BookDetails title={book.title} author = {book.author}/>
            <FeatureBook book = {book} onFeatureBook= {onFeatureBook}/>
        </div>
      
    </div>
  )
}

BookRow.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onFeatureBook: PropTypes.func.isRequired,
}

export default BookRow
