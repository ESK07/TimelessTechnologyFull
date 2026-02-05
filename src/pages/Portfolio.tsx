import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Bak Logistics',
      category: 'web',
      image: '/images/Bak.png',
      description: 'Modern e-commerce solution with advanced features',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://baklogistics.com/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'TSF',
      category: '',
      image: '/images/tsf.png',
      description: 'Tobacco Sales Floor',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      liveUrl: 'https://tsf.co.zw/',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'TSL Limited',
      category: 'ai',
      image: '/images/tsl.png',
      description: 'Advanced analytics dashboard powered by machine learning',
      technologies: ['Python', 'TensorFlow', 'React'],
      liveUrl: 'https://tsl.co.zw/',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Verify Engineering',
      category: 'cloud',
      image: '/images/varily.png',
      description: 'Scalable cloud infrastructure for enterprise applications',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      liveUrl: 'https://verify.co.zw/',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Willarch Aluminium And Glass',
      category: 'iot',
      image: '/images/willorch.png',
      description: 'Real-time IoT device monitoring and control system',
      technologies: ['Node.js', 'MQTT', 'InfluxDB'],
      liveUrl: 'https://willarch-website.vercel.app/',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Tag Rugby Trust',
      category: 'web',
      image: '/images/tag.png',
      description: 'Secure cryptocurrency wallet with multi-chain support',
      technologies: ['Web3.js', 'Solidity', 'React'],
      liveUrl: 'https://tagrugbytrust.co.uk/',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'Liquiteq',
      category: 'web',
      image: '/images/liq.png',
      description: 'Irrigation and Water engineering',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://liquiteq.co.zw/',
      githubUrl: '#'
    },
    {
      id: 8,
      title: 'Agricure',
      category: 'mobile',
      image: '/images/agrucure.png',
      description: 'Growing Farming Generation',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      liveUrl: 'https://agrucura.co.zw/',
      githubUrl: '#'
    },
    {
      id: 9,
      title: 'Gunhill Avenue',
      category: 'ai',
      image: '/images/gunhil.png',
      description: 'Guest House',
      technologies: ['Python', 'TensorFlow', 'React'],
      liveUrl: 'https://gunhullaveguesthouse.com/',
      githubUrl: '#'
    },
    {
      id: 10,
      title: 'MoHCC',
      category: 'cloud',
      image: '/images/mohcc.png',
      description: 'Scalable cloud infrastructure for enterprise applications',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      liveUrl: 'https://mohcc.gov.zw/',
      githubUrl: '#'
    },
    {
      id: 11,
      title: 'PDK',
      category: 'iot',
      image: '/images/pdk.png',
      description: 'Real-time IoT device monitoring and control system',
      technologies: ['Node.js', 'MQTT', 'InfluxDB'],
      liveUrl: 'https://tsf.co.zw/',
      githubUrl: '#'
    },
    {
      id: 12,
      title: 'Rubel International',
      category: 'web',
      image: '/images/rubel.png',
      description: 'Secure cryptocurrency wallet with multi-chain support',
      technologies: ['Web3.js', 'Solidity', 'React'],
      liveUrl: 'https://rubelinternational.com/',
      githubUrl: '#'
    },
 {
      id: 13,
      title: 'EEZTEL Communications',
      category: 'web',
      image: '/images/eeztel.png',
      description: 'Modern e-commerce solution with advanced features',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://eeztel.co.zw/',
      githubUrl: '#'
    },
    {
      id: 14,
      title: 'First Mutual Holdings',
      category: 'mobile',
      image: '/images/first mutual.png',
      description: 'Secure mobile banking application with biometric authentication',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      liveUrl: 'https://www.firstmutual.co.zw/',
      githubUrl: '#'
    },
    {
      id: 15,
      title: 'Mount MERU',
      category: 'ai',
      image: '/images/meru.png',
      description: 'Advanced analytics dashboard powered by machine learning',
      technologies: ['Python', 'TensorFlow', 'React'],
      liveUrl: 'https://www.mountmerugroup.com/',
      githubUrl: '#'
    },
    {
      id: 16,
      title: 'Grain Marketing Board',
      category: 'cloud',
      image: '/images/gmb.png',
      description: 'Scalable cloud infrastructure for enterprise applications',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      liveUrl: 'https://gmbdura.co.zw/',
      githubUrl: '#'
    },
    {
      id: 17,
      title: 'Manyame Rural District Council',
      category: 'iot',
      image: '/images/Manyame.png',
      description: 'Real-time IoT device monitoring and control system',
      technologies: ['Node.js', 'MQTT', 'InfluxDB'],
      liveUrl: 'https://manyamerdc.org.zw/',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'iot', name: 'IoT Systems' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-green-400">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover our innovative solutions that have transformed businesses across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="w-5 h-5 text-green-600 dark:text-green-400 mt-1" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-green-600 dark:bg-green-500 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/90 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's discuss how we can bring your vision to life with cutting-edge technology
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;