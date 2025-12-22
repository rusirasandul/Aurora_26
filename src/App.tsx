import { useState } from 'react';
import { 
  Calendar, MapPin, Menu, X, ArrowRight, 
  Users, Mic, Globe, Star, ChevronDown, 
  Linkedin, Twitter, Instagram 
} from 'lucide-react';

const AuroraConference = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCommittee, setActiveCommittee] = useState(0);

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
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-amber-300 flex items-center justify-center shadow-[0_0_15px_rgba(251,146,60,0.5)]">
                <span className="font-bold text-black text-xl">A</span>
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
            Sri Lanka's Premier Tech Conference on Agentic AI & IoT. <br/>
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
              <h3 className="text-xl font-bold text-center text-white">Name Here</h3>
              <p className="text-orange-400 text-center text-sm font-mono uppercase mt-1">Co-Chair</p>
           </div>
           
           {/* Co-Chair 2 */}
           <div className="group relative bg-neutral-900 rounded-2xl p-6 border border-white/5 hover:border-orange-500/50 transition-all">
              <div className="w-24 h-24 rounded-full bg-neutral-800 mx-auto mb-4 overflow-hidden border-2 border-orange-500/20 group-hover:border-orange-500 transition-colors">
                 <img src="/api/placeholder/100/100" alt="Co-Chair" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-center text-white">Name Here</h3>
              <p className="text-orange-400 text-center text-sm font-mono uppercase mt-1">Co-Chair</p>
           </div>

           {/* Secretary & Treasurer (Split Column) */}
           <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5 text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-800 mx-auto mb-3 overflow-hidden">
                   <img src="/api/placeholder/100/100" alt="Secretary" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Name Here</h4>
                <p className="text-xs text-neutral-500 uppercase">Secretary</p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5 text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-800 mx-auto mb-3 overflow-hidden">
                   <img src="/api/placeholder/100/100" alt="Vice Sec" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Name Here</h4>
                <p className="text-xs text-neutral-500 uppercase">Vice Secretary</p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5 text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-800 mx-auto mb-3 overflow-hidden">
                   <img src="/api/placeholder/100/100" alt="Treasurer" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold">Name Here</h4>
                <p className="text-xs text-neutral-500 uppercase">Treasurer</p>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight mb-2">AURORA<span className="text-orange-400">2026</span></h2>
              <p className="text-neutral-500 text-sm max-w-xs">
                Organised by Department of Computer Science<br/>
                University of Sri Jayewardenepura<br/>
                
              </p>
            </div>
            
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all"><Instagram size={18}/></a>
               <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all"><Linkedin size={18}/></a>
               <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all"><Twitter size={18}/></a>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
            <p>&copy; 2026 Aurora Conference. All rights reserved.</p>
            <p>&copy; Rusira Sandul</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuroraConference;
