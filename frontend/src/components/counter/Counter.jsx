import React, { useEffect } from "react";
import { FcBriefcase } from "react-icons/fc";
import years from "../../assets/images/years.svg";
import happy from "../../assets/images/happy.svg";
import client from "../../assets/images/client.svg";
import project from "../../assets/images/project.svg";

const AnimatedCounter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // The lower the slower

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        let count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter
          count += inc;
          counter.innerText = Math.ceil(count); // Round up to nearest integer
          // Call function every ms
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <>
      <section className="counters text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img src={project} alt="" className="w-32" />
            <i className="fab fa-youtube fa-4x mb-4 text-lightblue"></i>
            <div className="counter font-bold text-2xl" data-target="750">
              0
            </div>
            <h3 className="text-lg font-bold">Project Complete</h3>
          </div>
          <div className="flex flex-col items-center">
            {" "}
            <img src={happy} alt="" className="w-32" />
            <i className="fab fa-twitter fa-4x mb-4 text-lightblue"></i>
            <div className="counter font-bold text-2xl" data-target="1500">
              0
            </div>
            <h3 className="text-lg font-bold">Happy Clients</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={client} alt="" className="w-32" />
            <i className="fab fa-facebook fa-4x mb-4 text-lightblue"></i>
            <div className="counter font-bold text-2xl" data-target="650">
              0
            </div>
            <h3 className="text-lg font-bold">Client Refferals</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src={years} alt="" className="w-32" />

            <i className="fab fa-linkedin fa-4x mb-4 text-lightblue"></i>
            <div className="counter font-bold text-2xl" data-target="1825">
              0
            </div>
            <h3 className="text-lg font-bold">Years Experienced</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedCounter;
