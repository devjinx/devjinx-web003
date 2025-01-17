import './education.css';

export default function education() {
  return (
    <>
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
    </>
  );
}
