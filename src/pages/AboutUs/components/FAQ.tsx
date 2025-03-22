import { useState } from "react";
import { faqs } from "../../../constants/faqs";
import AccordionCloseIcon from "../../../assets/icons/AccordionCloseIcon";
import AccordionOpenIcon from "../../../assets/icons/AccordionOpenIcon";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <section>
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>

      <ul>
        {faqs.map((q) => (
          <li
            key={q.id}
            className={`flex gap-5 transition-all duration-300 p-6 ${
              openIndex === q.id
                ? "rounded-xl shadow bg-[#EBF5F4] border-b-0"
                : "bg-white border-b-2 border-[#30968933]"
            }`}
          >
            <p className="text-3xl text-[#309689] font-semibold">{`${
              q.id < 10 && "0"
            }${q.id}`}</p>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3
                  onClick={() => handleClick(q.id)}
                  className="text-2xl font-semibold cursor-pointer transition-all duration-300"
                >
                  {q.question}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === q.id ? "max-h-[500px] mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{q.answer}</p>
                </div>
              </div>
              <button
                onClick={() => handleClick(q.id)}
                aria-label={openIndex === q.id ? "Collapse" : "Expand"}
              >
                {openIndex === q.id ? (
                  <AccordionCloseIcon />
                ) : (
                  <AccordionOpenIcon />
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
