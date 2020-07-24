import React from 'react';
import './MovieCard.scss'
import Popup from "reactjs-popup";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, author, storyline, imagePath, biography } = movie;
    return (
      <div className="movie-card">
        <div className="movie-card-tile">
         <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-animate">{author}</h5>
           <p className="movie-card-animate">{storyline}</p>
           

        </div>
        
        <div>



     <div className="modal-div"><a href="#">
       <Popup trigger={
      <div className="container">
         <div className="container-button">
         <button className="modal-button-open">+</button>
       </div>
      </div>
      
       } modal>
    {close => (
      <div className="modal">
        <a className="modal-close" onClick={close}>
          &times;
        </a>
        
          <div className="contaider-card">
             <div className="modal-header"> {author} </div>
        <div className="modal-content">
          {biography}
          
        </div>
          </div>
        
       
        <div className="modal-actions">
         
         
        </div>
      </div>
    )}
  </Popup>
     </a>
       
       </div>   
    

        </div>
      </div>
      
    );
  }
}

export default MovieCard;
