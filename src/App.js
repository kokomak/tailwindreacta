import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Nadpis from './Nadpis'
import PodNadpis from './PodNadpis'

function App() {
  return (
    <div className="App">
      <Title
        menuItem1="Home"
        menuItem2="Features"
        menuItem3="Pricing"
        menuItem4="Testimonial"
        buttonText="Get Started"
      />


      <Nadpis

        textHlavni="Top Quality Digital Products To Explore"
      />

      <PodNadpis />
    </div>
  );
}

export default App;

