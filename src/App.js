import './App.css';
import images from './data.js';
import Header from './Header.js';
import ImageItem from './ImageItem.js';

function App() {
  return (
    <div className="App">
      <Header name="Perry" />
      {
        images.map(image => <ImageItem
          title={image.title}
          src={image.url}
          description={image.description} />
        )
      }

    </div>
  );
}

export default App;
