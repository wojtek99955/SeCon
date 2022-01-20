import Header from './components/Header/Header/Header'
import MainPage from './components/MainPage/MainPage'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './assets/GlobalStyles.js'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { theme } from './assets/theme'
import Services from './components/Services/Services'
import OurWork from './components/OurWork/OurWork'

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Header />
                <MainPage />
                <About />
                <Services />
                <OurWork />
                <Contact />
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default App
