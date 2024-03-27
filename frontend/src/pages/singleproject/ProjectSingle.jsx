
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectGallery from '../../components/projects/ProjectsGallery';
import ProjectSingleHeader from '../../components/projects/ProjectsHeader';
import ProjectRelatedProjects from '../../components/projects/ProjectsRelatedProjects';
import { SingleProjectProvider } from '../../components/projects/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectSingleHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;