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
      {/* Header Picture */}
      <div className="hidden relative md:flex w-full h-80 bg-gradient-to-b from-[#C4C4C4] to-transparent"></div>
      {/* Page */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col md:max-w-4xl lg:flex-row lg:justify-between lg:space-x-3">
          <div className="lg:w-2/5 lg:h-full lg:flex lg:flex-col lg:justify-center">
            {/* Header Image */}
            <div className="flex flex-col items-center lg:flex-col-reverse">
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
              <div className="mt-10 lg:mt-0 lg:mb-10 lg:space-y-3">
                <h1 className="text-3xl font-serif">
                  Sri Nanak Prakash (Vol. 1)
                </h1>
                <div className="hidden lg:block">
                  <p className="text-gray-800">
                    This is the <strong>short</strong> description. Perhaps we
                    can have a longer description below only available for full
                    screen! Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Morbi a arcu sed mauris feugiat luctus sit amet ut
                    est.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="my-10 w-full">
              <div className="mb-3">
                <p className="text-gray-800 lg:hidden">
                  This is the <strong>short</strong> description. Perhaps we can
                  have a longer description below only available for full
                  screen! Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi a arcu sed mauris feugiat luctus sit amet ut est.
                </p>
              </div>
              <div className="space-y-3 hidden md:block">
                <p className="text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a arcu sed mauris feugiat luctus sit amet ut est. Praesent
                  eros dolor, faucibus ac semper vel, sollicitudin ac ipsum.
                </p>
                <p className="text-gray-800">
                  Duis suscipit eu dui vitae ullamcorper. Aenean venenatis
                  fermentum ullamcorper. Sed quis enim tempus, vehicula dui
                  vitae, sollicitudin velit. Duis vel rutrum ante. Nunc quis dui
                  molestie, venenatis enim ac, consectetur quam.
                </p>
                <p className="text-gray-800">
                  Quisque faucibus auctor bibendum. Morbi pellentesque est eget
                  erat tincidunt, et faucibus nunc ultrices. Nulla congue arcu
                  et scelerisque iaculis. Quisque sit amet risus et risus
                  fringilla tristique. Maecenas efficitur, orci vel mollis
                  mollis, quam lectus volutpat lectus, in tristique turpis
                  lectus nec enim. Nulla pellentesque nulla orci, ac aliquam
                  erat interdum ut. Nunc aliquam dui eu dignissim luctus. Nam
                  vel lacus eget lectus tempor dictum. Nunc purus enim,
                  fringilla ut consectetur malesuada, finibus vel justo.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 lg:pl-8">
            <h2 className="font-serif text-2xl">Chapters</h2>
            {/* Chapters */}
            {chapters.map((title, i) => {
              return (
                <div
                  className="flex space-x-2 border-black border-b-2 py-4 items-center justify-between"
                  key={i}
                >
                  <div className="space-y-3 sm:w-2/3">
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
      </div>
    </>
  );
}

export default Book;
