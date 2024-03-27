import { useState, createContext } from 'react';
import { aboutMeData } from './AboutMeData';
import { clientsHeading as clientsPageHeading } from './AboutClientsData';
import { clientsData as clientsDataJson } from './AboutClientsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				clientsHeading,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;