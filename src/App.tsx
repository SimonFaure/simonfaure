import { useState, useEffect } from 'react';
import { Mail, ExternalLink } from 'lucide-react';

function App() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Simon Faure';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f0e6] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-5xl w-full relative">
        <div className="relative bg-[#fdfbf7] shadow-[0_10px_50px_rgba(0,0,0,0.4)] border-8 border-black p-1">
          <div className="border-4 border-[#1a1a1a] p-1">
            <div className="border border-[#333] bg-[#fdfbf7] p-8 md:p-16 relative">
              <div className="absolute top-4 left-4 right-4 h-1 bg-black" />
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-black" />
              <div className="absolute top-4 bottom-4 left-4 w-1 bg-black" />
              <div className="absolute top-4 bottom-4 right-4 w-1 bg-black" />

              <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-black" />
              <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-black" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-black" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-black" />

              <div className="space-y-8 relative z-10">
                <div className="text-center border-4 border-black bg-black text-white py-2 px-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B0000]/10 to-transparent" />
                  <p className="text-xs md:text-sm tracking-[0.5em] font-bold relative z-10">QUALITY • PRECISION • EXCELLENCE</p>
                </div>

                <div className="flex items-center justify-center my-6">
                  <div className="relative">
                    <img
                      src="/logo_simon_faure.png"
                      alt="Simon Faure Logo"
                      className="w-40 h-40 md:w-56 md:h-56 object-contain"
                    />
                  </div>
                </div>

                <div className="text-center space-y-6 mb-8">
                  <div className="space-y-1">
                    <div className="text-xs md:text-sm tracking-[0.3em] font-bold">PRESENTING</div>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black tracking-tight leading-none font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                      {typedText}
                      {typedText.length < fullText.length && (
                        <span className={`inline-block w-[4px] h-[1em] bg-black ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                      )}
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-black via-[#8B0000] to-black mx-auto mt-4" />
                  </div>
                </div>

                <div className="max-w-2xl mx-auto space-y-8">
                  <div className="text-center space-y-4">
                    <div className="border-t-4 border-b-4 border-black py-6 bg-[#f9f7f3]">
                      <p className="text-xl md:text-2xl font-bold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                        FREELANCE WEB DEVELOPER
                      </p>
                    </div>

                    <div className="py-6">
                      <p className="text-sm md:text-base leading-relaxed text-gray-800 italic" style={{ fontFamily: 'Georgia, serif' }}>
                        "Crafted with precision and built to last—<br />modern digital solutions with timeless quality"
                      </p>
                    </div>

                    <div className="border-4 border-black p-8 bg-white relative">
                      <div className="absolute top-2 left-2 right-2 bottom-2 border border-black pointer-events-none" />
                      <div className="relative z-10">
                        <p className="text-xs tracking-[0.4em] mb-4 font-bold">FOR INQUIRIES & ENGAGEMENTS</p>
                        <a
                          href="mailto:faure.developpeur@gmail.com"
                          className="inline-flex items-center justify-center gap-3 text-black hover:text-gray-600 transition-colors duration-200 text-base md:text-lg group"
                        >
                          <Mail className="w-5 h-5" />
                          <span className="font-mono border-b-2 border-black group-hover:border-gray-600 pb-1">
                          faure.developpeur@gmail.com
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t-2 border-black text-center">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-2 h-2 bg-[#8B0000] rotate-45" />
                      <p className="text-xs tracking-[0.3em] font-bold">ESTABLISHED 2015</p>
                      <div className="w-2 h-2 bg-[#8B0000] rotate-45" />
                    </div>
                    <p className="text-[10px] tracking-wider text-gray-600">
                      GUARANTEED WORKMANSHIP • UNMATCHED RELIABILITY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-[#fdfbf7] shadow-[0_10px_50px_rgba(0,0,0,0.4)] border-8 border-black p-1 mt-12">
          <div className="border-4 border-[#1a1a1a] p-1">
            <div className="border border-[#333] bg-[#fdfbf7] p-8 md:p-16 relative">
              <div className="absolute top-4 left-4 right-4 h-1 bg-black" />
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-black" />
              <div className="absolute top-4 bottom-4 left-4 w-1 bg-black" />
              <div className="absolute top-4 bottom-4 right-4 w-1 bg-black" />

              <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-black" />
              <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-black" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-black" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-black" />

              <div className="space-y-8 relative z-10">
                <div className="text-center border-4 border-black bg-black text-white py-2 px-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B0000]/10 to-transparent" />
                  <p className="text-xs md:text-sm tracking-[0.5em] font-bold relative z-10">ADVENTURE • INNOVATION • IMMERSION</p>
                </div>

                <div className="flex items-center justify-center my-6">
                  <div className="relative">
                    <img
                      src="/LOGO_TAG_HUNTER.png"
                      alt="Tag Hunter Logo"
                      className="w-40 h-40 md:w-56 md:h-56 object-contain"
                    />
                  </div>
                </div>

                <div className="text-center space-y-6 mb-8">
                  <div className="space-y-1">
                    <div className="text-xs md:text-sm tracking-[0.3em] font-bold">INTRODUCING</div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-none font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                      TAG HUNTER
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-black via-[#8B0000] to-black mx-auto mt-4" />
                  </div>
                </div>

                <div className="max-w-2xl mx-auto space-y-8">
                  <div className="text-center space-y-4">
                    <div className="border-t-4 border-b-4 border-black py-6 bg-[#f9f7f3]">
                      <p className="text-xl md:text-2xl font-bold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                        ACTION GAME / ESCAPE GAME LICENSING
                      </p>
                    </div>

                    <div className="py-6">
                      <p className="text-sm md:text-base leading-relaxed text-gray-800 italic" style={{ fontFamily: 'Georgia, serif' }}>
                        "Every space becomes a playground—<br />immersive adventures adaptable to any environment"
                      </p>
                    </div>

                    <div className="border-4 border-black p-6 bg-white relative">
                      <div className="absolute top-2 left-2 right-2 bottom-2 border border-black pointer-events-none" />
                      <div className="relative z-10 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                          <div className="text-left space-y-1">
                            <p className="font-bold tracking-wider">FEATURES</p>
                            <ul className="space-y-1 text-gray-700">
                              <li>• Interactive Experience</li>
                              <li>• 16+ Game Scenarios</li>
                              <li>• Mobile or Fixed Installation</li>
                              <li>• Ages 4 to 99</li>
                            </ul>
                          </div>
                          <div className="text-left space-y-1">
                            <p className="font-bold tracking-wider">ADVANTAGES</p>
                            <ul className="space-y-1 text-gray-700">
                              <li>• 100% Made in France</li>
                              <li>• Turnkey Solution</li>
                              <li>• Custom Scenarios</li>
                              <li>• Reliable Equipment</li>
                            </ul>
                          </div>
                        </div>
                        <div className="pt-4 border-t-2 border-black space-y-4">
                          <div>
                            <a
                              href="https://taghunter.fr"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-3 bg-black text-white hover:bg-gray-800 transition-all duration-200 px-8 py-3 border-2 border-black hover:shadow-lg group"
                            >
                              <span className="font-bold tracking-wider text-sm">VISIT WEBSITE</span>
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                          <div>
                            <p className="text-xs tracking-[0.4em] mb-3 font-bold">PROFESSIONAL INQUIRIES</p>
                            <a
                              href="mailto:contact@taghunter.fr"
                              className="inline-flex items-center justify-center gap-3 text-black hover:text-gray-600 transition-colors duration-200 text-base md:text-lg group"
                            >
                              <Mail className="w-5 h-5" />
                              <span className="font-mono border-b-2 border-black group-hover:border-gray-600 pb-1">
                                contact@taghunter.fr
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t-2 border-black text-center">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-2 h-2 bg-[#8B0000] rotate-45" />
                      <p className="text-xs tracking-[0.3em] font-bold">SINCE 2022 • 8000+ PLAYERS</p>
                      <div className="w-2 h-2 bg-[#8B0000] rotate-45" />
                    </div>
                    <p className="text-[10px] tracking-wider text-gray-600">
                      A CREATION BY LUDIOM • ARRAS, FRANCE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center px-8 text-[10px] tracking-widest text-gray-600">
          <span>SIMON FAURE</span>
          <span>WEB DEVELOPMENT</span>
        </div>
      </div>
    </div>
  );
}

export default App;
