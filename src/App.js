import './App.css';
import Content from './Content';
import ContentTwo from './ContentTwo';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Content />
      <ContentTwo />
      <Footer />
    </div>
  );
}

export default App;
