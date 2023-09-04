import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Notiflix from 'notiflix';
import { ModalWindow } from './Modal/Modal';

import { fetchQuery } from './API';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
    showModal: false,
    openedImg: '',
  };

  getQuery = ({ query, images }) => {
    if (query.trim() !== this.state.query) {
      this.setState({ query: query, images: images });
    }
  };
  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ isLoading: true });
        const data = await fetchQuery(page, query);
        if (data.hits.length === 0) {
          Notiflix.Notify.failure(
            "Sorry, we couldn't find any matches for your query"
          );
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      } catch (err) {
        Notiflix.Notify.failure('Something went wrong, please try again later');
      } finally {
        this.setState({ isLoading: false });
      }
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
  onImageClick = img => {
    this.setState({ showModal: true, openedImg: img });
  };
  onImageClose = evt => {
    this.setState({ showModal: false, openedImg: '' });
  };
  render() {
    const { showModal, openedImg } = this.state;
    return (
      <div className="app">
        <ModalWindow
          props={{ showModal, openedImg }}
          onImageClose={this.onImageClose}
        />
        <Searchbar onSubmit={this.getQuery} />

        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 && (
          <>
            <ImageGallery
              images={this.state.images}
              onClick={this.onImageClick}
            />
            <Button onLoadMore={this.onLoadMore} />
          </>
        )}
      </div>
    );
  }
}
