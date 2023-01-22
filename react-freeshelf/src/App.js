import { useState } from 'react'; 
import './App.css';

const App = ({ books }) => {
  return (
   <div> 
    <h1>It's books! it has the words</h1> 
    {books.map((books) => (
          <div className="book-cover"> 
          <h2>{books.title}</h2>
          <h3>{books.author}</h3> 
          <p>{books.shortDescription}</p> 
          <img src={books.coverImageUrl} className="cover-image" alt="cover" /> 
          <br/> 
          <br/>
          <TellMeMore 
          url={books.url}
          publisher={books.publisher}
          date={books.publicationDate}
          details={books.detailedDescription} /> 
          </div> 
    ))
    }
   </div> 
  ); 
}

const TellMeMore = ({url, publisher, date, details}) => {
  const [seeMore, setSeeMore] = useState(false)
  const handleClick = (event) => {setSeeMore(!seeMore)}
  return (
    <> 
    <button onClick={handleClick} type="button" aria-expanded={seeMore ? "true" : "false"}> 
    {seeMore ? 'No' : ''} Peekie</button> 
    {seeMore && 
    <div className="sweet-whittle-box">
    <strong>Link:</strong> <a id="sausage" href={url}>{url}</a>
    <p><strong>Full Description:</strong><br/>{details}</p>
    <p><strong>Publisher:</strong> {publisher ? <>{publisher}</> : "--"}  <br/><br/> 
    <strong>Publication Date:</strong> {date ? <>{date}</> : "--"}</p>
    </div>}
    </> 
  )}; 

export default App;
