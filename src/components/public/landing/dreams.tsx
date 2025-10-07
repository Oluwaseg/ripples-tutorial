import { assets } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Dreams() {
  return (
    <div className="bg-primary">
      <main className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6" data-aos='fade-right'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Big Dreams
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Your Journey Start Here!
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed">
              At Ripples Tutorials, we believe in dreaming big and want the same
              for our students. Our mission is to help pupils excel, whether by
              achieving distinctions at GCSEs and A Level, or attaining the
              highest scores in the 11 Plus exams. We are committed to
              supporting every student in reaching their full academic potential
              and turning aspirations into reality. At Ripples Tutorials, we
              believe that if you can dream it, you can achieve it, so start
              your journey with us today.
            </p>
            <Button
              className="group bg-accent hover:bg-accent/90 text-white
                px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4
                rounded-full
                text-sm sm:text-base md:text-lg font-semibold
                transition-all duration-300 ease-out hover:scale-105"
            >
              LEARN MORE
              <ArrowRight
                className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6
                  transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>

          {/* Right Images Grid */}
          <div className=" rounded-3xl p-3 md:p-4 bg-accent shadow-sm hover:shadow-lg transition-shadow duration-300" data-aos='fade-left'>
            <div className="space-y-3 md:space-y-4">
              <div className="rounded-2xl overflow-hidden group cursor-pointer" data-aos='fade-up'>
                <Image
                  src={assets.bigDream || "/placeholder.svg"}
                  alt="Child with goggles looking at holographic display"
                  className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  width={600}
                  height={300}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4" data-aos='flip-right'>
                <div className="rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={assets.bigDream2 || "/placeholder.svg"}
                    alt="Student studying in library"
                    className="w-full h-[100px] md:h-[120px] lg:h-[150px] object-cover transition-transform duration-300 group-hover:scale-105"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden group cursor-pointer" data-aos='flip-left'>
                  <Image
                    src={assets.bigDream3 || "/placeholder.svg"}
                    alt="Student reading at home"
                    className="w-full h-[100px] md:h-[120px] lg:h-[150px] object-cover transition-transform duration-300 group-hover:scale-105"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
