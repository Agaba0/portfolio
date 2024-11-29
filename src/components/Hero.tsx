export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Sylvester</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Frontend Developer specializing in creating beautiful and functional web experiences
            </p>
            <div className="space-x-4">
              <a 
                href="#projects" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="block">
            <img 
              src="/syl.jpg" 
              alt="Sylvester AGABA"
              className="rounded-full w-80 h-80 object-cover mx-auto shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}