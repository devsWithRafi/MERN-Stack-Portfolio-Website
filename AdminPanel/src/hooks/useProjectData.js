import { useContext } from 'react';
import { ProjectContext } from '../context/projects-context';

export const useProjectData = () => useContext(ProjectContext);
