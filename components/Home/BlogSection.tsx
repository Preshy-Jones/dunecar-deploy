import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../../public/assets/article-image-1.svg";
import image2 from "../../public/assets/article-image-2.svg";
import image3 from "../../public/assets/article-image-3.svg";
import image4 from "../../public/assets/article-image-4.svg";

const BlogSection = () => {
  return (
    <div className="mt-14 flex justify-center font-roboto mb-20">
      <div className="w-[86.1111111%]">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-[2rem] mb-8">Articles on Cars</h1>
          <Link className="text-specialRed underline hidden sm:block" href="#">
            SEE MORE ARTICLES
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="mb-8 mr-6">
            <Image src={image4} alt="image1" />
            <div className="px-2">
              <h2 className="mt-2 sm:mb-8 font-light text-[18px] mb-3">
                Tempor erat non turpis dictum sapien faucibus{" "}
              </h2>
              <button className="bg-black text-white px-4 py-2 rounded-sm">
                Read Article
              </button>
            </div>
          </div>
          <div className="mb-8 mr-6">
            <Image src={image3} alt="image1" />
            <div className="px-2">
              <h2 className="mt-2 sm:mb-8 font-light text-[18px] mb-3">
                Tempor erat non turpis dictum sapien faucibus{" "}
              </h2>
              <button className="bg-black text-white px-4 py-2 rounded-sm">
                Read Article
              </button>
            </div>
          </div>

          <div className="mb-8 mr-6">
            <Image src={image2} alt="image1" />
            <div className="px-2">
              <h2 className="mt-2 sm:mb-8 font-light text-[18px] mb-3">
                Tempor erat non turpis dictum sapien faucibus{" "}
              </h2>
              <button className="bg-black text-white px-4 py-2 rounded-sm">
                Read Article
              </button>
            </div>
          </div>
          <div>
            <Image src={image1} alt="image1" />
            <div className="px-2">
              <h2 className="mt-2 sm:mb-8 font-light text-[18px] mb-3">
                Tempor erat non turpis dictum sapien faucibus{" "}
              </h2>
              <button className="bg-black text-white px-4 py-2 rounded-sm">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
