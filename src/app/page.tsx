import sliderPic from "@images/f9a7d1b9-a926-40f6-bfaa-ca0caa044519.png";
import Image from "next/image";
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
              <div className="absolute inset-0 bg-linear-[125deg,rgba(0,201,80,0.9),rgba(5,223,114,0.5)] bg-opacity-50 flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
