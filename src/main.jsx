import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Header } from './Portfolio Pages/Header.jsx'
import { Intro } from './Portfolio Pages/Intro.jsx'
import { About } from './Portfolio Pages/About.jsx'
import { Skills } from './Portfolio Pages/Skills.jsx'
import { Internship } from './Portfolio Pages/Internship.jsx'
import { Projects } from './Portfolio Pages/Projects.jsx'
import { Resume } from './Portfolio Pages/Resume.jsx'
import { Contact } from './Portfolio Pages/Contact.jsx'
import { Footer } from './Portfolio Pages/Footer.jsx'
import { Calculator } from './Mini Projects/Calculator.jsx'
import { CurrencyConverter } from './Mini Projects/CurrencyConverter.jsx'
import { CountDown } from './Mini Projects/CountDown.jsx'
import { Form } from './Mini Projects/Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <Form />
       <App />
      <Calculator />
      <CurrencyConverter />
      <CountDown />
    */}
    
    <Header />
    <Intro />
    <About />
    <Skills />
    <Internship />
    <Projects />
    <Resume />
    <Contact />
    <Footer /> 
  </React.StrictMode>,
)
