import { FaAppStore, FaGithub } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { TbLivePhotoFilled } from "react-icons/tb";

const projects = [
  {
    id: 1,
    title: "Blood Donation Website",
    liveLink: 'https://red-care-2025.netlify.app',
    repoLink: 'https://github.com/GMRedoan/Assignment-11-client.git',
    icon: <FaDroplet className="text-red-500 bounce-custom" />,
    description:
      "A role based website that can help any user in his critical condition with firebase security and fund payment system.",
    image: "https://i.ibb.co.com/1Ym3q09N/Screenshot-2025-12-28-at-5-53-01-PM.png",
    tech: ["React", "Tailwind", "DaisyUI", "Firebase", "Stripe", "MongoDB"],
  },
  {
    id: 2,
    title: "Car Rental Website",
    liveLink: 'https://rent-wheels-2025.netlify.app/',
    repoLink: 'https://github.com/GMRedoan/assignment-10-client.git',
    icon: <IoCarSportSharp className="text-lime-500 animate-pulse" />,
    description:
      "A Car rental website with Private routes and modern search functionality, UI/UX friendly. Besides, canceling system of rented car",
    image: "https://i.ibb.co.com/VcHckbff/Screenshot-2025-12-28-at-5-59-58-PM.png",
    tech: ["React", "API", "UI", "Node.js", "Cors", "JavaScript", "CSS"],
  },
  {
    id: 3,
    title: "Apps 4 U",
    liveLink: 'https://112-assignment-08.netlify.app/apps',
    repoLink: 'https://github.com/GMRedoan/assignment-08.git',
    icon: <FaAppStore className="text-purple-500 animate-spin" />,
    description:
      "A website that includes your application, user can install and uninstall it with UI/UX and responsive design.",
    image: "https://i.ibb.co.com/wrRpbgdG/Screenshot-2025-12-28-at-6-04-13-PM.png",
    tech: ["React", "Tailwind", "Charts", "Express.js", "HTML5", "React Icon"],
  },
];

const MyProjects = () => {

  const handleLive = (link) => {
    window.open(link, "_blank")
  }

  return (
    <section id="project-section" className="py-6 pb-14 relative">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* BLURRED BACKGROUND GLOW */}
        <div
          className="absolute top-20 inset-0 -z-10 rounded-2xl
            bg-linear-to-br from-emerald-400/30 to-lime-400/30
            blur-[80px]"
        />

        {/* CONTENT */}
        <div className="relative">
          {/* Section Header */}
          <div
            data-aos="zoom-in-down"
            className="mb-6 text-center text-4xl md:text-5xl font-extrabold pb-10"
          >
            <h2 className="text-white">
              My{" "}
              <span className="bg-linear-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent shimmer">
                Projects
              </span>
            </h2>
            <div data-aos="zoom-in" className="w-58 h-1 mx-auto mt-3 bg-lime-400 rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} data-aos="zoom-in-down">
                <div
                  className="card bg-gray-950 transition-all duration-300
                    hover:scale-[1.03] rounded-2xl
                    shadow-[0_10px_30px_rgba(132,204,22,0.18)]
                    hover:shadow-[0_30px_50px_rgba(132,204,22,0.25)]"
                >
                  {/* Image */}
                  <figure className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover transition-transform duration-400 hover:scale-105"
                    />
                  </figure>

                  {/* CARD BODY */}
                  <div className="card-body">
                    <h3 className="card-title flex items-center gap-2">
                      {project.icon}
                      <span className="text-white font-bold">
                        {project.title}
                       </span>
                    </h3>

                    <p className="text-sm text-gray-300"> 
                      {project.description}
                     </p>

                    {/* Tech Stack */}
                    <div data-aos="zoom-in" className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((item, index) => (
                        <span
                          key={index}
                          className="rounded-2xl
                            text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-lime-500
                            border-2 border-gradient-to-r border-lime-500 px-3 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div data-aos='zoom-in-down' className="card-actions mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleLive(project.liveLink)}
                        className="btn px-8 text-white 
                          bg-linear-to-r from-emerald-800 to-lime-500 
                          border-none shadow-lg rounded-3xl
                          hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all ease-out duration-300
                          hover:scale-[1.04] w-full"
                      >
                        View
                        <TbLivePhotoFilled className="animate-pulse text-lg text-black" />
                      </button>

                      <button
                        onClick={() => handleLive(project.repoLink)}
                        className="btn px-8 
                        text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-lime-500
                        border-2 border-gradient-to-r border-lime-500
                          shadow-lg rounded-3xl
                          hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all ease-out duration-300
                          hover:scale-[1.04] w-full"
                      >
                        Github 
                        <FaGithub className="text-lime-400 text-lg animate-pulse" />
                      </button>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
