import { assets } from "@/assets";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-[radial-gradient(at_top_left,_#FA61661C_0%,_#FFFFFF_92%)]">
      <main className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-black">Big Dreams</h1>
            <h2 className="text-2xl font-medium text-orange-600">
              Your Journey Start Here!
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Ripples Tutorials, we believe in dreaming big and want the same
              for our students. Our mission is to help pupils excel, whether by
              achieving distinctions at GCSEs and A Level, or attaining the
              highest scores in the 11 Plus exams. We are committed to
              supporting every student in reaching their full academic potential
              and turning aspirations into reality. At Ripples Tutorials, we
              believe that if you can dream it, you can achieve it, so start
              your journey with us today.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-medium">
              LEARN MORE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Images Grid */}
          <div className="border border-gray-200 rounded-3xl p-4 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={assets.bigDream}
                  alt="Child with goggles looking at holographic display"
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  width={600}
                  height={300}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={assets.bigDream2}
                    alt="Student studying in library"
                    className="w-full h-[150px] object-cover transition-transform duration-300 group-hover:scale-105"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={assets.bigDream3}
                    alt="Student reading at home"
                    className="w-full h-[150px] object-cover transition-transform duration-300 group-hover:scale-105"
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
