import "./App.css";
import About from "./components/About";
import ExploreApp from "./components/ExploreApp";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FrequentlyQuestions from "./components/FrequentlyQuestion";
import Home from "./components/Home";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="bg-gradient-to-r from-[#00141a] via-[#050602] to-[#00141a] min-h-[100vh]">
      <MainHeader />
      <div className="p-3 pb-5 lg:px-32">
        <Home />
        <Features />
        <About />
        <Tokenomics />
        <Roadmap />
        <FrequentlyQuestions />
        <ExploreApp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
