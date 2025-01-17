import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Education from "./components/education/education";
import Experience from "./components/experience/experience"
import Project from "./components/project/project"

export default function Index() {
  return (
    <>
      <Navbar />

      {/* About Section */}
      <section id="about" className="flex justify-center py-64 min-h-screen bg-[#fff]">
        <div className="max-w-screen-lg px-4 mx-auto">
          <main>
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

      <Education />

      <Project/>

      <Experience/>

      <Footer />
    </>
  );
}
