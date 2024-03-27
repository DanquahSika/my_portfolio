import ProjectsGrid from '../../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../../components/projects/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto bg-blue">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;