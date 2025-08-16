import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Calendar } from './components/Calendar';
import { OrthopediacBank } from './components/OrthopediacBank';
import { LiteraryContests } from './components/LiteraryContests';
import { YouthExchange } from './components/YouthExchange';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Calendar />
        <OrthopediacBank />
        <LiteraryContests />
        <YouthExchange />
      </main>
      <Footer />
    </>
  )
}



export default App