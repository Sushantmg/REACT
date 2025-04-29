import { useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Header } from './components/Header';

function App() {
  const [page, setPage] = useState(<Home />);

  function onHomeClick() {
    setPage(<Home />);
  }

  function onAboutClick() {
    setPage(<About />);
  }

  function onContactClick() {
    setPage(<Contact />);
  }

  return (
    <>
      <Header
        onHomeClick={onHomeClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
      />
      {page}
    </>
  );
}

export default App;
