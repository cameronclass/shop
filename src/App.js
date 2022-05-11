import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Header/Banner";
import Product from "./components/Product/Product";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Стул Серый",
          img: "",
          desc: "Lorem",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стул Красный",
          img: "",
          desc: "Lorem",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 3,
          title: "Стул Синий",
          img: "",
          desc: "Lorem",
          category: "chairs",
          price: "49.99",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Product items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
