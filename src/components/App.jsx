import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Notiflix from 'notiflix';
// import { RotatingLines as Loader } from 'react-loader-spinner';

import fetchQuery from './API';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
  };
  getQuery = ({ query, images }) => {
    if (query.trim() !== this.state.query) {
      this.setState({ query: query, images: images });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.setState({ isLoading: true });
      fetchQuery(page, query)
        .then(data => {
          if (data.hits.length > 0) {
            this.setState(prevState => ({
              images: [...prevState.images, ...data.hits],
              isLoading: false,
            }));
          } else {
            Notiflix.Notify.failure(
              "We couldn't find any matches for your query"
            );
          }
        })
        .catch(err => Notiflix.Notify.failure(err.message));
    }
  }
  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
    return;
  };
  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.getQuery} />
        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 && (
          <>
            <ImageGallery images={this.state.images} />
            <Button onLoadMore={this.onLoadMore} />
          </>
        )}
      </div>
    );
  }
}
