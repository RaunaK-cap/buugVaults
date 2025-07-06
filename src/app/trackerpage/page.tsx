"use client";
import React from "react";
import { GrStorage } from "react-icons/gr";
import { Badge } from "@/components/ui/badge";
import { FaFireAlt } from "react-icons/fa";
import { Input  } from "@/components/ui/input";
import Link from "next/link";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiSaveUp2 } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-black absolute">
      <main className="">
        <div className="bg-black w-full mt-1 flex gap-5 justify-between items-center">
          <div className="flex ml-6 text-white items-center gap-2">
            {<GrStorage size={20}  />}
            <Link href={"/"} className="text-md font-semibold ">
              
              BugVaults
            </Link>
          </div>
          <div className="text-white">
            <Badge className="text-sm rounded-lg  px-10 bg-gradient-to-r from-emerald-300 to-yellow-600 text-black font-medium flex gap-4">
              {<FaFireAlt />}
              Track your Errors & Learn it
            </Badge>
          </div>
          <div className="text-gray-900  flex items-center gap-4 pl-4 pr-4">
            <button className="p-1 bg-neutral-800 rounded-lg px-2 text-sm">
            
              Dark
            </button>
            <button className="p-1 bg-black text-white border border-gray-800 px-2 rounded-lg hover:cursor-pointer hover:bg-yellow-600 text-sm">
              
              Log out
            </button>
          </div>

        </div>
        <div className="flex gap-4 p-2 text-white">
          <div className=" min-h-[93vh] w-[50rem]  bg-gray-200/10 border border-gray-600  rounded-lg">
            <div className=" border-b space-y-2 border-gray-800">
              <Badge className=" mx-45 mt-1 mb-1 px-5 text-xs rounded-md bg-gray-300/10 text-white transition-all duration-300 group cursor-default  ">
                {
                  <AiOutlineThunderbolt
                    size={10}
                    className="text-yellow-500 flex items-center justify-center"
                  />
                }
                Errors
              </Badge>
            </div>
            <div className="m-2">
              <div
               className="bg-red-800/10 rounded-lg text-xs p-3 overflow-hidden overflow-y-scroll h-[80vh]"
               style={{ scrollbarWidth:"none"}}
              >
                <div>
                  <Input placeholder="Title" type="text"  className="border border-gray-800"/>
                  <textarea
                    placeholder="Code Snippet"
                    className="w-full p-2 mt-5 h-32 rounded border border-gray-700"
                  />
                  <div className="space-y-2 flex flex-col gap-2">
                    <label className="block text-gray-200 text-lg">
                      Description
                    </label>
                    <Input
                      type="text"
                      placeholder="Error you've got"
                      className="w-full text-xs outline-none p-3 border border-gray-800 rounded-lg "
                    />
                    <h2 className="text-sm"> How did you resolve ? </h2>
                    <textarea
                      placeholder="Describe your own"
                      className="w-full h-25 p-3 border border-gray-800 rounded-lg"
                    />
                  </div>
                  <div className="mt-5">
                    <textarea
                      placeholder="Links that you took help from.."
                      className="w-full flex border  border-gray-800 h-25 gap-5 p-3 rounded-lg"
                    />
                  </div>
              </div>                
              </div>
              <div className="mt-4">
                  <button className="w-full flex justify-center items-center gap-2 bg-neutral-100  transition  duration-300  hover:-translate-y-1 hover:text-white hover:bg-yellow-500 text-black py-1 rounded-lg hover:cursor-pointer">
                    Save {<CiSaveUp2 size={20} className=" animate-bounce" />}

                   
                  </button>
                </div>
            </div>
          </div>

          <div className="bg-gray-200/10  border border-gray-600 h-[93vh] rounded-lg flex-col w-full">
            <div className="flex justify-center items-center border-b sticky z-50 border-gray-700 pb-1">
              <Badge className="px-5 mt-1 text-xs rounded-md bg-gray-300/10 text-white transition-all duration-300 group cursor-default flex items-center justify-center ">
                {
                  <AiOutlineThunderbolt
                    size={10}
                    className="text-yellow-500 flex items-center justify-center"
                  />
                }
                Errors you have encountered
              </Badge>
            </div>

            <div
              className=" h-[86vh] overflow-hidden overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <div className=" ml-15   mt-2 h-[25rem] w-[50rem] flex gap-2">
                <Avatar className="text-xs">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div
                  className=" w-full  gap-2 p-4 pl-10  overflow-hidden overflow-y-scroll border border-gray-800 bg-ora-900 rounded-lg text-xs"
                  style={{ scrollbarWidth: "none" }}
                >
                  <h1 className="text-sm relative "> Title : Your Error </h1>
                  <textarea
                    placeholder="Code Snippet"
                    disabled
                    className="w-[40rem] flex border p-5  mt-1 outline-none border-gray-800 h-25 gap-5 ml-1 rounded-lg"
                  />
                  <h4 className="mt-1"> Error </h4>
                  <textarea
                    placeholder="Error you got "
                    className="w-[40rem] ml-1 p-1 mt-1 border border-gray-900 outline-none rounded-lg"
                  />

                  <h4> Solutions </h4>
                  <textarea
                    placeholder="How did you resolved "
                    className="w-[40rem] ml-2 p-1  mt-1 border h-20  border-gray-900  outline-none rounded-lg"
                  />
                  <h4> Links </h4>
                  <textarea
                    placeholder="links that you have followed to take help "
                    className="w-[40rem] ml-1 p-1 border mt-1 text-white outline-none border-gray-900 rounded-lg"
                  />
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
