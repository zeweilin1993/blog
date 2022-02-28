export interface IProject {
  name: string;
  technologyStack: string;
  url: string;
  desc: string;
  logo: string;
}

export interface IProjectProps {
  project: IProject;
}
