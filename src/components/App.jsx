import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import fetchQuery from './API';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
  };
  getQuery = query => {
    this.setState({ query: query });
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      fetchQuery(page, query).then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      });
    }
  }
  fetchData = () => {
    // evt.preventDefault();
    // const form = evt.target;
    // const query = form.elements.query.value;
    // this.setState({ query: query });
    // fetch(
    //   `https://pixabay.com/api/?q=${query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //   .then(resp => {
    //     if (!resp.ok) {
    //       throw new Error('Something went wrong, please try again later');
    //     }
    //     return resp.json();
    //   })
    //   // .then(data => console.log(data.hits))
    //   .catch(err => alert(err.message))
    //   .finally(() => console.log(this.state.page, this.state.query));
    // form.reset();
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.getQuery} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}
      </div>
    );
  }
}
