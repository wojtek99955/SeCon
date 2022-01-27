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

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <ScrollTopButton />
                <Header />
                <MainPage />
                <About />
                <Services />
                <OurWork />
                <Certificates />
                <Contact />
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default App
