import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Twitter from './pages/Twitter';
import Blog from './pages/Blog';
import Facebook from './pages/Facebook';
import YouTube from './pages/YouTube';
import Instagram from './pages/Instagram';
import WhatsApp from './pages/WhatsApp';
import Form from './pages/Form';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/twitter" element={<Twitter />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/facebook" element={<Facebook />} />
                <Route path="/youtube" element={<YouTube />} />
                <Route path="/instagram" element={<Instagram />} />
                <Route path="/whatsapp" element={<WhatsApp />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </Router>
    );
};

export default App;
