import React from "react";
import AnimateIn from "./Animation";
import { useState, useEffect } from "react";

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
        <div>
          <h3 className="text-center text-3xl pb-2">My Skills</h3>
          <div className="services flex justify-center items-center gap-2">
            {skills.map((item) => (
              <div className="serv1  text-black bg-white p-5 text-center rounded">
                <p>{item.skill}</p>
                <div className="rounded-full w-24 h-24 border-2 border-black mx-auto">
                  <span className="absolute top-1/2">100%</span>
                </div>
                <p>{item.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>
    </>
  );
};

export default ServicesTab;
