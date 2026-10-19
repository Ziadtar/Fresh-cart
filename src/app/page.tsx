import sliderPic from "@images/f9a7d1b9-a926-40f6-bfaa-ca0caa044519.png";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="relative w-full h-100 md:h-125">
        <div className="swiper-wrapper w-full h-full">
          <div className="swiper-slide w-full h-full">
            <div className="w-full h-full relative">
              <Image
                src={sliderPic}
                alt="Slider 1"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-[125deg,rgba(0,201,80,0.9),rgba(5,223,114,0.5)] flex items-center justify-start px-4 md:px-16 lg:px-32">
                <div className="container text-white gap-4">
                  <h2 className="text-[30px] font-bold leading-9 max-w-[384px]">
                    Fresh Products Delivered to your Door
                  </h2>
                  <p className="font-medium text-4 leading-6">
                    Get 20% off your first order
                  </p>
                  <Link
                    href="#"
                    className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                    Shop Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-block text-white bg-transparent border-2 border-white px-6 py-3 rounded-sm font-semibold hover:scale-105 transition">
                    View Deals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
