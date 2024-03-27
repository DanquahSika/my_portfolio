import ProjectsGrid from '../../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../../components/projects/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;