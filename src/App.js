import Header from './components/Header/Header/Header'
import MainPage from './components/MainPage/MainPage'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './assets/styles/GlobalStyles.js'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { theme } from './assets/styles/theme'
import Services from './components/Services/Services'
import OurWork from './components/OurWork/OurWork'
import Certificates from './components/Certificates/Certificates'
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton'
import Home from './components/View/Home';
import Monitoring from './components/Monitoring/Monitoring'
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/monitoring" element={<Monitoring />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default App
