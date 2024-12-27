import Logo from "./Logo";


export default function HeroSection() {
    return (
      <div
        className="relative h-full py-10"
        style={{
        backgroundImage:`url('../src/assets/Anusha.JPG')`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:"top",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
        }}
      >
      <div className="bg-black/50 w-full absolute inset-0" />
      <section
        id="home"
        className="flex lg:mx-[15vw] pt-24 pb-20"
      >
        <div className="relative z-10 text-white">
          <h1 className="tracking-[.10em] text-7xl font-bold uppercase">
            I<span className="text-green-500">'</span>m <br />
            <span className="text-7xl">Anusha</span>
            <br /> Kadira
            <span className="text-green-500">.</span>
          </h1>
          <p className="tracking-[.10em] mt-10 text-3xl font-semibold">
            Ai and Datascience Intern
          </p>
        </div>
      </section>
      <div
          id="description"
          className="px-16 lg:mx-[15vw] relative z-10 pt-5 pb-5 bg-red-950/20 border-2 border-black shadow-2xl"
        >  
      <div className="logo grid place-items-center text-white-3xl mb-10">
            <Logo />
        </div>
          <p className="text-white text-2xl text-justify">
          "As an Data Science and AI Intern I specialise in statistical analysis, machine learning, and programming. Proficient in Python, data visualization, and building predictive models. Experienced in applying AI techniques to solve real-world challenges, driven by a passion for uncovering actionable insights and delivering innovative solutions.As a bioinformatics student involves a combination of academic, technical, and research-oriented activities aimed at building a strong foundation in the field.I am committed to enhancing automation capabilities through machine learning, natural language processing, and computer vision. With a concise blend of technical prowess and adaptability, I am well-positioned to contribute dynamic value to any organization seeking a skilled professional at the intersection of Biology and emerging technologies"
          </p>
          <div className="grid place-items-center text-white"> <a 
            href="https://drive.google.com/file/d/1AAjTd7V6kxy2tBu2lE82RJevjaU0v-G5/view?usp=drive_link"
            className="text-white border mt-[50px] pt-3 pb-3 pl-7 pr-7 border-[#00D646] hover:bg-[#00D646]"
        >
            DOWNLOAD RESUME
          </a></div>
        </div>
      </div>
  );
}


      
    
    
    

      

