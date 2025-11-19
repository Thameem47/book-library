import React from "react";
import Header from "./components/header.jsx";
import Booklist from "./components/bookslist.jsx";
import Booksummary from "./components/bookssummary.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Booksummary />
      <Booklist />
      <Footer />
    </div>
  );
}   
export default App;