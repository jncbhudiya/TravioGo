import {
  FaceBookIcon,
  InstragramIcon,
  LinkedinIcon,
  PinterestIcon,
  SendIcon,
} from "@/app/icon/page";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      
      <footer className="bg-[#1C1C1E] text-white text-sm  font-inter ">
      <section className="w-full py-16 px-6 md:px-10 lg:px-24 ">
      <div className="max-w-[1320px] mx-auto  space-y-4 mb-10 ">
        <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 ">
          {/* Company Info */}

          <div className="space-y-6 max-w-full  lg:max-w-md">
            <div className="flex items-center gap-2">
              <img
                src="images/Logo.png"
                alt="Travel Logo"
                className="h-10 w-auto rounded-full"
              />
            </div>

            <div className="">
              <p className="text-white/80 text-base font-medium leading-relaxed  lg:w-[420px]">
                We’re passionate travel experts dedicated to curating
                unforgettable journeys. With years of experience, we’ve
                perfected the art of crafting tailor-made itineraries that cater
                to every traveller’s dream.
              </p>
            </div>

            <div className="flex gap-4 w-[296px] h-[40px] ">
              <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg flex items-center justify-center">
                <FaceBookIcon />
              </div>

              <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg flex items-center justify-center">
                <InstragramIcon />
              </div>
              <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg flex items-center justify-center">
                <LinkedinIcon />
              </div>
              <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg flex items-center justify-center">
                <PinterestIcon />
              </div>

              <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg flex items-center justify-center">
                <PinterestIcon />
              </div>
            </div>
          </div>

          {/* About Company */}
          <div className="pl-4  -md:pl-11 lg:pl-[145px]">
            <h4 className="font-semibold text-white mb-6 ">About Company</h4>
            <ul className="space-y-4 text-white/80">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Blogs</Link>
              </li>
              <li>
                <Link href="#">Site Map</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className=" pl-4  lg:pl-[70px]">
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-white/80 ">
              <li>
                <Link href="#">Get in touch</Link>
              </li>
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Feedback</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 max-w-full md:max-w-sm  lg:w-[420px]">
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4 leading-6">
              Receive latest news, update, and many other things every week.
            </p>
            <div className=" w-[420px]  h-[48px] max-w-md">
              <form className="flex items-center border border-white rounded-md bg-[#1B1D1F]">
                <input
                  type="email"
                  placeholder="Enter Your email address"
                  className="w-full px-4 py-3 bg-[#1B1D1F] text-white text-sm placeholder-white focus:outline-none"
                />
                <div className="pl-1 pr-1 pb-1 pt-1">
                  <button
                    type="submit"
                    className="bg-[#EC9105] p-3 flex items-center justify-center rounded-md hover:opacity-90"
                    aria-label="Subscribe"
                  >
                    <SendIcon />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="max-w-screen-xl mx-auto px-6 py-4  ml-[250px]  flex flex-col md:flex-row justify-between text-white/80 text-sm items-center">
          <p className="text-center md:text-left mb-2 md:mb-0">
            Copyright © Travel 2024. All Rights Reserved
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of use
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policies
            </Link>
          </div>
        </div>
        </div>
        </section>
      </footer>
      
    </>
  );
}
