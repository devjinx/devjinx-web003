import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen text-white">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-justify">
            Thanakorn Chareonlertkamol
          </h1>
          <h2 className="text-2xl font-medium mb-2 text-justify">
            Full Stack Developer
          </h2>
          <p className="text-lg max-w-lg mx-auto text-justify">
            I create a better experience for everyone in using technology.
          </p>
        </header>
    </main>
  );
}
