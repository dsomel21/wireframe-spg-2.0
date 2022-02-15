/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
interface Props {
  shouldOpen: boolean;
  chapter: object;
}
export default function ChapterPreview({ shouldOpen, chapter }: Props) {
  const [open, setOpen] = useState(shouldOpen);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setOpen(false)}
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
                    {chapter.bookName}
                  </Dialog.Description>
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-bold text-gray-900 font-serif mt-1"
                  >
                    {chapter.name}
                  </Dialog.Title>
                  <div className="mt-2 space-y-2">
                    <div className="mx-auto flex items-center justify-center h-52 w-52 rounded-full bg-gray-300 my-5"></div>
                    <p className="text-md text-gray-800 text-justify">
                      The occasion of the first full moon night during the lunar
                      month of Kartik, marks a very auspicious occasion for not
                      only the 'Sikh' faith, but for all other faiths in this
                      world.
                    </p>
                    <p className="text-md text-gray-800 text-justify">
                      Today's date marks the 550th Anniversary of the
                      incarnation of Pūran Ŧam Avṯār; Saṯigurū Nanak Dev Ji, who
                      took birth upon this Earth, to guide us outside of the
                      dark age of 'Kali Yuga'. Sri Guru Nanak Dev Ji were the
                      physical embodiment of the divine light of the 'Gurū';
                      which unparalleled the knowledge of Ek Oaŉkār to the
                      people of this world. Although the truth has always
                      existed, exists now, and will continue to exist; Guru
                      Nanak Dev Ji acted as the messenger of this universal
                      truth, when the world had seemingly forgotten about
                      'Dharma'.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sticky bottom-0">
                {/* NOTE: DO NOT ACTUALLY DO THIS */}
                <Link href={chapter.link}>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full border-2 uppercase bg-white border-black shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-900 sm:text-sm"
                    onClick={() => setOpen(false)}
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
