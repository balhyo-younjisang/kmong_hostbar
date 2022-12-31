import './App.css';
import Header from './components/header';
import FirstSection from './components/section_first';
import SecondSection from './components/section_second';
import CallButton from './components/callbutton';
import Footer from './components/footer';
import ThirdSection from './components/section_third';

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <CallButton />
      <Footer />
    </>
  );
}

export default App;
