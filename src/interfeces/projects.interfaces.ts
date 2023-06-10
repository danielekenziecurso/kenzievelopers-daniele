type TProjects = {
  id: number;
  name: string;
  description: string;
  repository: string;
  startDate: Date;
  endDate: Date;
  developerId: number;
};

type TProjectsRequest = Omit<TProjects, "id">;

interface Project {
  projectId: number;
  projectName: string;
  projectDescription: string;
  projectRepository: string | null;
  projectStartDate: Date;
  projectEndDate: Date | null;
  projectDeveloperName: string;
}

export { TProjects, TProjectsRequest, Project };
