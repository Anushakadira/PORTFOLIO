import ProgressBar from "./ProgressBar";

const skills = [
  {
    at: "problem solving",
    percentage: 90,
  },
  {
    at: "python",
    percentage: 85,
  },
  {
    at: "c programming",
    percentage: 60,
  },
  {
    at: "AI",
    percentage: 60,
  },
  {
    at: "java",
    percentage: 40,
  },
  {
    at: "Data Science",
    percentage: 80,
  },
  {
    at: "Bioinformatics",
    percentage: 80,
  },
  {
    at: "communication",
    percentage: 85,
  },
  {
    at: "team player",
    percentage: 90,
  },
  {
    at: "ms office",
    percentage: 85,
  },
 
];

export default function ProfessionalSkillsSection() {
  return (
    <div
      id="professional-skills"
      className="relative flex items-center justify-center h-screen "
    >
      <div
        className=" w-full h-full absolute inset-0"
        style={{
          backgroundImage: `url('../src/assets/PS.avif')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-black/50 w-full h-full absolute inset-0" />
        <div className="relative z-10 text-center text-white py-24">
          <h1 className="tracking-[.25em] uppercase text-6xl font-bold">
            professional <br />
            skills
          </h1>
          <div className="flex justify-center items-center mt-10">
            <ul className="my-10">
              {skills.map(({ at, percentage }, key) => {
                return (
                  <li key={key} className="flex gap-4 items-center py-2">
                    <p className="text-start w-[300px]  text-2xl uppercase">{at}</p>
                    <ProgressBar progress={percentage} />
                    <p className="text-sm">{percentage}%</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

    
    
    

