import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function Index() {
  return (
    <>
      <Navbar />

      {/* About Section */}
      <section id="about" className="flex justify-center py-64 min-h-screen bg-[#fff]">
        <div className="max-w-screen-lg px-4 mx-auto">
          <main>
          <img className="w-64 h-64 mx-auto rounded-full mb-5 object-cover" src="./thanakorn_char_img.jpg" alt="Profile Picture"/>
            <h1 className="text-4xl font-bold mb-2 my-10 text-black">I'm Thanakorn Chareonlertkamol</h1>
            <h2 className="text-2xl mb-2 text-gray-800">Software Developer</h2>
            <p className="text-xl mb-2 text-gray-700">
              I create a better experience for everyone in using technology.
            </p>
            <p className="text-gray-700 text-base pb-2">
              I am currently pursuing a degree in Information Technology at King Mongkut's University of Technology Thonburi (KMUTT), specializing in Full-Stack Development. Alongside my studies, I work part-time as a Full-Stack Developer. Throughout my academic journey, I have developed a deep passion for both coding and cooking, valuing the challenge, precision, and creativity in each.
            </p>
          </main>
        </div>  
      </section>

      {/* Education Section */}
          <section id="education" className="flex flex-col justify-center items-center py-32 min-h-screen bg-[#2c3e50]">
            <h2 className="text-4xl font-bold text-white text-center mb-8">Education</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-500">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">2021 - 2023</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Debsirin School, Bangkok, Thailand</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-300">English - Japan</p>
              </li>
              <li className="mb-5 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">2024 - Present</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">King Mongkut's University of Technology Thonburi, Bangkok, Thailand</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-300">Studying for a Bachelor's degree in Information Technology</p>
              </li>
            </ol>
          </section>
    
      {/* Projects Section */}
      <section id="project" className="flex justify-center py-96 min-h-screen bg-[#2c3e50]">
        <div className="max-w-screen-lg px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-white">My Projects</h2>
          <p className="text-xl mb-4 text-white">
            Here are some of the projects I've worked on:
          </p>
          <ul className="list-disc pl-6 text-white">
            <li>Project 1: Description</li>
            <li>Project 2: Description</li>
            <li>Project 3: Description</li>
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="flex justify-center py-96 min-h-screen bg-[#2c3e50]">
        <div className="max-w-screen-lg px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-white">Experience</h2>
          <p className="text-xl mb-4 text-white">
            I have gained valuable experience through my work as a Full-Stack Developer and various internships.
          </p>
          <ul className="list-disc pl-6 text-white">
            <li>Full-Stack Developer at Company XYZ</li>
            <li>Internship at Company ABC</li>
            <li>Freelance Web Developer</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
