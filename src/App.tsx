import { useState } from 'react';
import { 
  Menu, X, ArrowRight, 
  Linkedin, Twitter, Instagram, Facebook,
  Clock, MapPin, Users, Bot, ShieldAlert, Trophy, Coffee, Calendar, Cpu
} from 'lucide-react';

const AuroraConference = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Data for the 6 Committees
  const committees = [
    { name: "Program & Content", heads: ["Rusira Sandul", "Oshini A."], members: ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"] },
    { name: "Logistics & Venue", heads: ["Kavindu P.", "Nimali S."], members: ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"] },
    { name: "Marketing & PR", heads: ["Shenal D.", "Amaya K."], members: ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"] },
    { name: "Finance & Sponsorship", heads: ["Isuru M.", "Dilshan J."], members: ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"] },
    { name: "Technical & Web", heads: ["Avishka T.", "Praveen L."], members: ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"] },
    { name: "Delegate Experience", heads: ["Tharushi P.", "Janith R."], members: ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6"] },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500 selection:text-black">
      {/* CSS for Looping Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-amber-300 flex items-center justify-center shadow-[0_0_15px_rgba(251,146,60,0.5)] overflow-hidden">
                <img src="/images/logo/aurora-logo.png" alt="Aurora Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-2xl tracking-tighter">AURORA<span className="text-orange-400">2026</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['Home', 'About', 'Speakers', 'Team', 'Gallery'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-neutral-400 hover:text-orange-400 transition-colors uppercase tracking-widest">
                  {item}
                </a>
              ))}
              <button className="bg-orange-500 hover:bg-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                Get Tickets
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-white/10 absolute w-full left-0 top-20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Speakers', 'Team', 'Gallery'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-orange-400 hover:bg-white/5 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-300 text-sm mb-8 font-mono">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Registrations Open for 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-none">
            IGNITE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-200 to-orange-500">HORIZON.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed font-light">
            Sri Lanka's Premier Tech Conference on Social Engineering and Agentic AI. <br/>
            Join industry leaders, visionaries, and students for a day of insight.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(251,146,60,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                Secure Your Seat <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-12 text-center border-t border-white/5 pt-10">
            {[
              { label: 'Speakers', value: '20+' },
              { label: 'Universities', value: '15+' },
              { label: 'Attendees', value: '1000+' },
              { label: 'Date', value: 'March 2026' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs text-orange-500/80 uppercase tracking-widest font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY / PREVIOUS EVENTS (Looping) */}
      <section id="gallery" className="py-12 bg-neutral-900/50 border-y border-white/5 overflow-hidden">
        <div className="mb-8 text-center">
          <p className="text-orange-400 font-mono text-sm uppercase tracking-widest">Previous Events</p>
        </div>
        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-[200%] animate-scroll gap-4">
             {/* Repeat this block twice for seamless loop */}
             {[1,2].map((set) => (
               <div key={set} className="flex gap-4 w-1/2 justify-around">
                  {/* Placeholders for images - replace src with actual URLs */}
                  {[1, 2, 3, 4, 5].map((img) => (
                    <div key={img} className="relative w-64 h-40 md:w-80 md:h-52 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer group">
                      <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div> 
                      {/* Simulating Image */}
                      <img src={`/api/placeholder/400/300`} alt="Event" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                        <p className="text-white text-xs font-bold">Aurora 2024</p>
                      </div>
                    </div>
                  ))}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section id="timeline" className="py-24 relative overflow-hidden bg-neutral-950">
        {/* Background Decor */}
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-orange-400">Roadmap</span></h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Aurora 2026 is a journey, not just a day. Join us across three months of innovation.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 md:-translate-x-1/2"></div>

            <div className="space-y-16">
              {[
                {
                  date: "JAN 15, 2026",
                  status: "Completed",
                  title: "Phase 1: The Rise of Agentic AI",
                  type: "Virtual Panel Discussion",
                  description: "A deep dive into how autonomous AI agents are reshaping software development. Featuring speakers from WSO2 and Google.",
                  icon: <Bot className="w-6 h-6" />,
                  link: "#"
                },
                {
                  date: "FEB 10, 2026",
                  status: "Registration Open",
                  title: "Phase 2: The Human Firewall",
                  type: "Physical Workshop @ UOSJ",
                  description: "Interactive session on Social Engineering. Learn the psychology behind attacks and how to defend against them.",
                  icon: <ShieldAlert className="w-6 h-6" />,
                  link: "#register-phase2"
                },
                {
                  date: "MAR 05, 2026",
                  status: "Coming Soon",
                  title: "Phase 3: Connected Intelligence",
                  type: "Hybrid Seminar",
                  description: "Exploring the convergence of IoT and AI. How smart devices are becoming autonomous agents.",
                  icon: <Cpu className="w-6 h-6" />,
                  link: "#"
                },
                {
                  date: "MAR 25, 2026",
                  status: "Grand Finale",
                  title: "The 'Mind Heist' Championship",
                  type: "On-site Competition & Quiz",
                  description: "The ultimate test of knowledge. Teams compete in a CTF-style Social Engineering and AI quiz.",
                  highlight: "Prize Pool: LKR 100,000",
                  icon: <Trophy className="w-6 h-6" />,
                  link: "#"
                }
              ].map((event, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Center Date Badge */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-neutral-950 bg-neutral-900 flex flex-col items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform">
                    <span className="text-[10px] text-neutral-500 font-bold uppercase">{event.date.split(' ')[0]}</span>
                    <span className="text-lg font-bold text-white">{event.date.split(' ')[1].replace(',', '')}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                    
                    <div className={`group relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-orange-500/30 transition-all duration-300 hover:bg-neutral-900/80`}>
                      
                      {/* Status Badge */}
                      <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider 
                        ${event.status === 'Registration Open' ? 'bg-orange-500 text-black animate-pulse' : 
                          event.status === 'Completed' ? 'bg-neutral-800 text-neutral-500' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'} 
                        ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                        {event.status}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 flex flex-col gap-1">
                        {event.title}
                        <span className="text-sm font-normal text-neutral-400 font-mono">{event.type}</span>
                      </h3>

                      <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {event.highlight && (
                        <div className={`mb-6 p-3 bg-gradient-to-r from-orange-500/10 to-transparent border-l-2 border-orange-500 rounded-r-lg
                          ${index % 2 !== 0 ? 'md:border-l-0 md:border-r-2 md:bg-gradient-to-l' : ''}`}>
                          <span className="text-orange-400 font-bold text-sm flex items-center gap-2">
                            <Trophy size={16} /> {event.highlight}
                          </span>
                        </div>
                      )}

                      {event.status === 'Registration Open' && (
                        <a href={event.link} className={`inline-flex items-center gap-2 text-white font-bold hover:text-orange-400 transition-colors ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                          Register Now <ArrowRight size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Spacer for Desktop Layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The <span className="text-orange-400">Board</span></h2>
          <p className="text-neutral-400">The visionaries behind Aurora 2026</p>
        </div>

        {/* Executive Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           {/* Co-Chair 1 */}
           <div className="group relative bg-neutral-900 rounded-2xl p-6 border border-white/5 hover:border-orange-500/50 transition-all">
              <div className="w-24 h-24 rounded-full bg-neutral-800 mx-auto mb-4 overflow-hidden border-2 border-orange-500/20 group-hover:border-orange-500 transition-colors">
                 <img src="/api/placeholder/100/100" alt="Co-Chair" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-center text-white">Chamod Devranga</h3>
              <p className="text-orange-400 text-center text-sm font-mono uppercase mt-1">Co-Chair</p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                  <Linkedin size={14}/>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                  <Facebook size={14}/>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                  <Instagram size={14}/>
                </a>
              </div>
           </div>
           
           {/* Co-Chair 2 */}
           <div className="group relative bg-neutral-900 rounded-2xl p-6 border border-white/5 hover:border-orange-500/50 transition-all">
              <div className="w-24 h-24 rounded-full bg-neutral-800 mx-auto mb-4 overflow-hidden border-2 border-orange-500/20 group-hover:border-orange-500 transition-colors">
                 <img src="/api/placeholder/100/100" alt="Co-Chair" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-center text-white">Sachith Wickramasekara</h3>
              <p className="text-orange-400 text-center text-sm font-mono uppercase mt-1">Co-Chair</p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                  <Linkedin size={14}/>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                  <Facebook size={14}/>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                  <Instagram size={14}/>
                </a>
              </div>
           </div>

           {/* Secretary & Treasurer (Split Column) */}
           <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5 text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-800 mx-auto mb-3 overflow-hidden">
                   <img src="/api/placeholder/100/100" alt="Secretary" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Kavindi Thirasha</h4>
                <p className="text-xs text-neutral-500 uppercase">Secretary</p>
                <div className="flex justify-center gap-2 mt-3">
                  <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                    <Linkedin size={12}/>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                    <Facebook size={12}/>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                    <Instagram size={12}/>
                  </a>
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5 text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-800 mx-auto mb-3 overflow-hidden">
                   <img src="/api/placeholder/100/100" alt="Vice Sec" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Viyathma Anuradhi</h4>
                <p className="text-xs text-neutral-500 uppercase">Vice Secretary</p>
                <div className="flex justify-center gap-2 mt-3">
                  <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                    <Linkedin size={12}/>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                    <Facebook size={12}/>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                    <Instagram size={12}/>
                  </a>
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5 text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-800 mx-auto mb-3 overflow-hidden">
                   <img src="/images/crew/Excom/rusira-profile.jpg" alt="Treasurer" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Rusira Sandul</h4>
                <p className="text-xs text-neutral-500 uppercase">Treasurer</p>
                <div className="flex justify-center gap-2 mt-3">
                  <a href="https://www.linkedin.com/in/rusira-sandul-b6bb87292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                    <Linkedin size={12}/>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61580672780166&mibextid=wwXIfr" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                    <Facebook size={12}/>
                  </a>
                  <a href="" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                    <Instagram size={12}/>
                  </a>
                </div>
              </div>
           </div>
        </div>

        {/* COMMITTEES SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Organizing <span className="text-orange-400">Committees</span></h2>
          <p className="text-neutral-400 text-sm">The engine room of Aurora 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {committees.map((committee, idx) => (
            <div key={idx} className="bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all group">
              {/* Committee Header */}
              <div className="p-6 border-b border-white/5 bg-white/5">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{committee.name}</h3>
                
                {/* Co-Heads */}
                <div className="flex items-center gap-3 mt-4">
                   <div className="text-xs font-mono text-neutral-500 uppercase">Co-Heads:</div>
                   <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold text-black border-2 border-neutral-900" title={committee.heads[0]}>{committee.heads[0].charAt(0)}</div>
                      <div className="w-8 h-8 rounded-full bg-amber-300 flex items-center justify-center text-xs font-bold text-black border-2 border-neutral-900" title={committee.heads[1]}>{committee.heads[1].charAt(0)}</div>
                   </div>
                   <div className="text-sm text-white truncate">{committee.heads.join(" & ")}</div>
                </div>
              </div>

              {/* Members List */}
              <div className="p-6 bg-neutral-950">
                <p className="text-xs font-mono text-neutral-500 uppercase mb-3">Committee Members</p>
                <div className="grid grid-cols-2 gap-2">
                  {committee.members.map((member, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-sm text-neutral-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-orange-500/50"></div>
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONFERENCE FOOTER */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight mb-2">AURORA<span className="text-orange-400">2026</span></h2>
              <p className="text-neutral-500 text-sm">
                Organised by Department of Computer Science<br/>
                University of Sri Jayewardenepura
              </p>
              <div className="flex justify-center md:justify-start gap-3 mt-4">
                <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all"><Instagram size={16}/></a>
                <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all"><Linkedin size={16}/></a>
                <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all"><Twitter size={16}/></a>
              </div>
            </div>

            {/* Contact Persons */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold mb-4 text-orange-400">Contact Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Co-Chair 1 */}
                <div className="bg-neutral-900/50 rounded-lg p-4 border border-white/5">
                  <p className="text-xs text-neutral-500 uppercase mb-2 font-mono">Co-Chair</p>
                  <h4 className="font-bold text-white mb-1">Chamod Devranga</h4>
                  <p className="text-sm text-neutral-400 mb-3">chamod@aurora2026.lk</p>
                  <div className="flex gap-2">
                    <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                      <Linkedin size={12}/>
                    </a>
                    <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                      <Facebook size={12}/>
                    </a>
                  </div>
                </div>

                {/* Co-Chair 2 */}
                <div className="bg-neutral-900/50 rounded-lg p-4 border border-white/5">
                  <p className="text-xs text-neutral-500 uppercase mb-2 font-mono">Co-Chair</p>
                  <h4 className="font-bold text-white mb-1">Sachith Wickramasekara</h4>
                  <p className="text-sm text-neutral-400 mb-3">sachith@aurora2026.lk</p>
                  <div className="flex gap-2">
                    <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                      <Linkedin size={12}/>
                    </a>
                    <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                      <Facebook size={12}/>
                    </a>
                  </div>
                </div>

                {/* Secretary */}
                <div className="bg-neutral-900/50 rounded-lg p-4 border border-white/5">
                  <p className="text-xs text-neutral-500 uppercase mb-2 font-mono">Secretary</p>
                  <h4 className="font-bold text-white mb-1">Kavindi Thirasha</h4>
                  <p className="text-sm text-neutral-400 mb-3">kavindi@aurora2026.lk</p>
                  <div className="flex gap-2">
                    <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                      <Linkedin size={12}/>
                    </a>
                    <a href="#" className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all">
                      <Facebook size={12}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
            <p>&copy; 2026 Aurora Conference. All rights reserved.</p>
            <p>Developed by Rusira Sandul</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuroraConference;
