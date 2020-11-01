import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=
      rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      />
      <Banner image="https://i.pinimg.com/originals/76/f2/3e/76f23ef08dc1ebabf4589ca0daa1fc14.jpg" />
      <Banner image="https://free4kwallpapers.com/uploads/originals/2020/07/19/night-city-k-wallpaper.jpg " />
      <Banner image="https://www.kolpaper.com/wp-content/uploads/2020/05/Digital-City-Wallpaper.jpg" />
    </div>
  );
}

export default App;
