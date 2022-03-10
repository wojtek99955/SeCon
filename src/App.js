import Header from './components/Header/Header/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './assets/styles/GlobalStyles.js'
import Footer from './components/Footer/Footer'
import { theme } from './assets/styles/theme'
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton'
import Home from './components/View/Home'
import Monitoring from './components/subpages/Monitoring/Monitoring'
import { Routes, Route } from 'react-router-dom'
import Alarms from './components//subpages/Alarms/Alarms'
import AccessControl from './components/subpages/AccessControl/AccessControl'
import Measurement from './components/subpages/Measurement/Measurement'

function App() {
    return (
        <div>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <ScrollTopButton />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/uslugi/monitoring" element={<Monitoring />} />
                    <Route path="/uslugi/systemy-zabezpieczen" element={<Alarms />} />
                    <Route path="/uslugi/kontrola-dostepu-rejestracja-czasu-pracy" element={<AccessControl />} />
                    <Route path="/uslugi/pomiary-instalacji-i-urzadzen-elektrycznych" element={<Measurement />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default App
