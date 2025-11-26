import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import words from "./words";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>{words.content}</main>
      <Footer />
    </div>
  );
}

export default App;
