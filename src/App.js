import { Box } from "@chakra-ui/react";
import { ThemeProvider } from '@chakra-ui/react';
import theme from './theme';
import React from 'react';
import './App.css';

import NavigationBar from './NavigationBar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import { HashRouter } from "react-router-dom";


function App() {
    return (
        <HashRouter base="/">
            <Box bg={"gray.800"}>
                <NavigationBar/>
                <Home/>
                <Projects/>
                <Contact/>
            </Box>
        </HashRouter>
    );
}

export default App;
