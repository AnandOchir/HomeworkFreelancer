import React from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { AuthUserProvider } from "./Providers/auth-provider";
import { Navigation } from "./components";
import { HomeScreen, SignInScreen, SignUpScreen, ExploreScreen, PostScreen, AddPostScreen, ProfileScreen, HomeWorkViewScreen } from "./screens";
import { Box } from "./common-components";

const App = () => {
  return (
    <AuthUserProvider >
      <BrowserRouter>
        <Navigation/>
        <Box mt='60px'>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='explore-posts/*' element={<HomeWorkViewScreen/>}/>
            <Route path='profile/*' element={<HomeWorkViewScreen/>}/>
            <Route path='/sign-up' element={<SignUpScreen />}/>
            <Route path='/sign-in' element={<SignInScreen />}/>
            <Route path='/explore-posts' element={<ExploreScreen />}/>
            <Route path='/add-post' element={<AddPostScreen />}/>
            <Route path='/profile' element={<ProfileScreen />}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </AuthUserProvider>
  );
};

export default App;
