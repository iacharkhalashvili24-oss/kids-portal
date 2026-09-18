"use client";
import React, { useState } from "react";

const toddlerVideos = [
  {
    id: "1",
    title: "1. 🦈 Baby Shark Dance",
    embedUrl: "https://www.youtube.com/embed/XqZsoesa55w",
    directUrl: "https://www.youtube.com/watch?v=XqZsoesa55w",
    category: "🎵 სიმღერა",
  },
  {
    id: "2",
    title: "2. 🍉 CoComelon - Bath Song",
    embedUrl: "https://www.youtube.com/embed/WRVsOCh907o",
    directUrl: "https://www.youtube.com/watch?v=WRVsOCh907o",
    category: "🎵 სიმღერა",
  },
  {
    id: "3",
    title: "3. 🚜 Wheels on the Bus",
    embedUrl: "https://www.youtube.com/embed/e_04ZrNroTo",
    directUrl: "https://www.youtube.com/watch?v=e_04ZrNroTo",
    category: "🎵 სიმღერა",
  },
  {
    id: "4",
    title: "4. 🐷 Peppa Pig - Muddy Puddles",
    embedUrl: "https://www.youtube.com/embed/2M-x9mQ0m2E",
    directUrl: "https://www.youtube.com/watch?v=2M-x9mQ0m2E",
    category: "🎬 ანიმაცია",
  },
  {
    id: "5",
    title: "5. 🐶 PAW Patrol - Pups Save the Day",
    embedUrl: "https://www.youtube.com/embed/Jbgm323Pq0k",
    directUrl: "https://www.youtube.com/watch?v=Jbgm323Pq0k",
    category: "🎬 ანიმაცია",
  },
  {
    id: "6",
    title: "6. ⭐️ Twinkle Twinkle Little Star",
    embedUrl: "https://www.youtube.com/embed/yCjJyiqpAuU",
    directUrl: "https://www.youtube.com/watch?v=yCjJyiqpAuU",
    category: "🎵 იავნანა",
  },
];

const movieVideos = [
  {
    id: "m1",
    title: "1. 🚀 Interstellar",
    embedUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    directUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    genre: "🌌 სამეცნიერო",
    desc: "მოგზაურობა კოსმოსურ ხვრელებში კაცობრიობის გადასარჩენად.",
  },
  {
    id: "m2",
    title: "2. 🧙‍♂️ Harry Potter",
    embedUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
    directUrl: "https://www.youtube.com/watch?v=VyHV0BRtdxo",
    genre: "✨ ფენტეზი",
    desc: "ჯადოსნური სამყარო, ჰოგვორტსი და მეგობრობის ძალა.",
  },
  {
    id: "m3",
    title: "3. 🕷️ Spider-Man: Spider-Verse",
    embedUrl: "https://www.youtube.com/embed/g4Hbz2jLxvQ",
    directUrl: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ",
    genre: "🎬 ანიმაცია",
    desc: "მაილს მორალესი და პარალელური სამყაროების სპაიდერმენები.",
  },
];

const kidsFootball = [
  {
    title: "1. ⚽ ბურთის ტარება ტერფით",
    desc: "მჭიდრო დრიბლინგი და ბურთის კონტროლი.",
    directUrl: "https://www.youtube.com/watch?v=3Uj34B3I51I",
  },
  {
    title: "2. 🎯 ზუსტი პასი ფეხის შიდა მხარით",
    desc: "სწორი პასის ტექნიკა და მიზანში დარტყმა.",
    directUrl: "https://www.youtube.com/watch?v=X9f_c6LHoTI",
  },
];

const puzzles = [
  {
    q: "1. 3 სანთელი ანთია, 2 ჩააქრეს. რამდენი სანთელი დარჩება?",
    a: "2 სანთელი დარჩება (ჩაქრობილები არ ჩაიწვება, ის 1 კი ბოლომდე ჩაიწვება) 🕯️",
  },
  {
    q: "2. მდინარის გადასვლა: მგელი, თხა და კომბოსტო. ნავში მხოლოდ ერთის ჩასმა შეიძლება. როგორ გადავიყვანოთ?",
    a: "1. გადაჰყავს თხა. 2. ბრუნდება, მიჰყავს მგელი, გადმოჰყავს თხა. 3. ტოვებს თხას, მიჰყავს კომბოსტო. 4. ბრუნდება და გადაჰყავს თხა! 🐐",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<
    "toddler" | "movies" | "football" | "puzzles"
  >("toddler");
  const [openPuzzle, setOpenPuzzle] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-4 md:p-8 font-sans relative overflow-hidden">
      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }
        @keyframes rainbowBg {
          0% {
            filter: hue-rotate(0deg);
          }
          50% {
            filter: hue-rotate(60deg);
          }
          100% {
            filter: hue-rotate(0deg);
          }
        }
        .bubble-1 {
          animation: floatUp 7s infinite ease-in-out;
        }
        .bubble-2 {
          animation: floatUp 10s infinite ease-in-out 2s;
        }
        .bubble-3 {
          animation: floatUp 8s infinite ease-in-out 4s;
        }
        .rainbow-container {
          animation: rainbowBg 15s infinite linear;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-0 rainbow-container">
        <div className="absolute left-[10%] w-20 h-20 bg-yellow-400/40 rounded-full blur-xl bubble-1"></div>
        <div className="absolute left-[50%] w-32 h-32 bg-cyan-400/40 rounded-full blur-2xl bubble-2"></div>
        <div className="absolute left-[80%] w-24 h-24 bg-pink-400/40 rounded-full blur-xl bubble-3"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="text-center mb-10 pt-6">
          <div className="inline-block animate-bounce mb-3 text-5xl">
            🎨🎪🚀
          </div>
          {/* აქ ჩასწორდა სათაური: დაემატა overflow-visible whitespace-nowrap, რომ ასოები არ დაიმალოს */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-wider text-yellow-300 drop-shadow-[0_5px_15px_rgba(255,215,0,0.6)] overflow-visible whitespace-nowrap px-4">
            საბავშვო სამყარო
          </h1>
          <p className="text-pink-200 text-lg md:text-xl font-bold animate-pulse">
            აირჩიე შენი საყვარელი გართობა და იცეკვე ფერად სივრცეში! ✨
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("toddler")}
            className={`px-6 py-4 rounded-3xl font-black text-lg transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg ${
              activeTab === "toddler"
                ? "bg-yellow-400 text-purple-950 ring-4 ring-white shadow-yellow-400/50 scale-105"
                : "bg-pink-600/70 text-white hover:bg-pink-500"
            }`}
          >
            👶 პატარების სიმღერები
          </button>
          <button
            onClick={() => setActiveTab("movies")}
            className={`px-6 py-4 rounded-3xl font-black text-lg transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg ${
              activeTab === "movies"
                ? "bg-yellow-400 text-purple-950 ring-4 ring-white shadow-yellow-400/50 scale-105"
                : "bg-cyan-600/70 text-white hover:bg-cyan-500"
            }`}
          >
            🎬 ფილმები და მულტფილმები
          </button>
          <button
            onClick={() => setActiveTab("football")}
            className={`px-6 py-4 rounded-3xl font-black text-lg transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg ${
              activeTab === "football"
                ? "bg-yellow-400 text-purple-950 ring-4 ring-white shadow-yellow-400/50 scale-105"
                : "bg-emerald-600/70 text-white hover:bg-emerald-500"
            }`}
          >
            ⚽ ფეხბურთის თამაშები
          </button>
          <button
            onClick={() => setActiveTab("puzzles")}
            className={`px-6 py-4 rounded-3xl font-black text-lg transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg ${
              activeTab === "puzzles"
                ? "bg-yellow-400 text-purple-950 ring-4 ring-white shadow-yellow-400/50 scale-105"
                : "bg-orange-600/70 text-white hover:bg-orange-500"
            }`}
          >
            🧩 ამოცანები და გამოცანები
          </button>
        </div>

        {activeTab === "toddler" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toddlerVideos.map((vid) => (
              <div
                key={vid.id}
                className="bg-white/10 backdrop-blur-md border-4 border-yellow-400/50 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-yellow-300 shadow-2xl"
              >
                <div>
                  <span className="text-xs bg-yellow-400 text-purple-950 px-3 py-1 rounded-full font-extrabold inline-block mb-3">
                    {vid.category}
                  </span>
                  <h3 className="font-extrabold text-lg mb-3 text-yellow-200">
                    {vid.title}
                  </h3>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black mb-4 border-2 border-white/30">
                    <iframe
                      src={vid.embedUrl}
                      title={vid.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <a
                  href={vid.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-extrabold text-yellow-300 bg-purple-950 hover:bg-yellow-400 hover:text-purple-950 py-3 rounded-2xl border-2 border-yellow-400 transition-all duration-300 shadow-md"
                >
                  YouTube-ზე ყურება 🚀
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === "movies" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movieVideos.map((movie) => (
              <div
                key={movie.id}
                className="bg-white/10 backdrop-blur-md border-4 border-cyan-400/50 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:bg-white/25 hover:border-cyan-300 shadow-2xl"
              >
                <div>
                  <span className="text-xs bg-cyan-400 text-purple-950 px-3 py-1 rounded-full font-extrabold inline-block mb-3">
                    {movie.genre}
                  </span>
                  <h3 className="font-extrabold text-lg mb-2 text-cyan-200">
                    {movie.title}
                  </h3>
                  <p className="text-xs text-pink-100 mb-4 leading-relaxed font-medium">
                    {movie.desc}
                  </p>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black mb-4 border-2 border-white/30">
                    <iframe
                      src={movie.embedUrl}
                      title={movie.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <a
                  href={movie.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-extrabold text-cyan-300 bg-purple-950 hover:bg-cyan-400 hover:text-purple-950 py-3 rounded-2xl border-2 border-cyan-400 transition-all duration-300 shadow-md"
                >
                  ტრეილერის ნახვა 🎬
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === "football" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {kidsFootball.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border-4 border-emerald-400/50 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:bg-white/20 shadow-2xl"
              >
                <div>
                  <h3 className="font-black text-xl mb-3 text-emerald-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white mb-6 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
                <a
                  href={item.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-extrabold text-emerald-300 bg-purple-950 hover:bg-emerald-400 hover:text-purple-950 py-3 rounded-2xl border-2 border-emerald-400 transition-all duration-300 shadow-md"
                >
                  გაკვეთილის ნახვა ⚽
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === "puzzles" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-black mb-5 text-yellow-300 flex items-center gap-3">
              <span>🧩</span> ლოგიკური ამოცანები
            </h2>
            {puzzles.map((p, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border-4 border-orange-400/50 rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] shadow-xl"
              >
                <p className="font-bold text-white mb-4 text-lg">{p.q}</p>
                <button
                  onClick={() => setOpenPuzzle(openPuzzle === idx ? null : idx)}
                  className="text-sm font-black px-6 py-3 rounded-2xl bg-orange-400 text-purple-950 hover:bg-yellow-400 transition-all duration-300 shadow-md"
                >
                  {openPuzzle === idx
                    ? "პასუხის დამალვა 🔼"
                    : "პასუხის ნახვა 👁️"}
                </button>
                {openPuzzle === idx && (
                  <div className="mt-4 p-4 bg-orange-950/80 border-2 border-orange-400 rounded-2xl text-base text-orange-200 font-bold animate-fadeIn">
                    {p.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
