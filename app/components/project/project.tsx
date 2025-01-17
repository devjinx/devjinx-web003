import './project.css';

export default function education() {
  return (
    <>
      {/* Projects Section */}
      <section id="project" className="flex flex-col justify-center items-center py-32 min-h-screen ">
            <h2 className="text-4xl font-bold text-black text-center mb-8">My Project</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-500">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-black">2020 - 2025</time>
                <h3 className="text-lg font-semibold text-black">Devjinx Website</h3>
                <p className="text-base font-normal text-black">Full-Stack Developer Web app</p>
              </li>
              <li className="mb-5 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-black">2023 - 2024</time>
                <h3 className="text-lg font-semibold text-black">Lamy(Aona Coltd) Website</h3>
                <p className="text-base font-normal text-black">Frontend Developer Website</p>
              </li>
              <li className="mb-5 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-black">2024 - 2025</time>
                <h3 className="text-lg font-semibold text-black">Hope 4.0</h3>
                <p className="text-base font-normal text-black">Frontend Developer Mobile App</p>
              </li>
            </ol>
      </section>
    </>
  );
}
