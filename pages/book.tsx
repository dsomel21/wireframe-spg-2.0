import Image from "next/image";
import { useState } from "react";
import ChapterPreview from "../components/ChapterPreview";

function Book(props) {
  debugger;
  interface ChapterInfo {
    id: number;
    number: number;
    order_number: number;
    title_unicode: string;
    title_gs: string;
    title_transliteration_english: string;
    description_english: string;
    title_translation: string;
    artwork_url: string;
    setOpenPreview: Function;
    bookName: string;
  }
  const [openPreview, setOpenPreview] = useState(false);
  const [chapterInfo, setChapterInfo] = useState<ChapterInfo>(null);

  return (
    <>
      <ChapterPreview shouldOpen={openPreview} chapter={chapterInfo} />

      {/* Header Picture */}
      <div className="hidden relative md:flex w-full h-80 bg-gradient-to-b from-[#C4C4C4] to-transparent"></div>
      {/* Page */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl xl:max-w-5xl mx-auto flex flex-col md:max-w-4xl lg:flex-row lg:justify-between lg:space-x-3">
          <div className="lg:w-2/5 lg:h-full lg:flex lg:flex-col lg:justify-center">
            {/* Header Image */}
            <div className="flex flex-col items-center lg:flex-col-reverse">
              <div className="flex justify-center w-full">
                <div className="rounded-full h-60 w-60 bg-gray-300 relative lg:rounded-none lg:w-full lg:h-96">
                  <Image
                    src="https://i.ibb.co/LNvxVQW/Screen-Shot-2022-02-05-at-1-27-14-PM.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Nanak Prakash Book cover photo"
                    className="rounded-full lg:rounded-none"
                  />
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:mb-10 lg:space-y-3 text-justify">
                <h1 className="text-3xl font-serif italic">
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

            {/* Book Description */}
            <div className="my-10 w-full text-justify">
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
            {props.chapters.map((chapter, i) => {
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
                          ...chapter,
                          bookName: "Rut 6",
                          setOpenPreview,
                        });
                      }}
                    >
                      {chapter?.title_translation}
                    </p>
                    <p>
                      Kavi Santokh Singh, the master poet begins the invocation
                      for Nanak Prakaash.
                    </p>
                  </div>
                  <Image
                    src={chapter.artwork_url}
                    decoding="async"
                    height={123}
                    width={119}
                    objectFit="cover"
                    loading="lazy"
                    alt={`Artwork for chapter ${chapter.number}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:1469/api/v1/chamkaur");
  const resJson = await res.json();

  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  // console.log(resJson.chapters);
  // By returning { props: { chapters } }, the Blog component
  // will receive `chapters` as a prop at build time
  return {
    props: {
      chapters: resJson.chapters,
    },
  };
}

export default Book;
