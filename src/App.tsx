import React from 'react';
import { Header } from './components/Header/Header';
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { WorkExp } from './components/WorkExp/WorkExp';
import { Preview } from './components/Preview/Preview';

import './App.scss';

function App() {
    return (
        <div className="App container">
            <Header />
            <PersonalInfo />
            <Education />
            <Skills />
            <WorkExp />
            <Preview />
        </div>
    );
}

export default App;
