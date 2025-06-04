import { useState } from "react";
import image from "../assets/images/textimony.png";
import image1 from "../assets/images/textimony1.png";
import image2 from "../assets/images/textimony2.png";

const Testimony = () => {
  const [open, setOpen] = useState<number | null>(null);

  const opinions = [
    {
      id: 1,
      image: image,
      name: "Stanislas",
      pseudo: "M. Sourire",
      testimonial:
        "Share a testimonial that hits some of your benefits from one of your popular customers."
    },
    {
      id: 2,
      image: image1,
      name: "Bellla",
      pseudo: "Miss potcholi",
      testimonial:
        "Share a testimonial that hits some of your benefits from one of your popular customers."
    },
    {
      id: 3,
      image: image2,
      name: "Karib",
      pseudo: "M. Du Sud",
      testimonial:
        "Share a testimonial that hits some of your benefits from one of your popular customers."
    }
  ];

  const handleToggle = (id: number) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="space-y-6 mb-10">
        <h1 className="text-5xl font-semibold">Vibe avec eux !!!</h1>
        <p className="lg:w-6/12 text-xl font-semibold">
          Ils aiment l'expérience
        </p>
      </div>

      {/* Opinions */}
      <div className="flex justify-center">
        {opinions.map((opinion) => (
          <div
            key={opinion.id}
            onClick={() => handleToggle(opinion.id)}
            className={`${open === opinion.id ? "w-[50em]" : ""} cursor-pointer  transition-all duration-500 ease-in-out`}
          >
            <div
              className={`${
                open === opinion.id
                  ? "flex flex-col justify-between w-full h-full px-6 py-6 bg-orange-100 md:px-14 rounded-2xl md:py-14 dark:bg-gray-800"
                  : "h-96 bg-orange-300 rounded-2xl flex flex-col items-center md:py-14  py-7 "
              } transition-all duration-500 ease-in-out`}
            >
              {/* Avatar et nom */}
              <div
                className={`${
                  open === opinion.id
                    ? "flex items-center mb-8 space-x-3"
                    : "flex flex-col items-center  gap-y-7 "
                } transition-all duration-500 ease-in-out`}
              >
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <img
                    alt="Avatar"
                    src={opinion.image}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`${open === opinion.id ? "" : "rotate-90 w-28 p-2"} transition-all duration-500 ease-in-out`}>
                  <div className="text-lg font-medium text-gray-700">
                    {opinion.name}
                  </div>
                  <div className=   {`${open === opinion.id ? "text-orange-900" : "text-orange-500"}`} >{opinion.pseudo}</div>
                </div>
              </div>

              {/* Icône ou citation */}
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  open === opinion.id
                    ? "text-gray-400 dark:text-gray-600 fill-current"
                    : "hidden"
                } transition-all duration-500 ease-in-out`}
              >
                <path
                  d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                  fill="current"
                />
              </svg>

              {/* Témoignage */}
              <p
                className={`${
                  open === opinion.id
                    ? "text-2xl leading-normal text-gray-700 mt-4"
                    : "hidden"
                } transition-all duration-500 ease-in-out`}
              >
                {opinion.testimonial}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
