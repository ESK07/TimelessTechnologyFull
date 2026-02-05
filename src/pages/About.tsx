import { Users, Target, Eye, Award, ArrowRight, Wifi, Satellite, Radio } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-12 w-12 text-green-500" />,
      title: 'Innovation',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver groundbreaking solutions.'
    },
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.'
    },
    {
      icon: <Award className="h-12 w-12 text-green-500" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.'
    },
    {
      icon: <Eye className="h-12 w-12 text-green-500" />,
      title: 'Transparency',
      description: 'We believe in clear communication and honest relationships with our clients.'
    }
  ];

  const technologies = [
    {
      icon: <Wifi className="h-10 w-10 text-green-500" />,
      title: 'Fibre Optic Cable',
      description:
        'Fibre optic technology transmits data using light pulses along strands of glass or plastic. It delivers high bandwidth, electromagnetic immunity, and low signal loss—ideal for high-speed applications requiring low latency and reliability.'
    },
    {
      icon: <Radio className="h-10 w-10 text-green-500" />,
      title: 'Microwave',
      description:
        'Microwave systems use high-frequency radio to transmit data through line-of-sight links. This technology supports fast data, voice, and video transmission—ideal for remote areas with significant commercial activity.'
    },
    {
      icon: <Satellite className="h-10 w-10 text-green-500" />,
      title: 'Satelite',
      description:
        'Satelite (Very Small Aperture Terminal) is a satellite-based data transmission system, perfect for remote locations. It enables two-way data, voice, and video communication where terrestrial connections are unavailable.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            TIMELESS TECHNOLOGY: YOUR SOLUTIONS PARTNER
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Providing Zimbabwe and Africa with innovative Internet, ICT, and digital transformation solutions that stand the test of time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">About Timeless Technology</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Intramech Enterprises Private Limited T/A Timeless Technology (TT) is an Internet Service Provider offering comprehensive and fully-fledged ICT services, among them Internet and data services.
                  The company is duly registered under the Companies Act (Chapter 24:03) of Zimbabwe.
                </p>
                <p>
                  Following the promulgation of Statutory Instrument 12 of 2021—which mandated Internet Service Providers to be licensed by the Postal & Telecommunications Regulatory Authority of Zimbabwe (POTRAZ)—Timeless Technology was duly licensed in August 2022 with Licence Number <strong>ISPN202205001</strong>.
                </p>
                <p>
                  Leveraging the diverse expertise of its human capital, Timeless Technology provides one-stop bespoke digital solutions for businesses and organizations of all sizes. 
                  Our goal is to deliver optimum, customized ICT services tailored to specific client needs.
                </p>
                <p>
                  As a digital company, we continually evolve and adapt with technology. Our skilled and experienced personnel drive this evolution, ensuring that our clients benefit from the most advanced and reliable digital services.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team working"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="pt-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Technologies We Use
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              We pride ourselves on providing the latest and most advanced technologies to ensure the best connectivity and digital experience possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-green-50 dark:bg-gray-800 border border-green-200 dark:border-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:bg-green-100 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">{tech.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {tech.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 border border-green-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
              <Target className="h-16 w-16 text-green-500 dark:text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower businesses across Africa with innovative technology solutions that drive growth, 
                efficiency, and digital transformation while maintaining the highest standards of quality and security.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-green-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
              <Eye className="h-16 w-16 text-emerald-500 dark:text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become the leading technology partner in Zimbabwe and beyond, recognized for our innovation, 
                reliability, and commitment to client success in the rapidly evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-green-50 dark:bg-gray-800 border border-green-200 dark:border-gray-700 rounded-xl p-8 text-center hover:bg-green-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Ready to take your business to the next level? We're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/services"
              className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
