import './experience.css';

export default function education() {
  return (
    <>
      {/* Education Section */}
      <section id="education" className="flex flex-col justify-center items-center py-32 min-h-screen bg-[#2c3e50]">
      <h2 className="text-4xl font-bold text-white text-center mb-8">Experience</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-500">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-200"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">2020 - present</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Free Lance</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-300">Software Engineering</p>
        </li>
        <li className="mb-5 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-200"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">Oct 2023 - Mar 2024</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Aona Co., Ltd.</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-300">Internship Full Stack Developer</p>
        </li>
      </ol>
    </section>
    </>
  );
}

