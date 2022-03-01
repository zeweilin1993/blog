import './styles/index.scss';
import { IProjectProps } from './@types';

function Project({ project }: IProjectProps) {
  return (
    <div className='project'>
      <div className='left'>
        <a href={project.url} rel='noreferrer' target='_blank'>
          <img src={project.logo} alt={project.name} />
          <span className='bd_n1'></span>
          <span className='bd_n2'></span>
          <span className='bd_n3'></span>
          <span className='bd_n4'></span>
        </a>

      </div>
      <div className='right'>
        <p>Name: {project.name}</p>
        <p>Skills: {project.skills}</p>
        <p>Desc: {project.desc}</p>
      </div>
    </div>
  );
}

export default Project;
