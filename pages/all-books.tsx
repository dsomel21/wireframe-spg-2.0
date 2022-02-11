import Image from "next/image";
function AllBooks() {
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
            <div>
              <div className="bg-red-30 h-80 bg-gray-300 relative">
                <Image
                  src="https://i.ibb.co/LNvxVQW/Screen-Shot-2022-02-05-at-1-27-14-PM.png"
                  layout="fill"
                  objectFit="contain"
                  alt="Nanak Prakash Book cover photo"
                />
              </div>
              <div className="my-3 space-y-2">
                <h3 className="text-lg font-serif">Nanak Prakaash (Vol. 1)</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a arcu sed mauris feugiat luctus sit amet ut.
                </p>

                <button className="bg-white border-2 uppercase border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all hidden sm:flex">
                  Read
                </button>
              </div>
            </div>

            <div>
              <div className="bg-red-30 h-80 bg-gray-300"></div>
              <div className="my-3 space-y-2">
                <h3 className="text-lg font-serif">Nanak Prakaash (Vol. 2)</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a arcu sed mauris feugiat luctus sit amet ut.
                </p>

                <button className="bg-white border-2 uppercase border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all hidden sm:flex">
                  Read
                </button>
              </div>
            </div>

            <div>
              <div className="bg-red-30 h-80 bg-gray-300"></div>
              <div className="my-3 space-y-2">
                <h3 className="text-lg font-serif">Raas 1</h3>
                <p className="text-sm">
                  This is piece of text that may include more information! Since
                  it is also pretty long we maybe we can add some ellipses.
                </p>

                <button className="bg-white border-2 uppercase border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all hidden sm:flex">
                  Read
                </button>
              </div>
            </div>

            <div>
              <div className="bg-red-30 h-80 bg-gray-300 relative"></div>
              <div className="my-3 space-y-2">
                <h3 className="text-lg font-serif">Raas 2</h3>
                <p className="text-sm">
                  This is piece of text that may include more information! Since
                  it is also pretty long we maybe we can add some ellipses.
                </p>

                <button className="bg-white border-2 uppercase border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all hidden sm:flex">
                  Read
                </button>
              </div>
            </div>

            <div>
              <div className="bg-red-30 h-80 bg-gray-300 relative"></div>
              <div className="my-3 space-y-2">
                <h3 className="text-lg font-serif">Book Name</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a arcu sed mauris feugiat luctus sit amet ut.{" "}
                </p>

                <button className="bg-white border-2 uppercase border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all hidden sm:flex">
                  Read
                </button>
              </div>
            </div>

            <div>
              <div className="bg-red-30 h-80 bg-gray-300 relative"></div>
              <div className="my-3 space-y-2">
                <h3 className="text-lg font-serif">Book Name</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  a arcu sed mauris feugiat luctus sit amet ut.{" "}
                </p>

                <button className="bg-white border-2 uppercase border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all hidden sm:flex">
                  Read
                </button>
              </div>
            </div>
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
                  className="bg-white border-2 uppercase border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all hidden sm:flex"
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
