"use clients"
import Link from "next/link";
import Image from "next/image";
import { HomeWhiteIcon } from "../assets/icon/page";

export default function NotFound() {
  return (
    <div className="min-h-screen flex  bg-[#FEF5E6]">
      <div className="w-full  text-center bg-white  shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#EC9105] to-[#FBBC05] py-8 px-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/Logo.png"
              alt="Travel Logo"
              width={160}
              height={60}
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <Image
              src="/images/page-not-found-2.png"
              alt="404 Error"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Oops! Lost in Travel?
          </h2>
          <p className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back to your journey.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EC9105] to-[#FBBC05] text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
          >
            <HomeWhiteIcon />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
