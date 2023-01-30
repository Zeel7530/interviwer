import './App.css';
import Header from './layout/header/Header.js';
import './assets/css/Variable.css';
import Hero from './pages/hero/Hero';
import Barnd from './pages/barnd/Barnd';
import Reading from './pages/reading/Reading';
import Barndlogo from './pages/Barndlogo/Barndlogo';
import Customer from './pages/customer/Customer';
import Software from './pages/software/Software';
import Hrprogress from './pages/hrprogress/Hrprogress';
import Teemwork from './pages/teemwork/Teemwork';
import Progress from './pages/progress/Progress';
import Answere from './pages/answere/Answere';
import Business from './pages/business/Business';
import Footer from './layout/footer/Footer';
import './assets/css/responsive.css';
function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <Barnd />
      <Reading />
      <Barndlogo />
      <Customer />
      <Software />
      <Hrprogress />
      <Teemwork />
      <Progress />
      <Answere />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
