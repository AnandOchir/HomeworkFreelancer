import React from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { AuthUserProvider } from "./Providers/auth-provider";
import { HomeScreen, SignInScreen, SignUpScreen } from "./screens";

const App = () => {
  return (
    <AuthUserProvider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />}/>
          <Route path='/sign-up' element={<SignUpScreen />}/>
          <Route path='/sign-in' element={<SignInScreen />}/>
        </Routes>
      </BrowserRouter>
    </AuthUserProvider>
  );
};

export default App;
