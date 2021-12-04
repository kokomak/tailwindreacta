import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nadpis from './Nadpis'
import Obrazek from './Obrazek';
import DruhyNadpis from './DruhyNadpis';
import Cards from './Cards';


function App() {
  return (
    <div className="App">
      <Header
        menuItem1="Home"
        menuItem2="Features"
        menuItem3="Pricing"
        menuItem4="Testimonial"
        buttonText="Get Started"
      />

      <Nadpis

        uvod="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante."
        tlacitko="Explore"
      />

      <DruhyNadpis />

       {/*  <Obrazek /> */}

       <Cards 
       
       nazev1="Fast performance"
       nazev2="Partnership deal"
       nazev3="Pro Subscription"
       nazev4="Customer Support"
       
       vypln1="Lorem ipsum dolor sit amet consecte adipiscing elit."
       vypln2="Lorem ipsum dolor sit amet consecte adipiscing elit."
       vypln3="Lorem ipsum dolor sit amet consecte adipiscing elit."
       vypln4="Lorem ipsum dolor sit amet consecte adipiscing elit."

       
       />

    </div>
  );
}

export default App;

