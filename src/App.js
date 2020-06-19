import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify";

import Header from "./Components/Header";
// import Home from "./Components/Home";
// import Products from "./Components/Products";
// import Locations from "./Components/Locations";
import Footer from "./Components/Footer";
import { Toast } from 'react-bootstrap';
// import Contact from "./Components/Contact";



function App() {
  const [cartItem, setCatItem] = useState([]);

const addToCard = item => {
  const isAlreadyAdded = cartItem.findIndex(function(array) {
    return array.id ===item.id;
  })

  if(isAlreadyAdded !== -1) {
    toast ("already in the card", {type: "error"
  })
 }

 //push to the card

 setCatItem([...cartItem, item])
}

const buyNow = () => {
    setCatItem([]);
    toast("Thank you for your purchase", {
        type: success
    })
}

const deleteItem = item => {
    setCartItem(cartItem.filter(i => i.id !== item.id))
};

  return (
      <div>
        <Header />
      </div>
  );
}

export default App;
