/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

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
interface Props {
  shouldOpen: boolean;
  chapter: ChapterInfo;
}
export default function ChapterPreview({ shouldOpen, chapter }: Props) {
  return (
    <Transition.Root show={shouldOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => {
          chapter.setOpenPreview(false);
        }}
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
            <div className="inline-block align-bottom bg-white rounded-t-lg mx-2 px-4 pt-5 h-[612px] pb-4 text-left overflow-hidden shadow-xl transform transition-all fixed bottom-0 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 sm:static sm:rounded-lg lg:max-w-xl overflow-y-auto">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Description className="text-md font-serif text-gray-500">
                    {chapter?.bookName}
                  </Dialog.Description>
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-bold text-gray-900 font-serif mt-1"
                  >
                    {chapter?.title_translation}
                  </Dialog.Title>
                  <div className="mt-2 space-y-2">
                    <div className="mx-auto flex items-center justify-center h-52 w-52 rounded-full bg-gray-300 my-5">
                      <Image
                        height={208}
                        width={208}
                        objectFit="cover"
                        src={chapter?.artwork_url}
                        alt={`Artwork for chapter ${chapter?.number}`}
                        className="rounded-full"
                      />
                    </div>

                    <div className="space-y-3 text-justify">
                      {chapter?.description_english
                        .split("\n")
                        .map((sentence, i) => (
                          <p key={i} className="text-gray-800">
                            {sentence}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sticky bottom-0">
                {/* NOTE: DO NOT ACTUALLY DO THIS */}
                <Link href="/chapter" passHref>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full border-2 uppercase bg-white border-black shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-900 sm:text-sm"
                    onClick={() => chapter?.setOpenPreview(false)}
                  >
                    Read
                  </button>
                </Link>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
