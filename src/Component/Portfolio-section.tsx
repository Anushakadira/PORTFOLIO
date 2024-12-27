
    const events = [
        {
          year: "2013-2017",
          title: "Bachelor of pharmacy (Telangana)",
          details: ["Grade : Distinction", "Sri venkateshwara college of pharmacy, Hyderabad,India."],
        },
        {
          year: "Feb 2019 - Aug 2022",
          title: "Senior claims Associate",
          details: ["Company:Optum Global Solutions,Hyderabad,India."],
        },
        {
          year: "Sep 2022 - Dec 2023 ",
          title: "Msc Bioinformatics",
          details: ["Grade: Merit", "University of west London,London UK."],
        },
        {
          year: "July 2024-Present",
          title: "AI AND DATASCIENCE INTERN",
          details: ["Internship","BNP Paribas , France"],
        },
      ];

export default function PortfolioSection() {
    return (
      <div
        id="experience"
        className="relative flex items-center justify-center h-full py-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('../src/assets/portfolio.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",

        }}
      >
        <div className="bg-black/50 w-full h-full absolute inset-0" />
        <div className="relative z-10 text-center text-white py-24">
          <h1 className="tracking-[.25em] uppercase text-6xl font-bold">Portfolio</h1>
          <p className="mt-5 text-2xl">
            My work,{" "}
            <a href="#" className="text-gray-400">
              see more {">"}
            </a>
          </p>
          <div className="flex flex-col items-center space-y-6 p-8 gap-5">
            <div className="relative bg-gray-800 text-gray-200 rounded-lg p-6 shadow-lg w-full max-w-xl">
              <p className="font-semibold text-2xl text-left">
                Artificial and Datascience Intern
              </p>
              <p className="mt-2 text-gray-400 text-left text-xl">
              Designed and implemented a chatbot leveraging NLP techniques and AI models.
              </p>
              <div className="absolute -bottom-3 left-6 w-6 h-6 bg-gray-800 transform rotate-45"></div>
            </div>
            {/* Speech Bubble 2 */}
            <div className="relative bg-gray-800 text-gray-200 rounded-lg p-6 shadow-lg w-full max-w-xl">
              <p className="font-semibold text-2xl text-left">
                Model Development
              </p>
              <p className="mt-2 text-gray-400 text-left text-xl">
                Build and train machine learning models for prediction and classification tasks.
                EDA:Exploratory Data Analysis: Analyze and visualize data to uncover patterns and insights.
              </p>
              <div className="absolute -bottom-3 right-6 w-6 h-6 bg-gray-800 transform rotate-45"></div>
            </div>
  
            {/* Speech Bubble 1 */}
            <div className="relative bg-gray-800 text-gray-200 rounded-lg p-6 shadow-lg w-full max-w-xl">
              <p className="font-semibold text-2xl text-left">
              Research
              </p>
              <p className="mt-2 text-gray-400 text-left text-xl">
                Explore and implement new machine learning techniques for improved outcomes.
                Tools Mastery: Use Python, SQL, Pandas, and cloud platforms like AWS or GCP.
              </p>
              <div className="absolute -bottom-3 left-6 w-6 h-6 bg-gray-800 transform rotate-45"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="tracking-[.25em] text-6xl font-bold uppercase py-10 mt-10">
              experience
            </h1>
            <div className="relative mt-10 w-full h-full max-w-[900px] ">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"></div>
              {/* Timeline Items */}
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center  w-full ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  } px-1`}
                >
                  <div
                    className={`relative  text-gray-200 p-4 rounded-lg w-80  ${
                      index % 2 === 0 ? "ml-6" : "mr-6"
                    }`}
                  >
                    <p className="text-green-400 font-semibold">{event.year}</p>
                    <h3 className="mt-2 font-bold text-lg">{event.title}</h3>
                    {event.details.map((detail, i) => (
                      <p key={i} className="text-gray-400 mt-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {/* Dot */}
                  <div className="w-6 h-6 bg-green-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  