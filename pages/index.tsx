import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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

export default function Home() {
  const [scroll, setScroll] = useState(0);
  const snapContainer = useRef(null);

  let showLeftButton = true;
  let showRightButton = true;
  if (scroll < 10) {
    showLeftButton = false;
  } else if (scroll > snapContainer.current.scrollWidth - 600) {
    showRightButton = false;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-3xl mx-auto">
        <Head>
          {/* Header Picture */}
          <div className="relative flex w-full h-80 bg-gradient-to-b from-[#C4C4C4] to-transparent"></div>
          <title>SPG - Suraj Prakaash Granth</title>
          <meta
            name="description"
            content="Hagiography of the ten Sikh Gurus, composed in Gurpratap Suraj Granth by Kavi Santokh Singh"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="text-3xl font-serif italic text-center">
            Suraj Prakaash Granth
          </h1>

          <p className="font-serif text-justify mt-4">
            A foundational source of inspiration in Sikhi are the sakhis
            (stories) of the Gurus and their Sikhs. However, where do these
            stories originate from? Who has written such accounts?{" "}
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-serif text-center my-4">All Books</h2>

            <div className="relative w-full">
              {showLeftButton && (
                <button
                  className="absolute p-4 rounded-full bg-black top-1/4 left-10 z-10 text-white"
                  onClick={() => {
                    const width =
                      document.querySelector(".chapter-slide").clientWidth;
                    document.querySelector("#snap-container").scrollLeft -=
                      width;
                  }}
                >
                  ←
                </button>
              )}

              {showRightButton && (
                <button
                  className="absolute p-4 rounded-full bg-black top-1/4 right-10 z-10 text-white"
                  onClick={() => {
                    const width =
                      document.querySelector(".chapter-slide").clientWidth;
                    document.querySelector("#snap-container").scrollLeft +=
                      width;
                  }}
                >
                  ➜
                </button>
              )}

              <div
                className="scroll-smooth relative w-full flex snap-x snap-mandatory overflow-x-auto pb-14"
                ref={snapContainer}
                id="snap-container"
                onScroll={(e) => setScroll(e.currentTarget.scrollLeft)}
              >
                {books.map((book, i) => {
                  return (
                    <div
                      className="chapter-slide snap-center shrink-0 w-96 h-[347px] mx-2.5"
                      key={i}
                    >
                      <div
                        className={`bg-gray-${i + 1}00 w-full h-[194px]`}
                      ></div>
                      <div className="text-center p-4">
                        <h6 className="font-serif my-2 text-xl">{book.name}</h6>
                        <p className="line-clamp-4">
                          {book.description ||
                            "This book is great. It's about one of the Gurus"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Link href="/all-books" passHref>
              <button
                type="submit"
                className="border-2 uppercase w-full sm:w-auto border-black shadow-sm px-16 py-2 my-5 hover:shadow-md transition-all"
              >
                See All Books
              </button>
            </Link>
          </section>

          <section className="my-8">
            <p className="font-serif text-justify mt-4">
              The historical text known as Sri Suraj Prakash Granth (or Sri
              Gurpratap Suraj Granth) is a fountain of inspiration, which in
              today’s date is read and contemplated amongst the diaspora.
              Written by Kavi Raaj Bhai Santokh Singh, Suraj Prakash Granth
              (SPG) serves as an important and influential work of literature.
              Filled with a rich history, the philosophy of the 10 Guru Sahibs
              can be explored through the numerous volumes of poetic beauty.
            </p>

            <p className="font-serif text-justify mt-4">
              The work is primarily written in Braj Bhasha, a western Hindi
              language in the times preceding the 19th century. SPG is
              structured in a way that it relates to the rays of the Sun itself;
              as a way of reflecting the Guru’s glory. SPG ranges to over 1600
              angs and consists of 51,820 verses written in the form of Dohras,
              Chhands and additional sophisticated literary devices. The
              literary work is broken down into 12 raas’ (months), 6 ruts
              (seasons) and 2 ayans (solstices) in resemblance to the rising and
              setting of the sun. It is currently available in the form of 14
              jildhs (volumes) that have been thoroughly administered by Bhai
              Vir Singh and include a detailed dive into the life of Kavi Ji.
            </p>

            <p className="font-serif text-justify mt-4">
              In an ever-evolving world, SPG remains an important central source
              of reference to the lives of the Gurus and is the most commonly
              used historical source for discourse amongst the Sikh diaspora.
              Among the 5 Takhts, discourse on Sri Suraj Prakash is done every
              day where a reader (Paathi) reads aloud lines from the text and
              discourse is done from the Katha vachak.
            </p>
          </section>

          <section className="my-8">
            <h2>The Great Poet</h2>
            <p className="font-serif text-justify mt-4">
              Kavi Raaj Bhai Santokh Singh has played an essential role in
              today’s Sikh world as one of the most renowned scholars of Sikh
              history and philosophy. Kavi Ji were from the village Noor Di
              Saraan in the district of Amritsar; born into the house of father
              Deva Singh and mother Raezadi Kaur. At an early age, Kavi Ji would
              be sent to obtain vidya under the tutelage of Giani Sant Singh,
              head Granthi of Sri Harmandir Sahib and a renowned Gurmat scholar.
              Through the duration of their vidya under Giani Sant Singh, Kavi
              Ji would learn Braj Bhasha, Brahmvidya and experience the divine;
              all of the foundational pieces that attributed to their creation
              (rachna) of such a wondrous Granth. Alongside Braj Bhasha, Kavi Ji
              would learn a multitude of languages such as Farsi, Sanskrit, and
              take part in religious discourse with acknowledged scholars of the
              Sikh and Hindu faith. Throughout their life, Kavi Ji have been
              described to be a devout Gursikh who would wake in the early hours
              of the day and dedicate their time to bhajan, leading on to
              writing literary works themselves.
            </p>

            <p className="font-serif text-justify mt-4">
              Kavi Ji spent time in various regions across Punjab teaching vidya
              and serving as an advisor to prominent Maharajas or a kathakaar to
              the Sangat. Among these travels, Kavi Ji wrote many sophisticated
              philosophical literary works including the Naam Kosh, Sri Guru
              Nanak Prakash, Garab Ganjani Teeka, Valmiki Ramayana and many
              others; a testament to the level of knowledge that they had
              amassed.
            </p>

            <p className="font-serif text-justify mt-4">
              In the latter part of their life, around 1892 Bikrami samat (~1835
              Common era), Kavi Ji would begin the wondrous composition of SPG
              with the help of Sikh scholarly works, support of Maharaja Udai
              Singh of Kental, and the Guru’s Shaheed Singhs themselves. Kavi Ji
              would consolidate many various historical accounts of the Guru
              Sahibs from references including:
              <ul className="list-item">
                <li className="list-item ">
                  Sikhan di Bhagat Mala by Amar Shaheed Bhai Mani Singh Bhagat
                </li>
                <li className="list-item ">
                  Ratnavali by Amar Shaheed Bhai Mani Singh Bachittar Natak by
                  Sri
                </li>
                <li className="list-item ">
                  Guru Gobind Singh Ji Maharaj Gurbilas Patshahi 10 by Kuir
                  Singh
                </li>
                <li className="list-item ">
                  Malwa Desh Ratan di Sakhi Pothi Sau Sakhi Accounts of the Guru
                </li>
                <li className="list-item ">
                  Sahiban by Bhai Ram Koer Ji (ancestor of Baba Buddha Ji)
                </li>
                <li className="list-item ">
                  Accounts by local Gursikhs and many more…
                </li>
              </ul>
            </p>
            <p className="font-serif text-justify mt-4">
              Shortly before their passing, Kavi Ji completed the Granth, an
              embodiment of their life’s efforts, and gave ownership to the Guru
              Panth for the rights of usage at Sri Harmandir Sahib.
            </p>
          </section>

          <section className="my-8">
            <h2>The Project</h2>
            <p className="font-serif text-justify mt-4">
              This project has been undertaken with the intention to bring Sri
              Suraj Prakash to the broader audience in a format that is
              digestible by today’s audience of readers that are well versed in
              the English language. In today’s digital world, the ability to
              hear and see the very same text being contemplated holds a large
              value and makes for an engaging experience. In the same manner,
              this application intends to develop an experience with the
              intention of making Kavi Ji’s relevant account of Sikh history
              accessible to the world. Please forgive us for any mistakes made
              within the process of digitizing such a piece of work and feel
              free to provide any comments to srisurajprakash@protonmail.com
            </p>
          </section>
        </main>

        <footer>
          <a
            href="https://spg.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            Powered by SPG
            <span className="flex ml-2">
              <Image
                src="https://shaheedi-spg.s3.amazonaws.com/StaticImages/SPGLogo_Comp.png"
                alt="SPG Logo"
                width={22}
                height={22}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
}
