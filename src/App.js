import React from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { AuthUserProvider } from "./Providers/auth-provider";
import { HomeScreen, SignInScreen, SignUpScreen, ExploreScreen, PostScreen } from "./screens";

const App = () => {
  return (
    <AuthUserProvider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />}/>
          <Route path='/sign-up' element={<SignUpScreen />}/>
          <Route path='/sign-in' element={<SignInScreen />}/>
          <Route path='/explore' element={<ExploreScreen />}/>
          <Route path='/add-post' element={<PostScreen />}/>
        </Routes>
      </BrowserRouter>
    </AuthUserProvider>
  );
};

export default App;
