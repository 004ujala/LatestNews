import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer';

export class App extends Component {
  render() {
    const appStyles = {
      backgroundColor: '#a7a5a5',
      margin:'0px',
      padding:'0px',
      overflowY:'hidden',minHeight:'100vh'
    };
    return (
      <div style={appStyles}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" category="general" />} />
            <Route exact path="/business" element={<News key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" category="health" />} />
            <Route exact path="/science" element={<News key="science" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" category="technology" />} />
          </Routes>
        </Router>
        {/* <Footer/> */}
      </div>
    )
  }
}

export default App