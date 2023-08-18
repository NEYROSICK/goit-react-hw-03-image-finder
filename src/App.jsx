import ImageGallery from 'components/ImageGallery';
import Searchbar from 'components/Searchbar';
import { Component } from 'react';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    query: '',
    imageObj: {},
    isModalVisible: false,
  };

  onSubmit = query => {
    this.setState({ query });
  };

  onImageClick = (url, descr) => {
    // console.log(args);
    this.setState({ isModalVisible: true, imageObj: { url, descr } });
    document.addEventListener('keydown', this.onEscClose);
  };

  onEscClose = e => {
    if (e.key === 'Escape') {
      this.setState({ isModalVisible: false, imageObj: {} });
      document.removeEventListener('keydown', this.onEscClose);
    }
  };

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.setState({ isModalVisible: false, imageObj: {} });
    }
  };

  render() {
    const { imageObj, query, isModalVisible } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery query={query} onImageClick={this.onImageClick} />
        {Object.keys(imageObj).length ? (
          <Modal
            imageURL={imageObj.url}
            descr={imageObj.descr}
            handleClick={this.onBackdropClick}
            isModalVisible={isModalVisible}
          />
        ) : null}
      </>
    );
  }
}

export default App;
