import React from 'react';
import GlobalStyle from './styles/Global';
import { Header } from './components/Header/Header';
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';

import './App.scss';

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="App container">
                <Header />
                <PersonalInfo />
                <Education />
                <Skills />
            </div>
        </>
    );
}

export default App;
