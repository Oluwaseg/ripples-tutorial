"use client";

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
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Our Motivational <span className="text-primary">Quotes</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Words of wisdom to inspire your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {quotes.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-5xl font-serif text-primary/10 leading-none select-none">
                "
              </div>

              <div className="relative space-y-4">
                {/* Quote text */}
                <p className="text-foreground text-sm md:text-base leading-relaxed min-h-[100px] text-balance">
                  {item.quote}
                </p>

                {/* Author */}
                <div className="pt-3 border-t border-border/50">
                  <p className="text-primary font-semibold text-sm">
                    — {item.author}
                  </p>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Motivation;
