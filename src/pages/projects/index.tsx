import Project from './Project';
import { ProjectList } from './project-helper';

function Projects() {
  document.title = 'PROJECTS - 林泽伟的个人博客';
  return (
    <div className='projects padding-content'>
      <main className='main inner'>
        {ProjectList.map((prj, index) => {
          return <Project key={index} project={prj} />;
        })}
      </main>
    </div>
  );
}

export default Projects;
