import Image from "next/image";
import Link from "next/link";
import BadgeNew from "./components/BadgeNew";
function AllBooks() {
  const books = [
    {
      name: "Nanak Prakaash (Vol. 1)",
      description:
        "Here is a short description of Nanak Prakaash. We will mention that this is the first half of the two part volume. Also mention that this book is on Guru Nanak. From their avtaar, childhood, early Guruship to the travels across the Eastern world.",
      img: "https://i.ibb.co/LNvxVQW/Screen-Shot-2022-02-05-at-1-27-14-PM.png",
    },
    { name: "Nanak Prakaash (Vol. 2)" },
    { name: "Raas 11" },
    {
      name: "Raas 12",
      hasNewBadge: true,
      img: "https://www.sikhnet.com/files/styles/stories-hero/public/stories/images/main/GTB-Magical-web-Thumbnail.jpg?itok=QJiHhDDA",
    },
    {
      name: "Rut 6",
      description:
        "The final Rut of all six. This concludes the prasangs of Guru Gobind Singh Ji's (physical) time on. This Rut will start from the siege of Anandpur Sahib (~1704) until Lorem ipsum dolor sit amet, consectetur adipiscing elit (~1708)",
    },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto">
          {/* Text */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-serif text-zinc-900 italic font-medium">
              All Books
            </h1>
            <p className="text-gray-700 mt-10 center">
              We&#39;re building an ever-growing list of text from{" "}
              <span className="italic text-gray-600">
                Suraj Prakaash Granth
              </span>
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {books.map((book, i) => {
              return (
                <Link href="/book" key={i}>
                  <div className="relative">
                    {book.hasNewBadge && (
                      <BadgeNew
                        key={i}
                        customClass="absolute z-10 right-0 top-0 m-2"
                      />
                    )}
                    <div className="bg-red-30 h-80 bg-gray-300 relative">
                      {book.img && (
                        <Image
                          src={book.img}
                          layout="fill"
                          objectFit="cover"
                          alt="Nanak Prakash Book cover photo"
                        />
                      )}
                    </div>
                    <div className="my-3 space-y-2">
                      <h3 className="text-lg font-serif">{book.name}</h3>
                      <p className="text-sm">
                        {book.description ||
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a arcu sed mauris feugiat luctus sit amet ut."}
                      </p>
                      {/* DO NOT actually do this... Just keep it like this for the purpose of the wireframe demo */}

                      {/* 
                      <button className="bg-white border-2 uppercase border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all hidden sm:flex">
                        Read
                      </button>
                      */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* More Books to be Added Soon */}
          <div className="flex justify-center align-center py-12">
            <div className="bg-gray-300 py-20 px-10 md:w-1/2">
              <p className="font-serif text-2xl text-center md:text-left">
                More Books to Be Added Soon
              </p>

              <div className="mt-5 text-lg">
                <p className="font-bold">Sign Up for Updates</p>
                <p>
                  We’ll let you know when new books and chapters have been added
                  to the site.
                </p>
              </div>

              <form action="#" className="mt-5 flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Enter an Email Address"
                  className="bg-gray-100 p-2"
                />
                <button
                  type="submit"
                  className="bg-white border-2 uppercase border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all hidden sm:flex sm:justify-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBooks;
