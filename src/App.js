import React, {Component} from 'react';

import './index.css';

import Header from './components/header/Header';
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Nav/>
                <About/>
                <Skills/>
                <Projects/>
                <Education/>
                <Testimonial/>
                <Contact/>
                <Footer/>
            </>
        );
    }
}

export default App;