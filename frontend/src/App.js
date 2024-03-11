import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     <Routes>
      <Route path="/" element={<h1>products</h1>} />
      <Route path="/add" element={<h1> add products</h1>} />
      <Route path="/update" element={<h1> update products</h1>} />
     </Routes>
     <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
