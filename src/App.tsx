import React from "react";

import Header from "./components/Header/Header";

import Intro from "./components/Intro/Intro";
import Driver from "./components/Driver/Driver";
import Bus from "./components/Bus/Bus";
import Summary from "./components/Summary/Summary";
import Outro from "./components/Outro/Outro";

import {useBoundStore} from "./store/store";

import './App.css';

const components = [
    <Intro />,
    <Driver />,
    <Bus />,
    <Summary />,
    <Outro />,
];

function App() {

  const { page } = useBoundStore();
  const component = components[page - 1];

  return (
    <div className="app">
        <div className="content">
            <header className="content__header">
                <Header />
            </header>
            <main className="content__main">
                {component}
            </main>
            <footer className="content__footer"></footer>
        </div>
    </div>
  );
}

export default App;
