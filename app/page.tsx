import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
export default function index() {
  return (
    <>
      <Navbar />
      <div id="center" className="flex justify-center mt-100 min-h-screen">

        <div id="Main Content" className="max-w-screen-lg px-4 ml-8">
          <main>
              <h1 className="text-4xl font-bold mb-2 text-white">
                I'm Thanakorn Chareonlertkamol
              </h1>
              <h2 className="text-2xl mb-2 text-white">
                Full Stack Developer
              </h2>
              <p className="text-base mb-2 text-white">
                I create a better experience for everyone in using technology.
              </p>

              <p className="text-white text-base pb-2">
              I am currently pursuing my degree at King Mongkut's University of Technology Thonburi (KMUTT), specializing in Information Technology. Throughout my academic journey, I have developed a deep passion for both coding and cooking, appreciating the challenge, precision, and creativity that both disciplines demand.
            </p>
            <p className="text-white text-base pb-2">
              Full-stack developer, I have gained extensive hands-on experience in a variety of modern technologies, including Next.js, React.js, Vue.js, TypeScript, Express.js, SQL. Additionally, I am proficient in leveraging cloud services such as Firebase and Cloudflare, as well as databases like MongoDB and MySQL, to create efficient, scalable, and secure web applications. My design toolkit includes frameworks like Tailwind CSS and Bootstrap, allowing me to develop user-friendly interfaces with clean, responsive designs.
            </p>
            <p className="text-white text-base pb-10">
              I am deeply committed to continuous learning and professional growth. My ultimate goal is to advance into a senior management position within the IT industry and eventually establish my own IT company. I believe that attention to detail is crucial to success, and I apply this principle in every project I undertake. Guided by the motto, "Hard work produces luck and success," I am dedicated to achieving my career aspirations through perseverance, innovation, and a constant drive for improvement.
            </p>
          </main>

        </div>

        </div>

      <Footer />
    </>
  );
}