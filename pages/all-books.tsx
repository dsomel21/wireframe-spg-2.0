function AllBooks() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto">
          {/* Text */}
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-serif text-zinc-900 italic font-medium">
              All Books
            </h1>
            <p className="text-gray-700 mt-10">
              We're building an evergrowing list of translated text...
            </p>
          </div>
        </div>
      </div>
      <div className="snap-x snap-mandatory overflow-scroll w-96 mx-auto">
        <div className="snap-center w-80 h-96 bg-slate-100"></div>
        <div className="snap-center w-80 h-96 bg-slate-200"></div>
        <div className="snap-center w-80 h-96 bg-slate-300"></div>
        <div className="snap-center w-80 h-96 bg-slate-400"></div>
        <div className="snap-center w-80 h-96 bg-slate-500"></div>
      </div>
    </>
  );
}

export default AllBooks;
