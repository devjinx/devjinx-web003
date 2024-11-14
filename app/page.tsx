import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <div id="center" className="flex justify-center py-96 min-h-screen">
        <div id="Main Content" className="max-w-screen-lg px-4 mx-auto">
          <main>
            <h1 className="text-4xl font-bold mb-2 text-white">
              I'm Thanakorn Chareonlertkamol
            </h1>
            <h2 className="text-2xl mb-2 text-white">
              Full Stack Developer
            </h2>
            <p className="text-xl mb-2 text-white">
              I create a better experience for everyone in using technology.
            </p>
            <p className="text-white text-base pb-2">
              I am currently pursuing a degree in Information Technology at King Mongkut's University of Technology Thonburi (KMUTT), specializing in Full-Stack Development. Alongside my studies, I work part-time as a Full-Stack Developer. Throughout my academic journey, I have developed a deep passion for both coding and cooking, valuing the challenge, precision, and creativity in each.
            </p>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
