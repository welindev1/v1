import { Header, Footer } from './components/layout';
import { About, Experience, Skills, Certifications, Projects } from './components/sections';
import { useMousePosition, useActiveSection } from './hooks';
import { navigationItems } from './data/portfolio';

const sectionIds = navigationItems.map((item) => item.id);

function App() {
  const { x, y } = useMousePosition();
  const activeSection = useActiveSection(sectionIds);

  return (
    <div
      className="min-h-screen bg-slate-900 text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
      style={{
        backgroundImage: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-6xl mx-auto min-h-screen px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between lg:gap-16">
        <Header activeSection={activeSection} />

        <main className="w-full lg:w-[55%] py-20 lg:pt-20">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
