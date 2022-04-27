// import section
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";


export default function App() {
  // vanilla js section

  // jsx section
  return (
    <div>
      <NavigationBar />
      <Home/>
      <About/>
      <Projects/>
      <ContactMe/>
       
    </div>
  );
}