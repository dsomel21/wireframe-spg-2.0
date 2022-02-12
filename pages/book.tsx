import Image from "next/image";
import { useState } from "react";
import ChapterPreview from "./components/ChapterPreview";

const chapters = [
  "Manglacharan",
  "Continued Manglacharan. Pilot of the documents. Meeting of Bhai Bala and Guru Anagad Dev Ji",
  "The Avtaar of the Supreme Guru Nanak Dev Ji",
  "The Gurus Avtaar and Their Blessed Name",
  "Guru Nanak Dev Ji's Childhood",
  "Gopaal Paandhe's Message",
];

function Book() {
  interface ChapterInfo {
    name: string;
    bookName: string;
    number: number;
    longDescription?: string;
    link: string;
  }
  const [openPreview, setOpenPreview] = useState(false);
  const [chapterInfo, setChapterInfo] = useState<ChapterInfo>(null);

  return (
    <>
      {openPreview && (
        <ChapterPreview shouldOpen={openPreview} chapter={chapterInfo} />
      )}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header Image */}
          <div className="flex justify-center">
            <div className="rounded-full h-60 w-60 bg-gray-300 relative">
              <Image
                src="https://i.ibb.co/LNvxVQW/Screen-Shot-2022-02-05-at-1-27-14-PM.png"
                layout="fill"
                objectFit="cover"
                alt="Nanak Prakash Book cover photo"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="my-10 flex w-full justify-center">
            <div className="space-y-3">
              <h1 className="z-20 text-2xl font-serif">
                Sri Nanak Prakash (Vol. 1)
              </h1>
              <p className="text-gray-800">
                Perhaps we can have a longer description here! Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Morbi a arcu sed mauris
                feugiat luctus sit amet ut est.
              </p>
            </div>
          </div>

          {/* Chapters */}
          {chapters.map((title, i) => {
            return (
              <div
                className="flex space-x-2 border-black border-b-2 py-4 items-center"
                key={i}
              >
                <div className="space-y-3">
                  <p
                    className="text-lg font-serif font-bold line-clamp-2 mr-5 cursor-pointer"
                    onClick={() => {
                      setOpenPreview(true);
                      setChapterInfo({
                        name: title,
                        link: "/chapter",
                        number: 1,
                        bookName: "Nanak Prakaash (Vol. 1)",
                      });
                    }}
                  >
                    {title}
                  </p>
                  <p>
                    Kavi Santokh Singh, the master poet begins the invocation
                    for Nanak Prakaash.
                  </p>
                </div>
                <div className="bg-gray-300 w-[119px] h-[123px] min-w-[119px]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Book;
