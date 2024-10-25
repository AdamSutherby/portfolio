export default function About() {
    return (
        <div>
            <h1 className="text-4xl font-mono text-center mt-40 text-white">I am Adam Sutherby,</h1>
        <div className="flex flex-row mx-auto max-w-[60%] mt-10 justify-center">
            <p className="w-25vw w-1/2 font-mono text-lg pr-1 pt-8 text-slate-400">
            a passionate software and web application developer dedicated to creating impactful digital solutions. With a strong foundation in coding and a creative problem-solving approach, I specialize in building intuitive and efficient applications tailored to meet user needs. Driven by my love for innovation and continuous learning, I thrive in collaborative environments where I can contribute fresh ideas and work closely with teams to deliver exceptional results. I am excited about the opportunity to apply my skills and contribute to meaningful projects. Let us connect and explore how we can work together to make a difference through technology! Currently looking for new opportunities.
            </p>
            <img
                src="/images/adam-sutherby.png"
                className="w-1/2 pl-1"
                alt="Adam Sutherby"
            />
        </div>
        </div>
    );
}