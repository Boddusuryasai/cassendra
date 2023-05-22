
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CardList from './components/CardList';


function App() {
  
 
  return (<div className='container mx-auto font-["Poppins"]'>
  <Navbar/>
     <CardList/>
    <Footer/>
  </div>
    
  );
}

export default App;
