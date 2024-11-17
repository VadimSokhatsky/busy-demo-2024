import React, { lazy, Suspense } from "react";

import Header from "./components/Header/Header";

import {useBoundStore} from "./store/store";

import './App.css';

const Intro = lazy(() => import("./components/Intro/Intro"));
const Driver = lazy(() => import("./components/Driver/Driver"));
const Bus = lazy(() => import("./components/Bus/Bus"));
const Summary = lazy(() => import("./components/Summary/Summary"));
const Outro = lazy(() => import("./components/Outro/Outro"));

const components = [Intro, Driver, Bus, Summary, Outro];

function App() {

  const { page } = useBoundStore();
  const CurrentPage = components[page - 1];

  return (
          <div className="app">
              <div className="content">
                  <header className="content__header">
                      <Header/>
                  </header>
                  <main className="content__main">
                      <Suspense fallback={<div className="content__loading">Loading...</div>}>
                          <CurrentPage/>
                      </Suspense>
                  </main>
                  <footer className="content__footer">
                      Developed by Vadym Sokhatskyi, 2024
                  </footer>
              </div>
          </div>
  );
}

export default App;
