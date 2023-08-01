import { Box } from "@chakra-ui/react";
import React from 'react';
import './App.css';

import NavigationBar from './NavigationBar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { HashRouter } from "react-router-dom";

import { Link } from "react-router-dom";

function App() {
    return (
        <Box bg={"gray.800"}>
            <NavigationBar/>
            <Home/>
            <Projects/>
            <Contact/>
            <Footer/>
        </Box>
    );
}

export default App;
