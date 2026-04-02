import ParallaxHero from '../components/ParallaxHero';
import HorizontalSkills from '../components/HorizontalSkills';
import AboutSnapshot from '../components/AboutSnapshot';
import WorkExperience from '../components/WorkExperience';
import FeaturedProjects from '../components/FeaturedProjects';
import PlatformCards from '../components/PlatformCards';
import FAQ from '../components/FAQ';
import WritingPreview from '../components/WritingPreview';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <ParallaxHero />
      <HorizontalSkills />
      <AboutSnapshot />
      <WorkExperience />
      <FeaturedProjects />
      <PlatformCards />
      <FAQ />
      <WritingPreview />
      <ContactSection />
      
      <footer className="footer">
        <div>© 2025 Aryaman Singh Dev</div>
        <div>Built with intention</div>
      </footer>
    </div>
  );
};

export default HomePage;