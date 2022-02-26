import content from "../chapterOneContent";
import {
  InformationCircleIcon,
  ArrowLeftIcon,
  NewspaperIcon,
  CogIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import RealtedChaptersPreview from "./components/RelatedChaptersPreview";
import { useState } from "react";

function Chapter() {
  const [openPreview, setOpenPreview] = useState(false);
  return (
    <>
      <div className="fixed top-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Menu Bar */}
            <div className="flex py-3 bg-white font-serif text-lg justify-between">
              <Link href="all-books">All Books</Link>
              <h2 className="font-semibold italic">Suraj Prakaash Granth</h2>
            </div>
          </div>
        </div>
        {/* Progress Bar - Content */}
        <div className="w-full bg-gray-200">
          <div className="h-3 w-4/5 bg-slate-800"></div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex my-10 items-center">
            <ArrowLeftIcon className="h-5 w-5 cursor-pointer" />
            <Link href="/book">
              <a className="ml-2">Nanak Prakaash (Vol. 1)</a>
            </Link>
          </div>
          {/* Headers */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <h1 className="text-3xl font-serif text-zinc-900 italic font-medium">
                Manglacharan
              </h1>
              <InformationCircleIcon className="h-5 w-5 ml-2 text-gray-500" />
            </div>
            <h3 className="text-gray-900 center text-2xl font-bold mt-2">
              Chapter {content.chapter.number}
            </h3>
          </div>

          {/* SPG Content */}
          <div className="flex flex-col mt-8">
            {content.chhands.map((chhand) => {
              return (
                <div className="mt-3" key={chhand.id}>
                  <p className="text-xl font-semibold">
                    {chhand.chhand_name_english}
                  </p>
                  {chhand.pauris.map((pauri) => {
                    let i = 0;
                    return (
                      // Pauri
                      <div className="text-gray-700 my-2" key={pauri.id}>
                        {pauri.tuks.map((tuk) => {
                          i++;
                          return (
                            <div className="text-lg sm:text-xl" key={tuk.id}>
                              <p className="leading-8">
                                {tuk.content_unicode}{" "}
                                {i === pauri.tuks.length && (
                                  <span className="text-gray-900">
                                    {pauri.signature_unicode}
                                  </span>
                                )}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom Thing */}
      <div className="fixed bottom-0 w-full bg-white shadow-inner border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Menu Bar */}
            <div className="flex py-3 font-serif text-lg justify-around">
              <button
                className="cursor-pointer flex flex-col items-center"
                onClick={() => setOpenPreview(true)}
              >
                <NewspaperIcon className="h-8 w-8 cursor-pointer" />
                <p className="font-sans text-xs">Chapters</p>
              </button>
              <button className="cursor-pointer flex flex-col items-center">
                <CogIcon className="h-8 w-8 cursor-pointer" />
                <p className="font-sans text-xs">Settings</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <RealtedChaptersPreview
        shouldOpen={openPreview}
        setShouldOpen={setOpenPreview}
      />
    </>
  );
}

export default Chapter;
