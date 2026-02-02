import Image from "next/image"
import { Plane } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left - Image */}
            <div className="w-full md:w-1/2 p-4 md:p-6">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/our-story.jpg"
                  alt="Our Story - Travel illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-2xl md:text-3xl font-semibold italic text-gray-900">At</span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-[#00d4aa]">Flyanza</span>
                <Plane className="w-6 h-6 md:w-7 md:h-7 text-[#008cff] rotate-45" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                We make your travel experience smoother and more affordable.
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our team, backed by years of expertise in the travel industry, is dedicated to revolutionizing
                the way people experience travel. We&apos;re not just here to help you book flights or trips; we&apos;re
                focused on creating a seamless, efficient, and user-friendly process that saves time and
                eliminates the unnecessary stress associated with traditional booking methods. By
                leveraging the latest technology and deep industry insights, we&apos;re cutting down on high
                costs and passing those savings on to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
