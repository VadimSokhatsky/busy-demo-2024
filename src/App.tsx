import React from "react";

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

  const page = useBoundStore().page;
  const component = components[page - 1];

  return (
    <div>
      {component}
    </div>
  );
}

export default App;
