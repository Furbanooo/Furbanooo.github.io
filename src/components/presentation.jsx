import React from "react";
import { useRef } from "react";
import experiences from "../assets/experiences";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ExperienceCard({
  companyName,
  img,
  project,
  title,
  years,
  description,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useParallax(scrollYProgress, 300); // Horizontal movement

  return (
    <section className="h-screen flex justify-center items-center relative">
      <div
        ref={ref}
        className="w-[300px] h-[400px] max-h-[90vh] my-5 bg-white overflow-hidden relative rounded-md shadow-md"
      >
        <img
          src={img}
          alt={`image of ${project}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <motion.h2
        style={{ x }} // Apply horizontal transform
        className="text-2xl font-semibold tracking-tight leading-snug text-accent absolute left-0"
      >
        <h2>{`##${project}`}</h2>
        <h3>{`${title}: ${years}`}</h3>
        <p>{`${description}`}</p>
      </motion.h2>
    </section>
  );
}

const Presentation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="mx-5 w-full flex flex-col justify-start">
      <h1 className="text-8xl text-gray-800 font-bold mb-28">
        Cybersecurity <br className="m-5" />
        Engineering Student
      </h1>

      <div className="flex flex-col mb-12">
        <h2 className="text-6xl font-semibold text-gray-800 mb-6">
          __About-Me__
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          I've always been fascinated by technology, driven by an insatiable
          curiosity to break things down and understand how they work. My
          journey began five years ago with web development, diving deep into
          WordPress and exploring the digital landscape. Since then, I've
          expanded my skills significantly, growing from those foundational
          experiences into a dedicated learner and developer. Currently, I'm
          enhancing my expertise at a renowned professional IT school in Paris,
          focusing on advanced concepts in cybersecurity, programming, and
          system design. This immersive environment fuels my passion for
          continuous learning, allowing me to build innovative solutions and
          explore new challenges in the tech world. I'm excited about what the
          future holds and am committed to pushing boundaries, learning, and
          creating meaningful technology. Let's connect and innovate together!
        </p>
      </div>

      <div className="flex flex-col h-auto">
        <h2 className="text-6xl font-semibold text-gray-800 mb-6">
          Experiences
        </h2>
        <div className="flex flex-row justify-between items-center">
          <div class="m-0 p-0 w-[]">list of companies</div>
          <div class="m-0 p-0 w-[70%] h-[500px] bg-background text-accent flex-row jusitfy-center item-center border-2 snap-x snap-y overflow-y-auto overflow-x-auto snap-x snap-mandatory ">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                companyName={experience.companyName}
                project={experience.Project}
                img={experience.img}
                title={experience.title}
                years={experience.years}
                description={experience.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
