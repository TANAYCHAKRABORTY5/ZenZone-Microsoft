import "./App.css";
import About from "./components/mainPage/About";
import Class from "./components/mainPage/Class";
import Contact from "./components/mainPage/Contact";
import Feature from "./components/mainPage/Feature";
import Footer from "./components/mainPage/Footer";
import Hero from "./components/mainPage/Hero";
import MenuBar from "./components/mainPage/MenuBar";
import Modal from "./components/mainPage/Modal";
import Service from "./components/mainPage/Service";

function App() {
  function redirectToChatbot() {
    window.location.href =
      "https://console.dialogflow.com/api-client/demo/embedded/3ad386a4-4d98-417a-9a0e-e3f5690fd1b4";
  }
  return (
    <div data-spy="scroll" data-target="#navbarNav" data-offset="50">
      <button
        id="chatbotButton"
        style={{
          position: "fixed",
          // width: "20px",
          backgroundColor: "transparent",
          bottom: "50px",
          right: "50px",
          zIndex: "100000",
        }}
        onClick={redirectToChatbot}
      >
        <img src="img/chatlogo.png" alt="" width={40} />
      </button>
      <MenuBar />
      <Hero />
      <Feature />
      <Class />
      <Service />
      <About />
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
