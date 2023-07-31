import { Box } from "@chakra-ui/react";
import { ThemeProvider } from '@chakra-ui/react';
import theme from './theme';
import React from 'react';
import './App.css';

import NavigationBar from './NavigationBar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <Box bg={"gray.800"}>
      <NavigationBar/>
      <Home/>
      <Projects/>
      <Contact/>
    </Box>
  );
}

export default App;
