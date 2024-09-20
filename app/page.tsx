import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";


export default function index() {
  return (
    <>
    <Navbar />
    <div className="flex justify-center mt-[100px] min-h-screen">
      <div id="left" className="flex-1 max-w-[500px] px-4" style={{ marginBottom: ' 500px' }}>
        <main>
          <header>
            <h1 className="text-3xl font-bold mb-2 text-white">
              Thanakorn Chareonlertkamol
            </h1>
            <h2 className="text-xl mb-2 text-white">
              Full Stack Developer
            </h2>
            <p className="text-base mb-2 text-white">
              I create a better experience for everyone in using technology.
            </p>
          </header>
        </main>
      </div>
      <div id="right" className="flex-1 max-w-[500px] px-4 ml-8">
        <div>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}