
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactSection() {
    return <div
    className="relative flex items-center justify-center h-full py-10 bg-cover bg-center"
    style={{
          backgroundImage: `url('../src/assets/Contact.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition:  "top",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
    >
       <div className="bg-black/50 w-full h-full absolute inset-0" />
       <div className="relative z-10 bg-slate-700 py-32 px-[5%]">
         <div className=" flex justify-between gap-10 text-white pb-16">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-semibold">Contact</h1>
                <p className="mt-5 text-xl font-normal">
                    If you have any questions,please
                    <br />feel free to drop me a line.
                    <br />
                    I'll get back to you as soon as I can. <br />
                    That's a promise!!
                </p>
                <p className="mt-5 text-xl font-normal">
                    kanusha1207@gmail.com <br />
                    <span className="font-normal">Work Tel:</span> +44 7767973627/+919618234381
                </p>
              </div>
              <form className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <input className="py-3 px-3" type="text" placeholder="Name" />
                    <input className="py-3 px-3" type="email" placeholder="Email" />
                </div>
                <input className="py-3 px-3" type="number" placeholder="phone" />
                <textarea
                   name="message"
                   id="message"
                   rows={3}
                   placeholder="message"
                   className="px-3 py-3"
                ></textarea>
                 <button className="bg-green-500 text-center px-3 py-3">Send</button>
                </form>
              </div>
              <ul className="flex justify-center gap-3">...
            <li>
                <a href="https://www.instagram.com/kadira_Anusha">
                  <FaInstagram size={30} color="white" />
                </a>
            </li>
            <li>
                <a href= "https://www.linkedin.com/in/anusha-kadira-aba906286">
                   <FaLinkedin size={30} color="white" />
                </a>
            </li>
         </ul>
       </div>
    </div>
}