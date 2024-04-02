import React from "react";
import AnimateIn from "./Animation";
import { useState, useEffect } from "react";
import "./service.css"

const ServicesTab = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [skills, setSkills] = useState([]);
  const fetchSkills = async () => {
    const response = await fetch(`${baseUrl}/skills`);
    const data = await response.json();
    setSkills(data);
  };
  useEffect(() => {
    fetchSkills();
  }, []);
  return (
    <>
      <AnimateIn
        from="opacity-0 scale-90"
        to="opacity-100 scale-100"
        duration={500}
      >
        <div className="services-container">
          <h3 className="text-center text-3xl mb-6 font-bold text-ternary-light">
            My Skills
          </h3>
          <div className="services-grid">
            {skills.map((item) => (
              <div className="serv1 bg-white p-6 shadow-md rounded-md">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.skill}
                </h4>
                <div className=" flex items-center">
                  <div className="rounded-full w-12 h-12 border-2 border-black mr-4">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                      100%
                    </span>
                  </div>
                  <p className="text-gray-800">{item.proficiency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </>
  );
};

export default ServicesTab;