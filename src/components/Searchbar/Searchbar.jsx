import { Component } from 'react';

export class Searchbar extends Component {
  extractQuery = evt => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;
    this.props.onSubmit({
      query: query,
    });
    form.reset();
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.extractQuery}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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
