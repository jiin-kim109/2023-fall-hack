import React from 'react';
import './App.css';
import MainPage from './containers/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Questionnaire from './containers/Questionnaire';

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/q/:qId" element={<Questionnaire />} />
                <Route path="result" element={<>result</>} />
            </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
