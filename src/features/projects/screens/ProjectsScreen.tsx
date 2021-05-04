import React, { FunctionComponent } from 'react';
import { SafeScreenContainer } from 'shared/components';
import { useProjects } from '../hooks';
import { ProjectsList } from '../components';

const ProjectsScreen: FunctionComponent<{}> = () => {
  const { projects } = useProjects();

  return (
    <SafeScreenContainer>
      <ProjectsList items={projects} />
    </SafeScreenContainer>
  );
};

export default ProjectsScreen;
