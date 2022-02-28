import { AboutHeader, AboutMain } from './components';

function About() {
  document.title = 'ABOUT - 林泽伟的个人博客';

  return (
    <div className='about'>
      <AboutHeader />
      <AboutMain />
    </div>
  );
}

export default About;
