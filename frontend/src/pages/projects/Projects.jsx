import ProjectsGrid from '../../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../../components/projects/ProjectsContext';
import AnimateIn from '../../components/services-section/Animation';

const Projects = () => {
	return (
		<ProjectsProvider>
			<AnimateIn 
			 from="opacity-0 scale-90"
			 to="opacity-100 scale-100"
			 duration={500}>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
			</AnimateIn>
		</ProjectsProvider>
	);
};

export default Projects;