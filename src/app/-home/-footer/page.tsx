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
    <footer className="bg-[#1C1C1E] text-white text-sm font-inter">
      <section className="w-full py-16 px-6 md:px-10 lg:px-24">
        <div className="max-w-[1320px] mx-auto space-y-4 mb-10">
          <div className="flex flex-wrap justify-between gap-2">
            <div className="w-full sm:w-[420px] space-y-6">
              <div className="flex items-center gap-2">
                <img
                  src="images/Logo.png"
                  alt="Travel Logo"
                  className="h-10 w-auto rounded-full"
                />
              </div>

              <p className="text-white/80 text-base leading-relaxed  font-[ubuntu]">
                We’re passionate travel experts dedicated to curating
                unforgettable journeys. With years of experience, we’ve
                perfected the art of crafting tailor-made itineraries that cater
                to every traveller’s dream.
              </p>

              <div className="flex flex-wrap gap-6 w-[296px]">
                {[
                  FaceBookIcon,
                  InstragramIcon,
                  LinkedinIcon,
                  PinterestIcon,
                  PinterestIcon,
                ].map((Icon, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg flex items-center justify-center"
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. About Company - 198px */}
            <div className="w-full sm:w-[198px]">
              <h4 className="font-semibold mb-6  font-[ubuntu]   leading-6">
                About Company
              </h4>
              <ul className="space-y-4 text-white/80  font-[ubuntu]">
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

            {/* 3. Support - 198px */}
            <div className="w-full sm:w-[198px]">
              <h4 className="font-semibold mb-6  font-[ubuntu] size-5 leading-6">
                Support
              </h4>
              <ul className="space-y-4 text-white/80  font-[ubuntu]">
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

            {/* 4. Newsletter - 420px */}
            <div className="w-full sm:w-[420px] space-y-6">
              <h4 className="font-bold text-lg mb-4  font-[ubuntu]">
                Newsletter
              </h4>
              <p
                className="
                       
                        font-['Ubuntu'] 
                        text-[16px] 
                        leading-[24px] 
                        opacity-75 
                        w-[420px] 
                        h-[48px]
  "
              >
                Receive latest news, update, and many other things every week.
              </p>

              <form className="flex items-center border p-1 border-white rounded-md bg-[#1B1D1F] w-full h-[]48px">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-[#1B1D1F] text-white text-sm placeholder-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#EC9105] p-1.5 rounded-md hover:opacity-90 h-[38px] w-[38px]"
                  aria-label="Subscribe"
                >
                  <SendIcon />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-white/10 my-5"></div>

        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm gap-2">
            <p className="text-center md:text-left  font-medium font-[ubuntu]">
              © Travel 2024. All Rights Reserved
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white  font-[ubuntu]">
                Terms of Use
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white  font-[ubuntu]">
                Privacy Policies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
