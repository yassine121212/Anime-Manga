import Image from "next/image";
import React from "react";
import { MenuData } from "../lib/fetchMenuData";
const Menu = () => {
  return (
    <div className="flex justify-between">
      <div className="bg-red-700 w-1/3 h-screen md:block hidden"></div>
      <div className="flex-1 flex flex-col ">
        <div className="px-2 pb-6  relative  ">
          {MenuData.data[0].relationships.map(
            (rele) => (
              <div className="">
                <div className="group overflow-hidden cursor-pointer rounded-2xl ">
                  {rele.type === "cover_art" && (
                    <img
                      src={`https://uploads.mangadex.org/covers/${MenuData.data[0].id}/${rele.attributes.fileName}`}
                      className=" object-cover h-[14cm] w-full rounded-2xl  group-hover:scale-110 transition-transform duration-200 ease-in-out"
                    />
                  )}
                </div>
              </div>
            )
          )}
          <div className=" absolute  flex flex-col top-0 h-[97%] w-[98.5%]  backdrop-blur-md   group-hover:inline transition-transform duration-400 ease-in-out">
            <h3 class="text-4xl p-24 text-white  font-bold blur-none   border-t-2 border-violet-300  w-full">
              {
                MenuData.data[0].attributes.title
                  .en
              }
            </h3>
            { MenuData.data[0].relationships.map(
              (rele) =>
                rele.type === "author" && (
                  <p className="text-white px-1 text-sm">
                    By {rele.attributes.name}
                  </p>
                )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#330054]">
          {MenuData.data.map((item) => (
            <div className="flex justify-center">
              {item.relationships.map((rele) => (
                <div className="group relative   cursor-pointer rounded-2xl overflow-hidden  ">
                  {rele.type === "cover_art" && (
                    <Image
                      src={`https://uploads.mangadex.org/covers/${item.id}/${rele.attributes.fileName}`}
                      width="250"
                      height="250"
                      layout="cover"
                      className="rounded-2xl overflow-hidden  group-hover:scale-110 transition-transform duration-200 ease-in-out"
                    />
                  )}

                  <div className="hidden absolute text-center -bottom-4 h-1/2   w-full backdrop-blur-md   group-hover:inline transition-transform duration-400 ease-in-out">
                    <h3 class="text-xl px-1 text-white  font-bold blur-none   border-t-2 border-violet-300  w-full">
                      {item.attributes.title.en}
                    </h3>
                    {item.relationships.map(
                      (rele) =>
                        rele.type ===
                          "author" && (
                          <p className="text-white px-1 text-sm">
                            By{" "}
                            {rele.attributes.name}
                          </p>
                        )
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
