import {
  About,
  Header,
  Services,
  Portfolio,
  Testimonials,
  Contacts,
  Footer,
  FloatingNav,
  Experience,
} from "./sections";

function App() {
  return (
    <main>
      <Header />
      <FloatingNav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </main>
  );
}

export default App;
