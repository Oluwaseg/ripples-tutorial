import React from "react";

const Motivation = () => {
  const quotes = [
    {
      id: 1,
      quote: "If you can't put your best into it, then don't do it at all.",
      author: "George S. Patton",
    },
    {
      id: 2,
      quote:
        "I don't measure a man's success by how high he climbs, but how high he bounces when he hits the bottom.",
      author: "Toluwalope Abraham",
    },
    {
      id: 3,
      quote:
        "Victory belongs to those that believe in it the most and believe in it the longest",
      author: "Randall Wallace",
    },
    {
      id: 4,
      quote:
        "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
    },
    {
      id: 5,
      quote:
        "Success is no accident, it is hard work, perseverance, learning, studying, sacrifice, and most of all love of what you are doing or learning to do.",
      author: "Pele",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#121a21]">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Our Motivational Quotes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container max-w-4xl">
          {/* Left column with 3 quotes */}
          <div className="flex flex-col gap-6">
            {quotes.slice(0, 3).map((quote) => (
              <div
                key={quote.id}
                className="bg-slate-700 border border-slate-600 rounded-2xl p-6 relative"
              >
                {/* Quotation mark icon */}
                <div className=" text-red-500 text-4xl font-bold">
                  "
                </div>
                <div className="">
                  <p className="text-white text-sm leading-relaxed mb-3">
                    {quote.quote}
                  </p>
                  <p className="text-red-500 font-medium">{quote.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column with 2 quotes */}
          <div className="flex flex-col gap-6">
            {quotes.slice(3, 5).map((quote) => (
              <div
                key={quote.id}
                className="bg-slate-700 border border-slate-600 rounded-2xl p-6 relative"
              >
                {/* Quotation mark icon */}
                <div className=" text-red-500 text-4xl font-bold">
                  "
                </div>
                <div className="">
                  <p className="text-white text-sm leading-relaxed mb-3">
                    {quote.quote}
                  </p>
                  <p className="text-red-500 font-medium">{quote.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
