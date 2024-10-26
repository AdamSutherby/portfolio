import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 pt-20 md:pt-16 pb-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-center md:text-left text-white mb-6 md:mb-0">
          I am Adam Sutherby,
        </h1>
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden">
          <Image
            src="/images/adam-sutherby.png"
            alt="Adam Sutherby"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-base md:text-lg text-slate-400 text-center md:text-left">
          A passionate software and web application developer dedicated to creating impactful digital solutions. With a strong foundation in coding and a creative problem-solving approach, I specialize in building intuitive and efficient applications tailored to meet user needs. Driven by my love for innovation and continuous learning, I thrive in collaborative environments where I can contribute fresh ideas and work closely with teams to deliver exceptional results. I am excited about the opportunity to apply my skills and contribute to meaningful projects. Let&apos;s connect and explore how we can work together to make a difference through technology! Currently looking for new opportunities.
        </p>
      </div>
    </div>
  )
}