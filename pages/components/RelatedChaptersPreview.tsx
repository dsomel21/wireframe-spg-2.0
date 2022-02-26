/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/solid";
interface Props {
  shouldOpen: boolean;
  setShouldOpen: Function;
}

const nearChapters = [
  { number: 1, name: "Manglacharan" },
  { number: 2, name: "Bishan Singh’s advances towards the land of Kaavroo" },
  { number: 3, name: "The King meets with Guru Ji" },
  { number: 4, name: "From Dhaka: Bulaaki Das and his mother" },
  { number: 5, name: "Bhai Natha of Dhaka" },
  { number: 6, name: "Saving the King’s army from drowing" },
  { number: 7, name: "Protecting the King from more predicaments" },
  { number: 8, name: "War preparations against Assam's King" },
  {
    number: 9,
    name: "Devi Ji’s guidance towards the King of Assaam to seek Guru Ji’s sanctuary",
  },
  { number: 10, name: " The King of Assaam undertaking Guru Ji’s refuge" },
  { number: 11, name: " Prophecizing King Raam’s (father of Rattan Rae) son" },
  { number: 12, name: " The coming of the 10th Sovereign" },
  {
    number: 13,
    name: " Aspirations and preparations for the coming",
  },
  { number: 14, name: " Bheekan Shah of Kuhrraam", current: true },
  { number: 15, name: " Bheekan Shah" },
  { number: 16, name: " The devotion of Bheekan Shah" },
  { number: 17, name: " Miracles of the child" },
  {
    number: 18,
    name: "Continued Manglacharan. Pilot of the documents. Meeting of Bhai Bala and Guru Anagad Dev Ji",
  },
];

export default function RealtedChaptersPreview({
  shouldOpen,
  setShouldOpen,
}: Props) {
  return (
    <Transition.Root show={shouldOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setShouldOpen(false)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-t-lg mx-2 px-4 pt-5 h-2/3 md:h-[612px] pb-4 text-left overflow-hidden shadow-xl transform transition-all fixed bottom-0 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 sm:static sm:rounded-lg lg:max-w-xl overflow-y-auto">
              <div>
                {/* Back Button */}
                <div className="flex items-center">
                  <ArrowLeftIcon className="h-5 w-5 cursor-pointer" />
                  <Link href="/all-books">
                    <a className="ml-2">All Books</a>
                  </Link>
                </div>

                <div className="mt-5 sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-xl leading-6 text-gray-900 font-serif mt-1"
                  >
                    All Chapters
                  </Dialog.Title>
                  <Dialog.Description className="text-md font-serif text-gray-500">
                    Nanak Prakaash (Vol. 1)
                  </Dialog.Description>

                  <div className="mt-2 space-y-2">
                    {nearChapters.map((chapter) => {
                      return (
                        <button
                          className={`flex justify-between w-full text-left items-center h-14 border-b-2 border-black ${
                            chapter.current && "font-semibold"
                          }`}
                          key={chapter.number}
                          autoFocus={chapter.current}
                        >
                          <div className="flex items-center w-5/6">
                            <span className="mr-4 text-xs">
                              {chapter.number}
                            </span>
                            <p className="m max-w flex items-center text-lg font-serif line-clamp-2">
                              {chapter.name}
                            </p>
                          </div>
                          {chapter.number <= 4 && (
                            <div className="rounded-full border-4 border-black h-6 w-6"></div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 sticky bottom-0">
                {/* NOTE: DO NOT ACTUALLY DO THIS */}
                <button
                  type="button"
                  className="inline-flex justify-center w-full border-2 uppercase bg-white border-black shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-900 sm:text-sm"
                  onClick={() => setShouldOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
