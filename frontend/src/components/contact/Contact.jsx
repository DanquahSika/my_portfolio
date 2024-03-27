import React from 'react'
import { motion } from 'framer-motion';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
				<h1>Have A Project?</h1>
		</motion.div>,
		
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		
		>
			
			<ContactForm />
			<ContactDetails />
		</motion.div>
	);
};


export default Contact;