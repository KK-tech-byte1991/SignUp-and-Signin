import React from 'react';
import './style.css';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      {/* <SignUp /> */}
    </div>
  );
}
