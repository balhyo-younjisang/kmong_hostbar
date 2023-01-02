import './App.css';
import Header from './components/header';
import FirstSection from './components/section_first';
import SecondSection from './components/section_second';
import CallButton from './components/callbutton';
import Footer from './components/footer';
import ThirdSection from './components/section_third';
import FourthSection from './components/section_fourth';

function App() {
  return (
    <>
      <Header />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FirstSection />
      <CallButton />
      <Footer />
    </>
  );
}

export default App;
