import { Box } from "@chakra-ui/react";
import React from 'react';
import './App.css';

import NavigationBar from './NavigationBar';
import Home from './Home';
import Projects from './Projects';
import Publications from './Publications';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

function App() {
    return (
        <Box bg={"gray.800"}>
            <NavigationBar/>
            <Home/>
            <Projects/>
            <Publications/>
            <Skills/>
            <Contact/>
            <Footer/>
        </Box>
    );
}

export default App;
