import { Component } from 'react';

export class Searchbar extends Component {
  extractQuery = evt => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;
    this.props.onSubmit({
      query: query,
      images: [],
    });
    form.reset();
  };
  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.extractQuery}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
