import './styles/index.scss';
import { IProjectProps } from './@types';

function Project({ project }: IProjectProps) {
  return (
    <div className='project'>
      <div className='left'>
        <img src={project.logo} alt={project.name} />
      </div>
      <div className='right'>
        <span>Name:</span>
        <p>{project.name}</p>
        <span>Technology Stack:</span>
        <p>{project.technologyStack}</p>
        <span>Url:</span>
        <p>
          <a href={project.url} rel='noreferrer' target='_blank'>
            {project.url}
          </a>
        </p>
        <span>Description:</span>
        <p>{project.desc}</p>
      </div>
    </div>
  );
}

export default Project;
