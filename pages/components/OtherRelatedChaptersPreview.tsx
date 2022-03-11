import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";

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

function OtherRelatedChaptersPreview({ shouldOpen, setShouldOpen }: Props) {
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
            className="inline-block sm:align-middle sm:h-screen"
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
            <div className="fixed inline-block align-bottom bg-white rounded-t-lg mx-2 px-4 pb-4 h-[612px] text-left overflow-hidden shadow-xl transform transition-all bottom-0 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 sm:pt-0 sm:static sm:rounded-lg lg:max-w-xl overflow-y-auto">
              <div className="sm:flex sm:items-center sm:sticky sm:top-0 bg-white sm:py-4 sm:shadow-[0_0_5px_10px_#FFF] sm:mb-2">
                {/* "X" CLOSE Icon */}
                <div className="block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setShouldOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* ExclamationIcon + Title */}
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    All Chapters
                  </Dialog.Title>
                </div>
              </div>
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
                        <span className="mr-4 text-xs">{chapter.number}</span>
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default OtherRelatedChaptersPreview;
