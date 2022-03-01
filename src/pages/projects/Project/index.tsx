import './styles/index.scss';
import { IProjectProps } from './@types';

function Project({ project }: IProjectProps) {
  return (
    <div className='project'>
      <div className='left'>
        <a href={project.url} rel='noreferrer' target='_blank'>
          <img src={project.logo} alt={project.name} />
        </a>

      </div>
      <div className='right'>
        <div className='prj-info-item'>Name: <a href={project.url} rel='noreferrer' target='_blank'>{project.name}</a></div>
        <div className='prj-info-item'>Skills: <p>{project.skills}</p></div>
        <div className='prj-info-item'>Desc: <p>{project.desc}</p></div>
      </div>
    </div>
  );
}

export default Project;
