import { useState } from 'react';
import { MapPin, Menu, X, ArrowRight, Zap, Users, Code, Star } from 'lucide-react';

const AuroraEventPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500 selection:text-black">
      {/* NAVIGATION 
        Style: Minimal, Glassmorphism
      */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-amber-300 flex items-center justify-center">
                <span className="font-bold text-black text-lg">A</span>
              </div>
              <span className="font-bold text-xl tracking-tighter">AURORA<span className="text-orange-400">2025</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['Home', 'About', 'Timeline', 'Tracks', 'Sponsors'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-neutral-400 hover:text-orange-400 transition-colors">
                  {item}
                </a>
              ))}
              <button className="bg-orange-500 hover:bg-orange-400 text-black px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                Register Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Timeline', 'Tracks', 'Sponsors'].map((item) => (
                <a key={item} href="#" className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-orange-400">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION 
        Style: Big typography, glowing orange gradients (Aurora effect)
      */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Registration closes in 3 days
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
            The Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400">Is Dawning.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed">
            Join the largest inter-university innovation hackathon. 
            Connect with visionaries, build the impossible, and shape the digital horizon.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(251,146,60,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                Register for Aurora <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button className="px-8 py-4 border border-white/20 hover:border-orange-500/50 hover:bg-orange-500/10 text-white rounded-full transition-all">
              View Delegate Booklet
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 max-w-4xl mx-auto">
            {[
              { label: 'Universities', value: '15+' },
              { label: 'Participants', value: '500+' },
              { label: 'Prize Pool', value: 'LKR 100K' },
              { label: 'Hours', value: '24' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / FEATURES 
        Style: Grid layout similar to algoarena/tech sites
      */}
      <section id="about" className="py-20 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Where Innovation Meets <span className="text-orange-400">Opportunity</span></h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Aurora 2025 is more than just a competition; it's a convergence of the brightest minds in Sri Lanka. 
                Whether you are a coder, a designer, or a business strategist, Aurora provides the platform to showcase your talents.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-world problem solving',
                  'Mentorship from industry experts',
                  'Networking with top tech companies'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                      <Zap size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-neutral-800 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors">
                  <Code className="text-orange-400 mb-4" size={32} />
                  <h3 className="font-bold text-lg">Hackathon</h3>
                  <p className="text-sm text-neutral-500">24 hours of intense coding and creation.</p>
                </div>
                <div className="bg-neutral-800 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors">
                  <Users className="text-orange-400 mb-4" size={32} />
                  <h3 className="font-bold text-lg">Workshops</h3>
                  <p className="text-sm text-neutral-500">Learn from the masters of the craft.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-neutral-800 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors">
                  <Star className="text-orange-400 mb-4" size={32} />
                  <h3 className="font-bold text-lg">Showcase</h3>
                  <p className="text-sm text-neutral-500">Present your ideas to investors.</p>
                </div>
                <div className="bg-neutral-800 p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors">
                  <MapPin className="text-orange-400 mb-4" size={32} />
                  <h3 className="font-bold text-lg">On-site</h3>
                  <p className="text-sm text-neutral-500">University of Sri Jayewardenepura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE 
        Style: Vertical line with glowing dots
      */}
      <section id="timeline" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Event <span className="text-orange-400">Timeline</span></h2>
            <p className="text-neutral-400 mt-2">The journey to the summit</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-700 before:to-transparent">
            {[
              { date: 'Oct 15', title: 'Registration Opens', desc: 'Early bird registration begins for all university students.', active: true },
              { date: 'Nov 01', title: 'Preliminary Round', desc: 'Online coding challenge to select the top 20 teams.', active: false },
              { date: 'Nov 10', title: 'Workshop Series', desc: 'Expert sessions on AI, Cloud Computing, and Pitching.', active: false },
              { date: 'Nov 20', title: 'Grand Finale', desc: '24-hour physical hackathon at UOSJ.', active: false },
            ].map((event, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon/Dot */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl ${event.active ? 'bg-orange-500 border-neutral-900 shadow-orange-500/50' : 'bg-neutral-900 border-neutral-700'}`}>
                  {event.active && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-white/5 bg-neutral-900/50 backdrop-blur-sm hover:border-orange-500/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-lg">{event.title}</span>
                    <span className="text-xs font-mono text-orange-400 border border-orange-500/20 bg-orange-500/10 px-2 py-1 rounded">{event.date}</span>
                  </div>
                  <p className="text-neutral-400 text-sm">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER 
        Style: Simple, clean
      */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight mb-2">AURORA<span className="text-orange-400">2025</span></h2>
              <p className="text-neutral-500 text-sm max-w-xs">
                Empowering the next generation of innovators in Sri Lanka.
              </p>
            </div>
            <div className="flex gap-6">
               {/* Social placeholders */}
               {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                 <a key={social} href="#" className="text-neutral-500 hover:text-orange-400 transition-colors text-sm">
                   {social}
                 </a>
               ))}
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
            <p>&copy; 2025 Leo Club of UOSJ. All rights reserved.</p>
            <p>Designed for Rusira Sandul</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuroraEventPage;
