import Header from './components/Header';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterRating = (rating) => {
    setFilterRating(rating);
  };

  return (
    <div className="App">
      <Navigation onSearch={handleSearch} onFilterRating={handleFilterRating} />
      <Header />
      <header className="App-header">
        <div className='container'>
          <MovieList searchQuery={searchQuery} filterRating={filterRating} />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
