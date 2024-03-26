import React, { useEffect } from 'react';
import { FcBriefcase } from "react-icons/fc";


const AnimatedCounter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
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
      
      <section className="counters bg-blue-500 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <FcBriefcase />
            <i className="fab fa-youtube fa-4x mb-4 text-lightblue"></i>
            <div className="counter" data-target="750">0</div>
            <h3 className="text-lg">Project Complete</h3>
            


          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-twitter fa-4x mb-4 text-lightblue"></i>
            <div className="counter" data-target="1500">0</div>
            <h3 className="text-lg">Happy Clients</h3>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-facebook fa-4x mb-4 text-lightblue"></i>
            <div className="counter" data-target="650">0</div>
            <h3 className="text-lg">Client Refferals</h3>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-linkedin fa-4x mb-4 text-lightblue"></i>
            <div className="counter" data-target="1825">0</div>
            <h3 className="text-lg">Years Experienced</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedCounter;