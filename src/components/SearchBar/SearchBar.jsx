import React, { Component } from 'react';
import "./SearchBar.css"


class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, 
       selectedAuthor, onSelectedAuthorChange,
    } = this.props;
    return (
      <form>
        <div className='form-all'>
         
          <label htmlFor="filterText">
            <div className='search-container'>
          <h5 className='search-title'>Pesquisando...</h5>
          <input className="search-input" id="filterText" type="text" value={searchText} onChange={onSearchTextChange} />
         </div>
        </label>
       
       
          <label className="label-box" htmlFor="selectedAuthor">
             <div className='search-container'>
          <h5 className='search-title'>
            Escolha uma cineasta:
            </h5>
          <select className='select-box'id="selectedAuthor" value={selectedAuthor} onChange={onSelectedAuthorChange}>
            {[['Todas', ''], ['Věra Chytilová', 'Věra Chytilová'], ['Camila de Moraes', 'Camila de Moraes'], ['Wanuri Kahiu', 'Wanuri Kahiu'],
             ['Yim Soon-rye', 'Yim Soon-rye'], ['Susanna Lira', 'Susanna Lira'], ['Claudia Llosa', 'Claudia Llosa'], ['Trinh T. Minh-ha', 'Trinh T. Minh-ha'], ['Julie Dash', 'Julie Dash'], ['Samira Makhmalbaf', 'Samira Makhmalbaf']]
              .map((author) => <option className='option-box' key={author[1]} value={author[1]}>{author[0]}</option>)}
          </select>
          </div>
        </label>
        </div>
       
        
      </form>
    );
  }
}
/*
function renderInput(id, text, type, value, handleChange) {
  return (
    <label htmlFor={id}>{text}
      <input type={type} id={id} value={value} onChange={handleChange} />
    </label>
  );
}

/*function renderCheckbox(id, text, type, value, handleChange) {
  return (
    <label htmlFor={id}>{text}
      <input type={type} id={id} checked={value} onChange={handleChange} />
    </label>
  );
}*/

/*function renOption(key, value, text) {
  return (
    <option key={key} value={value}>{text}</option>
  );
}

class SearchBar extends Component {
  render() {
    const authorOptions = [
     {text: 'Todos', value:'{value}' }, { text: 'Věra Chytilová', value:'Věra Chytilová' }, { text: 'Ghost In The Shell', value: 'Ghost In The Shell' },
      { text: 'Appleseed Alpha', value: 'Appleseed Alpha' }, { text: 'Vendetta', value: 'Vendetta' }];
    const { selectedAuthor, onSelectedAuthorChange } = this.props;
    return (
      <form>
        {renderInput('fsearch-bar', 'Inclui o texto:', 'text', this.props.searchText, this.props.onSearchTextChange)}
        <label className="filter-author" htmlFor="select">Filtrar por autora:
          <select id="select" value={selectedAuthor} onChange={onSelectedAuthorChange}>
            {authorOptions.map((option) => renOption(option.text, option.value, option.text))}
          </select>
        </label>
      </form>
      
    );
  }
}
*/
export default SearchBar;

/* class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, 
      , selectedAuthor, onSelectedAuthorChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="filterText">
          Inclui o texto:
          <input id="filterText" type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="selectedAuthor">
          Filtrar por gênero
          <select id="selectedAuthor" value={selectedAuthor} onChange={onSelectedAuthorChange}>
            {[['Todos', ''], ['Věra Chytilová', 'Věra Chytilová'], ['Ghost In The Shell', 'Ghost In The Shell'], ['Appleseed Alpha', 'Appleseed Alpha'],
             ['Vendetta', 'Vendetta']]
              .map((author) => <option key={author[1]} value={author[1]}>{author[0]}</option>)}
          </select>
        </label>
      </form>
    );
  }
}*/