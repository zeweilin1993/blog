export interface IProject {
  name: string;
  skills: string;
  url: string;
  desc: string;
  logo: string;
}

export interface IProjectProps {
  project: IProject;
}
