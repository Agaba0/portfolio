export default function About() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'CSS', level: 90 },
    { name: 'HTML', level: 95 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate frontend developer based in Abuja, Asokoro. With expertise in JavaScript, React, CSS, and HTML,
              I create engaging and responsive web applications that deliver exceptional user experiences.
            </p>
            <p className="text-gray-600">
              My journey in web development has led me to contribute to various successful projects,
              including work with Wootlab, Zeeks Group, and CardPallet.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}