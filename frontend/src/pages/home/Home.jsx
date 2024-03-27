import React from "react";

import { Link } from 'react-router-dom';
// import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../../components/projects/ProjectsContext';
import Button from '../../components/reusable/Button';

import Hero from "../../components/hero/Hero";
import Counter from "../../components/counter/Counter";
// import About from "../../components/about/About";
// import ServicesTab from "../../components/services-section/ServicesTab";
// import Contact from "../../components/contact/Contact";
// import PortfolioTab from "../../components/portfolio-section/PortfolioTab";
// import BlogTab from "../../components/blog-section/BlogTab";
// import Footer from "../../components/footer/Footer";

// const Home = () => {
//   return (
//     <div>
      
//       <About />
//       <ServicesTab />
//       <Contact />
//       <PortfolioTab />
//       <BlogTab />
//       <Footer />
//     </div>
//   );
// };

// export default Home;




const Home = () => {
	return (
		<div className="container mx-auto">
			<Hero />
      <Counter />

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default Home;