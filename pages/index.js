import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <div className='gradient-03 z-0'></div>
      <Explore />
    </div>
    <div class='relative'>
      <GetStarted />
      <div className='gradient-04 z-0'></div>
      <WhatsNew />
    </div>    
    <World />
    <div class='relative'>
    <Insights />
    <div className='gradient-04 z-0'></div>
    <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
