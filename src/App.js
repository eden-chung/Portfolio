import logo from './logo.svg';
import { Box, ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from '@chakra-ui/react';
import theme from './theme';
import React from 'react';
import './App.css';

import NavigationBar from './NavigationBar';
import Home from './Home';


function App() {
  return (
    <Box bg={"gray.800"}>
      <NavigationBar/>
      <Home/>
    </Box>
  );
}

export default App;
