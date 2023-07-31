import { Box } from "@chakra-ui/react";
import { ThemeProvider } from '@chakra-ui/react';
import theme from './theme';
import React from 'react';
import './App.css';

import NavigationBar from './NavigationBar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter } from "react-router-dom";


function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Box bg={"gray.800"}>
                <NavigationBar/>
                <Home/>
                <Projects/>
                <Contact/>
            </Box>
        </BrowserRouter>
    );
}

export default App;
