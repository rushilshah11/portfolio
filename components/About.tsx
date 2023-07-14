import React from "react";

const About = () => {
  const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "Python" },
    { skill: "C++" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Jupyter Notebooks" },
    { skill: "VSCode" },
    { skill: "Figma" },
    { skill: "Firebase" },
  ];
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              {" "}
              Hi, my name is Rushil and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span> ,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Los Angeles, CA.
            </p>
            <br />
            <p>
              I am currently studying Computer Science and Business
              Administration at the University of Southern California.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to cooking.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to cooking.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
