import Logo from "./Logo";

const navlinks = [
    { label:"", link:"#"},
    { label: "home", link: "#home"},
    { label: "Professional-skills", link: "#Professional-skills"},
    { label: "experience", link: "#experience"},
    { label: "contact", link:"#contact"},
  ];
  export default function Navbar()  {
    return(
      <nav>
        <ul className="flex bg-[#333B50] p-6 items-center justify-center">
          <li className="pr-24">
            <a href="#home" className="text-3xl text-gray-400 hover:text-white">
              <Logo />
            </a>
          </li>
          {navlinks.map(({ label, link }, key) => {
            return (
              <li key={key} className="pr-10">
                  <a
                    href={link}
                    className="text-[#9e9e9e] transition-colors ease-in-out duration-500 hover:text-white uppercase"
                  >
                    {label}
                  </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  } 
  