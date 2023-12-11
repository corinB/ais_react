import React, { useState } from 'react';
import './page/Home.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './page/Header';
import Options from './page/Options';
import BulletinBoardContent from './page/BulletinBoardContent';
import MentorMenteeContent from './page/MentorMenteeContent';
import BulFree from './page/BulFree'; // Bulletin 컴포넌트 import

const App = () => {
  const [selectedOption, setSelectedOption] = useState('bulletinBoard');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Router>
      <div className="Home">
        <Header />
        <Options selectedOption={selectedOption} handleOptionClick={handleOptionClick} />
        <Routes>
          <Route path="/" element={
            selectedOption === 'bulletinBoard' ? <BulletinBoardContent /> : <MentorMenteeContent />
          } />
          <Route path="/page/BulFree" element={<BulFree/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
