import { FaLinkedin } from "react-icons/fa";
import { AiOutlineDiscord, AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoGithub } from "react-icons/bi";
import Image from "next/image";

function Footer() {
  const iconsTab = [
    { icon: <FaLinkedin  /> },
    { icon: <AiOutlineDiscord /> },
    { icon: <AiOutlineWhatsApp /> },
    { icon: <BiLogoGithub /> },
    
  ];
  return (
    <>
      <footer className="bg-red-1000">
        <div className="container mx-auto  py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
    
                <Image
                  src="/Bash.svg.png"
                  alt=""
                  className="w-[18rem]"
                />
              
              <p className="text-[15px] font-medium text-[#646464] md:block">"Everything Has a Beginning and an End. Life is Just a Cycle of Starts and Stops."</p>
              <p className="text-[15px] font-medium text-[#646464] text-right mr-48 md:block">- Jet Black</p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#efefef] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#000000] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Linkmaster <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="/"
                >
                  Sebastian N.R.
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className=" text-purple-500 text-[22px] font-bold footer-main">Our Areas</p>

              

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Web Design
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                UI/UX Designer
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Web Development
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Software Development
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                IT Support
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative ">
              <p className=" text-purple-500 text-[22px] font-bold footer-main ">Working Hours</p>


              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;