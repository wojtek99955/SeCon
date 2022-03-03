import Header from './components/Header/Header/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './assets/styles/GlobalStyles.js'
import Footer from './components/Footer/Footer'
import { theme } from './assets/styles/theme'
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton'
import Home from './components/View/Home';
import Monitoring from './components/Monitoring/Monitoring'
import { Routes, Route } from 'react-router-dom';
import Alarms from './components/Alarms/Alarms';

function App() {
    return (
        <div>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <ScrollTopButton />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/monitoring" element={<Monitoring />} />
                    <Route path="/services/alarms" element={<Alarms />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default App
