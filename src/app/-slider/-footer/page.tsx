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
    <footer className="bg-[#1C1C1E] text-white text-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-4 ">
        <div className="space-y-6 w-[400px] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <img
              src="images/Logo.png"
              alt="Travel Logo"
              className="h-10 w-auto rounded-full"
            />
          </div>

          <div className="max-w-[480px]">
            <p className="text-white/80 text-base font-medium leading-relaxed">
              We’re passionate travel experts dedicated to curating
              unforgettable journeys. With years of experience, we’ve perfected
              the art of crafting tailor-made itineraries that cater to every
              traveller’s dream.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg  items-center justify-center">
            <FaceBookIcon  />
          </div>

            <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg  items-center justify-center">
              <InstragramIcon />
            </div>
            <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg  items-center justify-center">
             
              <LinkedinIcon />
            </div>
             <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg  items-center justify-center">
              <PinterestIcon />
            </div>
            <div className="bg-[#FFFFFF1F] h-10 w-10 p-2 rounded-lg  items-center justify-center">
              <PinterestIcon />
            </div>
          </div>
        </div>

        {/* About Company */}
        <div className="pl-[169px]">
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
        <div className="pl-[70px]">
          <h4 className="font-semibold text-white mb-6">Support</h4>
          <ul className="space-y-4 text-white/80">
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
        <div>
          <h4 className="font-bold text-lg mb-4">Newsletter</h4>
          <p className="text-white/80 mb-4 leading-6">
            Receive latest news, update, and many other things every week.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your email address"
              className="w-full px-4 py-3 rounded-l-md bg-white text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#EC9105] p-3 rounded-r-md  transition"
              aria-label="Subscribe"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom Footer */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-white/80 text-sm">
        <p>Copyright © Travel 2024. All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="#">Terms of use</Link>
          <span>|</span>
          <Link href="#">Privacy Policies</Link>
        </div>
      </div>
    </footer>
  );
}
