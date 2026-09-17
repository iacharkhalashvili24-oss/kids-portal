"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

// --- მონაცემთა მასივები ---

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
  {
    id: "7",
    title: "7. 🍎 Finger Family Song",
    embedUrl: "https://www.youtube.com/embed/FY3M-4rmmO0",
    directUrl: "https://www.youtube.com/watch?v=FY3M-4rmmO0",
    category: "🎵 სიმღერა",
  },
  {
    id: "8",
    title: "8. 🐱 Super Simple Songs - Five Little Monkeys",
    embedUrl: "https://www.youtube.com/embed/b0NHrFNZWh0",
    directUrl: "https://www.youtube.com/watch?v=b0NHrFNZWh0",
    category: "🎵 სიმღერა",
  },
  {
    id: "9",
    title: "9. 🐻 Masha and the Bear - Jam Day",
    embedUrl: "https://www.youtube.com/embed/KYniUCGPGLs",
    directUrl: "https://www.youtube.com/watch?v=KYniUCGPGLs",
    category: "🎬 ანიმაცია",
  },
  {
    id: "10",
    title: "10. 🦆 Five Little Ducks",
    embedUrl: "https://www.youtube.com/embed/pZw9veQ76fo",
    directUrl: "https://www.youtube.com/watch?v=pZw9veQ76fo",
    category: "🎵 სიმღერა",
  },
  {
    id: "11",
    title: "11. 🌈 If You're Happy and You Know It",
    embedUrl: "https://www.youtube.com/embed/l4WNrvVjiTw",
    directUrl: "https://www.youtube.com/watch?v=l4WNrvVjiTw",
    category: "🎵 სიმღერა",
  },
  {
    id: "12",
    title: "12. 🚜 Blippi - Fire Truck Song",
    embedUrl: "https://www.youtube.com/embed/4b3O91K6aO8",
    directUrl: "https://www.youtube.com/watch?v=4b3O91K6aO8",
    category: "🔍 შემეცნებითი",
  },
  {
    id: "13",
    title: "13. 🔴 Bluey - Keepy Uppy",
    embedUrl: "https://www.youtube.com/embed/82w90j8G48Y",
    directUrl: "https://www.youtube.com/watch?v=82w90j8G48Y",
    category: "🎬 ანიმაცია",
  },
  {
    id: "14",
    title: "14. 🐵 Old MacDonald Had A Farm",
    embedUrl: "https://www.youtube.com/embed/_6HzoUcx3eo",
    directUrl: "https://www.youtube.com/watch?v=_6HzoUcx3eo",
    category: "🎵 სიმღერა",
  },
  {
    id: "15",
    title: "15. 🐝 The Ants Go Marching",
    embedUrl: "https://www.youtube.com/embed/Pjw2A3QU8Qg",
    directUrl: "https://www.youtube.com/watch?v=Pjw2A3QU8Qg",
    category: "🎵 სიმღერა",
  },
  {
    id: "16",
    title: "16. 🎈 Head Shoulders Knees & Toes",
    embedUrl: "https://www.youtube.com/embed/WX8HmogNyCY",
    directUrl: "https://www.youtube.com/watch?v=WX8HmogNyCY",
    category: "🎵 სიმღერა",
  },
  {
    id: "17",
    title: "17. 🐣 Humpty Dumpty",
    embedUrl: "https://www.youtube.com/embed/nrv495corBc",
    directUrl: "https://www.youtube.com/watch?v=nrv495corBc",
    category: "🎵 სიმღერა",
  },
  {
    id: "18",
    title: "18. 🔤 The ABC Song",
    embedUrl: "https://www.youtube.com/embed/75p-N9YKqNo",
    directUrl: "https://www.youtube.com/watch?v=75p-N9YKqNo",
    category: "📚 სწავლა",
  },
  {
    id: "19",
    title: "19. 🔢 The Numbers Song (1-10)",
    embedUrl: "https://www.youtube.com/embed/D0Ajq682yrA",
    directUrl: "https://www.youtube.com/watch?v=D0Ajq682yrA",
    category: "📚 სწავლა",
  },
  {
    id: "20",
    title: "20. 🎨 Color Song for Kids",
    embedUrl: "https://www.youtube.com/embed/zxIpA5nF_LY",
    directUrl: "https://www.youtube.com/watch?v=zxIpA5nF_LY",
    category: "📚 სწავლა",
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
  {
    id: "m4",
    title: "4. 🦁 The Lion King",
    embedUrl: "https://www.youtube.com/embed/4sj1MT05lAA",
    directUrl: "https://www.youtube.com/watch?v=4sj1MT05lAA",
    genre: "🐾 სათავგადასავლო",
    desc: "სიმბას საოცარი თავგადასავალი და მეფის გზა.",
  },
  {
    id: "m5",
    title: "5. 🎈 Up",
    embedUrl: "https://www.youtube.com/embed/ORFWdXl_zJ4",
    directUrl: "https://www.youtube.com/watch?v=ORFWdXl_zJ4",
    genre: "🎈 სათავგადასავლო",
    desc: "მოხუცი კარლისა და პატარა რასელის მოგზაურობა მფრინავი სახლით.",
  },
  {
    id: "m6",
    title: "6. 🤖 Wall-E",
    embedUrl: "https://www.youtube.com/embed/alIq_wG9fnk",
    directUrl: "https://www.youtube.com/watch?v=alIq_wG9fnk",
    genre: "🤖 სამეცნიერო",
    desc: "პატარა რობოტი, რომელმაც დედამიწაზე სიყვარული იპოვა.",
  },
  {
    id: "m7",
    title: "7. 🐼 Kung Fu Panda",
    embedUrl: "https://www.youtube.com/embed/PXi3Mv6KMzY",
    directUrl: "https://www.youtube.com/watch?v=PXi3Mv6KMzY",
    genre: "🥋 ექშენი",
    desc: "პოს გარდასახვა ჩვეულებრივი პანდიდან დრაკონის მეომრად.",
  },
  {
    id: "m8",
    title: "8. 🏎️ Cars",
    embedUrl: "https://www.youtube.com/embed/SbXIj2T-_uk",
    directUrl: "https://www.youtube.com/watch?v=SbXIj2T-_uk",
    genre: "🏎️ სპორტული",
    desc: "ელვა მაკუინის გაკვეთილი: მეგობრობა უმთავრესია.",
  },
  {
    id: "m9",
    title: "9. 🧠 Inside Out",
    embedUrl: "https://www.youtube.com/embed/seMwpP0yeu4",
    directUrl: "https://www.youtube.com/watch?v=seMwpP0yeu4",
    genre: "🧠 ფსიქოლოგიური",
    desc: "ემოციები პატარა რაილის გონებაში.",
  },
  {
    id: "m10",
    title: "10. 🐉 How to Train Your Dragon",
    embedUrl: "https://www.youtube.com/embed/oKiYuIsLyXY",
    directUrl: "https://www.youtube.com/watch?v=oKiYuIsLyXY",
    genre: "🐉 ფენტეზი",
    desc: "ჰიკაპისა და დრაკონ უკბილოს (Toothless) დიდი მეგობრობა.",
  },
  {
    id: "m11",
    title: "11. 🚢 Titanic",
    embedUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    directUrl: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
    genre: "📜 ისტორიული",
    desc: "ისტორიული და დრამატული მოგზაურობა ოკეანეში.",
  },
  {
    id: "m12",
    title: "12. 🪐 Avatar",
    embedUrl: "https://www.youtube.com/embed/5PSNL1qE6VY",
    directUrl: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    genre: "🌌 სამეცნიერო",
    desc: "პანდორას უცხო პლანეტის საოცარი ბუნება.",
  },
  {
    id: "m13",
    title: "13. 🍫 Charlie & Chocolate Factory",
    embedUrl: "https://www.youtube.com/embed/OFVGCUIXJls",
    directUrl: "https://www.youtube.com/watch?v=OFVGCUIXJls",
    genre: "🍫 ფენტეზი",
    desc: "ჩარლის თავგადასავალი ვილი ვონკას ჯადოსნურ ფაბრიკაში.",
  },
  {
    id: "m14",
    title: "14. 🎒 Home Alone",
    embedUrl: "https://www.youtube.com/embed/jEDaVHmw7r4",
    directUrl: "https://www.youtube.com/watch?v=jEDaVHmw7r4",
    genre: "😂 კომედია",
    desc: "კევინის მხიარული ბრძოლა სახლის დასაცავად.",
  },
  {
    id: "m15",
    title: "15. 🦸‍♂️ The Incredibles",
    embedUrl: "https://www.youtube.com/embed/eZbZbC92070",
    directUrl: "https://www.youtube.com/watch?v=eZbZbC92070",
    genre: "🦸‍♂️ ექშენი",
    desc: "სუპერგმირების ოჯახი, რომლებიც სამყაროს იცავენ.",
  },
  {
    id: "m16",
    title: "16. 🦍 Jumanji",
    embedUrl: "https://www.youtube.com/embed/2QKg5SZ_35I",
    directUrl: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
    genre: "🌴 ექშენი",
    desc: "თამაში, რომელიც მოთამაშეებს რეალურ ჯუნგლებში გადაისვრის.",
  },
  {
    id: "m17",
    title: "17. 🌊 Moana",
    embedUrl: "https://www.youtube.com/embed/LKFuXETZUsI",
    directUrl: "https://www.youtube.com/watch?v=LKFuXETZUsI",
    genre: "🌊 ანიმაცია",
    desc: "მოანას მოგზაურობა ოკეანეში ხალხის გადასარჩენად.",
  },
  {
    id: "m18",
    title: "18. 🦊 Zootopia",
    embedUrl: "https://www.youtube.com/embed/jWM0ct-OLsM",
    directUrl: "https://www.youtube.com/watch?v=jWM0ct-OLsM",
    genre: "🔍 დეტექტივი",
    desc: "ცხოველთა დიდ ქალაქში გამომძიებელი კურდღლის ისტორია.",
  },
  {
    id: "m19",
    title: "19. 🦖 Jurassic Park",
    embedUrl: "https://www.youtube.com/embed/lc0UehYemQA",
    directUrl: "https://www.youtube.com/watch?v=lc0UehYemQA",
    genre: "🦖 სათავგადასავლო",
    desc: "დინოზავრების გაცოცხლებული სამყარო.",
  },
  {
    id: "m20",
    title: "20. ⚡ Percy Jackson",
    embedUrl: "https://www.youtube.com/embed/xko1Mx5w4SM",
    directUrl: "https://www.youtube.com/watch?v=xko1Mx5w4SM",
    genre: "⚡ ფენტეზი",
    desc: "ბერძნული მითოლოგიის ღმერთები და ახალგაზრდა ნახევარღმერთი.",
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
  {
    q: "3. ოთახში 3 ნათურაა, გარეთ - 3 ჩამრთველი. ოთახში მხოლოდ ერთხელ შესვლა შეგიძლია. როგორ გაიგებ რომელი ჩამრთველი რომლისაა?",
    a: "ჩართე 1-ლი ჩამრთველი 5 წუთით, გამორთე და ჩართე მე-2. შედი ოთახში: ანთებული = მე-2, ცხელი = 1-ლი, ცივი = მე-3! 💡",
  },
  {
    q: "4. მამას და შვილს ერთად 110 წელი შეუსრულდათ. მამა შვილზე 100 წლით უფროსია. რამდენი წლისაა შვილი?",
    a: "შვილი 5 წლისაა, მამა 105 წლის (105 + 5 = 110)! 👨‍👦",
  },
  {
    q: "5. რა ჩნდება წელიწადში ერთხელ, კვირაში ორჯერ და დღეში არცერთხელ?",
    a: "ასო-ბგერა «ა» (წელ-ი-ალ-დ-შ-ი, კვ-ი-რ-ა-შ-ი)! 🔤",
  },
  {
    q: "6. მატარებელი მიდის აღმოსავლეთით 100 კმ/სთ სიჩქარით. საით მიდის ელექტრომატარებლის ბოლი?",
    a: "ელექტრომატარებელს ბოლი არ აქვს! 🚆",
  },
  {
    q: "7. ორმა მამამ და ორმა შვილმა 3 ვაშლი შეიჭამა, თითომ თითო მთლიანი ვაშლი. როგორ?",
    a: "ისინი იყვნენ: პაპა, მამა და შვილი (სულ 3 ადამიანი)! 🍎",
  },
  {
    q: "8. რიცხვი 8 როგორ გავყოთ შუაზე ისე, რომ 0 მივიღოთ?",
    a: "ჰორიზონტალურად გავჭრათ შუაზე 8 და მივიღებთ ორ 0-ს! 8️⃣",
  },
  {
    q: "9. რას აქვს გული, რომელიც არ ცემს?",
    a: "კარტოფილს ან არტიშოკს / ხეს! 🥔",
  },
  {
    q: "10. რა დადის ფეხების გარეშე, ტირის თვალების გარეშე?",
    a: "ღრუბელი ☁️",
  },
  {
    q: "11. 100 კილოგრამი ბუმბული უფრო მძიმეა თუ 100 კილოგრამი რკინა?",
    a: "ორივე თანაბარია - ორივე 100 კილოგრამია! ⚖️",
  },
  { q: "12. რა უფრო იმატებს, რაც უფრო მეტად ამშრალებ?", a: "პირსახოცი 🧺" },
  {
    q: "13. კაცს ჰყავდა 17 ცხვარი. 9-ის გარდა ყველა მოკვდა. რამდენი ცხვარი დარჩა?",
    a: "დარჩა 9 ცხვარი! 🐑",
  },
  {
    q: "14. თუ რბოლაში გადაასწარი მეორე ადგილზე მყოფს, მერამდენე ადგილზე ხარ?",
    a: "მეორე ადგილზე! 🏃‍♂️",
  },
  { q: "15. რა ქრება მაშინვე, როცა მის სახელს იტყვი?", a: "სიჩუმე 🤫" },
  {
    q: "16. სახლს აქვს 4 მხარე, ოთხივე სამხრეთით უყურებს. დათვი გაიარა სახლთან. რა ფერისაა დათვი?",
    a: "თეთრია (სახლი დგას ჩრდილოეთ პოლუსზე)! 🐻‍❄️",
  },
];

const riddles = [
  { q: "17. რისი ჭამა არ შეიძლება საუზმეზე?", a: "სადილის და ვახშმის! 🍽️" },
  { q: "18. რა მიდის წინ და არასოდეს ბრუნდება უკან?", a: "დრო ⏰" },
  {
    q: "19. რითი იწყება «სასწაული» და რითი მთავრდება «სამყარო»?",
    a: "ასო «ს»-თი და ასო «ო»-თი! 🔤",
  },
  {
    q: "20. ჭაში ჩავარდა ლოკოკინა. დღისით 3 მეტრს ასდის, ღამით 2 მეტრით ჩამოდის. ჭა 10 მეტრიანია. რამდენ დღეში ამოვა?",
    a: "8 დღეში (მე-8 დღეს ასდის 3 მეტრს და უკვე ამოვიდა, აღარ ჩასრიალდება)! 🐌",
  },
];

export default function Page() {
  const [openRiddle, setOpenRiddle] = useState<number | null>(null);
  const [openPuzzle, setOpenPuzzle] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0d0f1a] text-slate-100 p-4 md:p-8 font-sans relative overflow-hidden">
      {/* 🌈 Dynamic Neon Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          საიტი წარმატებით აწყობილია! 🚀
        </h1>
        <p className="text-center text-slate-400">
          ყველა მონაცემი და სინტაქსი სწორადაა დაკავშირებული.
        </p>
      </div>
    </main>
  );
}
("use client");
import React, { useState } from "react";

// --- მონაცემთა მასივები ---
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
  {
    id: "7",
    title: "7. 🍎 Finger Family Song",
    embedUrl: "https://www.youtube.com/embed/FY3M-4rmmO0",
    directUrl: "https://www.youtube.com/watch?v=FY3M-4rmmO0",
    category: "🎵 სიმღერა",
  },
  {
    id: "8",
    title: "8. 🐱 Super Simple Songs - Five Little Monkeys",
    embedUrl: "https://www.youtube.com/embed/b0NHrFNZWh0",
    directUrl: "https://www.youtube.com/watch?v=b0NHrFNZWh0",
    category: "🎵 სიმღერა",
  },
  {
    id: "9",
    title: "9. 🐻 Masha and the Bear - Jam Day",
    embedUrl: "https://www.youtube.com/embed/KYniUCGPGLs",
    directUrl: "https://www.youtube.com/watch?v=KYniUCGPGLs",
    category: "🎬 ანიმაცია",
  },
  {
    id: "10",
    title: "10. 🦆 Five Little Ducks",
    embedUrl: "https://www.youtube.com/embed/pZw9veQ76fo",
    directUrl: "https://www.youtube.com/watch?v=pZw9veQ76fo",
    category: "🎵 სიმღერა",
  },
  {
    id: "11",
    title: "11. 🌈 If You're Happy and You Know It",
    embedUrl: "https://www.youtube.com/embed/l4WNrvVjiTw",
    directUrl: "https://www.youtube.com/watch?v=l4WNrvVjiTw",
    category: "🎵 სიმღერა",
  },
  {
    id: "12",
    title: "12. 🚜 Blippi - Fire Truck Song",
    embedUrl: "https://www.youtube.com/embed/4b3O91K6aO8",
    directUrl: "https://www.youtube.com/watch?v=4b3O91K6aO8",
    category: "🔍 შემეცნებითი",
  },
  {
    id: "13",
    title: "13. 🔴 Bluey - Keepy Uppy",
    embedUrl: "https://www.youtube.com/embed/82w90j8G48Y",
    directUrl: "https://www.youtube.com/watch?v=82w90j8G48Y",
    category: "🎬 ანიმაცია",
  },
  {
    id: "14",
    title: "14. 🐵 Old MacDonald Had A Farm",
    embedUrl: "https://www.youtube.com/embed/_6HzoUcx3eo",
    directUrl: "https://www.youtube.com/watch?v=_6HzoUcx3eo",
    category: "🎵 სიმღერა",
  },
  {
    id: "15",
    title: "15. 🐝 The Ants Go Marching",
    embedUrl: "https://www.youtube.com/embed/Pjw2A3QU8Qg",
    directUrl: "https://www.youtube.com/watch?v=Pjw2A3QU8Qg",
    category: "🎵 სიმღერა",
  },
  {
    id: "16",
    title: "16. 🎈 Head Shoulders Knees & Toes",
    embedUrl: "https://www.youtube.com/embed/WX8HmogNyCY",
    directUrl: "https://www.youtube.com/watch?v=WX8HmogNyCY",
    category: "🎵 სიმღერა",
  },
  {
    id: "17",
    title: "17. 🐣 Humpty Dumpty",
    embedUrl: "https://www.youtube.com/embed/nrv495corBc",
    directUrl: "https://www.youtube.com/watch?v=nrv495corBc",
    category: "🎵 სიმღერა",
  },
  {
    id: "18",
    title: "18. 🔤 The ABC Song",
    embedUrl: "https://www.youtube.com/embed/75p-N9YKqNo",
    directUrl: "https://www.youtube.com/watch?v=75p-N9YKqNo",
    category: "📚 სწავლა",
  },
  {
    id: "19",
    title: "19. 🔢 The Numbers Song (1-10)",
    embedUrl: "https://www.youtube.com/embed/D0Ajq682yrA",
    directUrl: "https://www.youtube.com/watch?v=D0Ajq682yrA",
    category: "📚 სწავლა",
  },
  {
    id: "20",
    title: "20. 🎨 Color Song for Kids",
    embedUrl: "https://www.youtube.com/embed/zxIpA5nF_LY",
    directUrl: "https://www.youtube.com/watch?v=zxIpA5nF_LY",
    category: "📚 სწავლა",
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
  {
    id: "m4",
    title: "4. 🦁 The Lion King",
    embedUrl: "https://www.youtube.com/embed/4sj1MT05lAA",
    directUrl: "https://www.youtube.com/watch?v=4sj1MT05lAA",
    genre: "🐾 სათავგადასავლო",
    desc: "სიმბას საოცარი თავგადასავალი და მეფის გზა.",
  },
  {
    id: "m5",
    title: "5. 🎈 Up",
    embedUrl: "https://www.youtube.com/embed/ORFWdXl_zJ4",
    directUrl: "https://www.youtube.com/watch?v=ORFWdXl_zJ4",
    genre: "🎈 სათავგადასავლო",
    desc: "მოხუცი კარლისა და პატარა რასელის მოგზაურობა მფრინავი სახლით.",
  },
  {
    id: "m6",
    title: "6. 🤖 Wall-E",
    embedUrl: "https://www.youtube.com/embed/alIq_wG9fnk",
    directUrl: "https://www.youtube.com/watch?v=alIq_wG9fnk",
    genre: "🤖 სამეცნიერო",
    desc: "პატარა რობოტი, რომელმაც დედამიწაზე სიყვარული იპოვა.",
  },
  {
    id: "m7",
    title: "7. 🐼 Kung Fu Panda",
    embedUrl: "https://www.youtube.com/embed/PXi3Mv6KMzY",
    directUrl: "https://www.youtube.com/watch?v=PXi3Mv6KMzY",
    genre: "🥋 ექშენი",
    desc: "პოს გარდასახვა ჩვეულებრივი პანდიდან დრაკონის მეომრად.",
  },
  {
    id: "m8",
    title: "8. 🏎️ Cars",
    embedUrl: "https://www.youtube.com/embed/SbXIj2T-_uk",
    directUrl: "https://www.youtube.com/watch?v=SbXIj2T-_uk",
    genre: "🏎️ სპორტული",
    desc: "ელვა მაკუინის გაკვეთილი: მეგობრობა უმთავრესია.",
  },
  {
    id: "m9",
    title: "9. 🧠 Inside Out",
    embedUrl: "https://www.youtube.com/embed/seMwpP0yeu4",
    directUrl: "https://www.youtube.com/watch?v=seMwpP0yeu4",
    genre: "🧠 ფსიქოლოგიური",
    desc: "ემოციები პატარა რაილის გონებაში.",
  },
  {
    id: "m10",
    title: "10. 🐉 How to Train Your Dragon",
    embedUrl: "https://www.youtube.com/embed/oKiYuIsLyXY",
    directUrl: "https://www.youtube.com/watch?v=oKiYuIsLyXY",
    genre: "🐉 ფენტეზი",
    desc: "ჰიკაპისა და დრაკონ უკბილოს (Toothless) დიდი მეგობრობა.",
  },
  {
    id: "m11",
    title: "11. 🚢 Titanic",
    embedUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ",
    directUrl: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
    genre: "📜 ისტორიული",
    desc: "ისტორიული და დრამატული მოგზაურობა ოკეანეში.",
  },
  {
    id: "m12",
    title: "12. 🪐 Avatar",
    embedUrl: "https://www.youtube.com/embed/5PSNL1qE6VY",
    directUrl: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    genre: "🌌 სამეცნიერო",
    desc: "პანდორას უცხო პლანეტის საოცარი ბუნება.",
  },
  {
    id: "m13",
    title: "13. 🍫 Charlie & Chocolate Factory",
    embedUrl: "https://www.youtube.com/embed/OFVGCUIXJls",
    directUrl: "https://www.youtube.com/watch?v=OFVGCUIXJls",
    genre: "🍫 ფენტეზი",
    desc: "ჩარლის თავგადასავალი ვილი ვონკას ჯადოსნურ ფაბრიკაში.",
  },
  {
    id: "m14",
    title: "14. 🎒 Home Alone",
    embedUrl: "https://www.youtube.com/embed/jEDaVHmw7r4",
    directUrl: "https://www.youtube.com/watch?v=jEDaVHmw7r4",
    genre: "😂 კომედია",
    desc: "კევინის მხიარული ბრძოლა სახლის დასაცავად.",
  },
  {
    id: "m15",
    title: "15. 🦸‍♂️ The Incredibles",
    embedUrl: "https://www.youtube.com/embed/eZbZbC92070",
    directUrl: "https://www.youtube.com/watch?v=eZbZbC92070",
    genre: "🦸‍♂️ ექშენი",
    desc: "სუპერგმირების ოჯახი, რომლებიც სამყაროს იცავენ.",
  },
  {
    id: "m16",
    title: "16. 🦍 Jumanji",
    embedUrl: "https://www.youtube.com/embed/2QKg5SZ_35I",
    directUrl: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
    genre: "🌴 ექშენი",
    desc: "თამაში, რომელიც მოთამაშეებს რეალურ ჯუნგლებში გადაისვრის.",
  },
  {
    id: "m17",
    title: "17. 🌊 Moana",
    embedUrl: "https://www.youtube.com/embed/LKFuXETZUsI",
    directUrl: "https://www.youtube.com/watch?v=LKFuXETZUsI",
    genre: "🌊 ანიმაცია",
    desc: "მოანას მოგზაურობა ოკეანეში ხალხის გადასარჩენად.",
  },
  {
    id: "m18",
    title: "18. 🦊 Zootopia",
    embedUrl: "https://www.youtube.com/embed/jWM0ct-OLsM",
    directUrl: "https://www.youtube.com/watch?v=jWM0ct-OLsM",
    genre: "🔍 დეტექტივი",
    desc: "ცხოველთა დიდ ქალაქში გამომძიებელი კურდღლის ისტორია.",
  },
  {
    id: "m19",
    title: "19. 🦖 Jurassic Park",
    embedUrl: "https://www.youtube.com/embed/lc0UehYemQA",
    directUrl: "https://www.youtube.com/watch?v=lc0UehYemQA",
    genre: "🦖 სათავგადასავლო",
    desc: "დინოზავრების გაცოცხლებული სამყარო.",
  },
  {
    id: "m20",
    title: "20. ⚡ Percy Jackson",
    embedUrl: "https://www.youtube.com/embed/xko1Mx5w4SM",
    directUrl: "https://www.youtube.com/watch?v=xko1Mx5w4SM",
    genre: "⚡ ფენტეზი",
    desc: "ბერძნული მითოლოგიის ღმერთები და ახალგაზრდა ნახევარღმერთი.",
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
  {
    q: "3. ოთახში 3 ნათურაა, გარეთ - 3 ჩამრთველი. ოთახში მხოლოდ ერთხელ შესვლა შეგიძლია. როგორ გაიგებ რომელი ჩამრთველი რომლისაა?",
    a: "ჩართე 1-ლი ჩამრთველი 5 წუთით, გამორთე და ჩართე მე-2. შედი ოთახში: ანთებული = მე-2, ცხელი = 1-ლი, ცივი = მე-3! 💡",
  },
  {
    q: "4. მამას და შვილს ერთად 110 წელი შეუსრულდათ. მამა შვილზე 100 წლით უფროსია. რამდენი წლისაა შვილი?",
    a: "შვილი 5 წლისაა, მამა 105 წლის (105 + 5 = 110)! 👨‍👦",
  },
  {
    q: "5. რა ჩნდება წელიწადში ერთხელ, კვირაში ორჯერ და დღეში არცერთხელ?",
    a: "ასო-ბგერა «ა» (წელ-ი-ალ-დ-შ-ი, კვ-ი-რ-ა-შ-ი)! 🔤",
  },
  {
    q: "6. მატარებელი მიდის აღმოსავლეთით 100 კმ/სთ სიჩქარით. საით მიდის ელექტრომატარებლის ბოლი?",
    a: "ელექტრომატარებელს ბოლი არ აქვს! 🚆",
  },
  {
    q: "7. ორმა მამამ და ორმა შვილმა 3 ვაშლი შეიჭამა, თითომ თითო მთლიანი ვაშლი. როგორ?",
    a: "ისინი იყვნენ: პაპა, მამა და შვილი (სულ 3 ადამიანი)! 🍎",
  },
  {
    q: "8. რიცხვი 8 როგორ გავყოთ შუაზე ისე, რომ 0 მივიღოთ?",
    a: "ჰორიზონტალურად გავჭრათ შუაზე 8 და მივიღებთ ორ 0-ს! 8️⃣",
  },
  {
    q: "9. რას აქვს გული, რომელიც არ ცემს?",
    a: "კარტოფილს ან არტიშოკს / ხეს! 🥔",
  },
  { q: "10. რა დადის ფეხების გარეშე, ტირის თვალების გარეშე?", a: "ღრუბელი ☁️" },
  {
    q: "11. 100 კილოგრამი ბუმბული უფრო მძიმეა თუ 100 კილოგრამი რკინა?",
    a: "ორივე თანაბარია - ორივე 100 კილოგრამია! ⚖️",
  },
  { q: "12. რა უფრო იმატებს, რაც უფრო მეტად ამშრალებ?", a: "პირსახოცი 🧺" },
  {
    q: "13. კაცს ჰყავდა 17 ცხვარი. 9-ის გარდა ყველა მოკვდა. რამდენი ცხვარი დარჩა?",
    a: "დარჩა 9 ცხვარი! 🐑",
  },
  {
    q: "14. თუ რბოლაში გადაასწარი მეორე ადგილზე მყოფს, მერამდენე ადგილზე ხარ?",
    a: "მეორე ადგილზე! 🏃‍♂️",
  },
  { q: "15. რა ქრება მაშინვე, როცა მის სახელს იტყვი?", a: "სიჩუმე 🤫" },
  {
    q: "16. სახლს აქვს 4 მხარე, ოთხივე სამხრეთით უყურებს. დათვი გაიარა სახლთან. რა ფერისაა დათვი?",
    a: "თეთრია (სახლი დგას ჩრდილოეთ პოლუსზე)! 🐻‍❄️",
  },
];

const riddles = [
  { q: "17. რისი ჭამა არ შეიძლება საუზმეზე?", a: "სადილის და ვახშმის! 🍽️" },
  { q: "18. რა მიდის წინ და არასოდეს ბრუნდება უკან?", a: "დრო ⏰" },
  {
    q: "19. რითი იწყება «სასწაული» და რითი მთავრდება «სამყარო»?",
    a: "ასო «ს»-თი და ასო «ო»-თი! 🔤",
  },
  {
    q: "20. ჭაში ჩავარდა ლოკოკინა. დღისით 3 მეტრს ასდის, ღამით 2 მეტრით ჩამოდის. ჭა 10 მეტრიანია. რამდენ დღეში ამოვა?",
    a: "8 დღეში (მე-8 დღეს ასდის 3 მეტრს და უკვე ამოვიდა, აღარ ჩასრიალდება)! 🐌",
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<
    "toddler" | "movies" | "football" | "puzzles"
  >("toddler");
  const [openPuzzle, setOpenPuzzle] = useState<number | null>(null);
  const [openRiddle, setOpenRiddle] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#070913] text-slate-100 p-4 md:p-8 font-sans relative overflow-hidden">
      {/* 🌟 CSS Animations for Floating Background Glows */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.08);
          }
        }
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
        .blob-1 {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .blob-2 {
          animation: floatSlow 10s ease-in-out infinite reverse;
        }
        .blob-3 {
          animation: floatSlow 12s ease-in-out infinite 1s;
        }
      `}</style>

      {/* 🌈 Dynamic Moving Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[140px] blob-1"></div>
        <div className="absolute top-[30%] right-[5%] w-[450px] h-[450px] bg-cyan-500/30 rounded-full blur-[140px] blob-2"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[160px] blob-3"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Bounce Effect */}
        <header className="text-center mb-10 pt-4">
          <div className="inline-block animate-bounce mb-2 text-4xl">🚀</div>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-3 tracking-wide bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(236,72,153,0.3)]">
            საბავშვო და საოჯახო პორტალი
          </h1>
          <p className="text-slate-300 text-sm md:text-lg font-medium">
            აირჩიეთ კატეგორია და ჩაერთეთ მხიარულ და ჯადოსნურ სამყაროში! ✨
          </p>
        </header>

        {/* Navigation Tabs with Hover Scale Animation */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("toddler")}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              activeTab === "toddler"
                ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-xl shadow-pink-500/40 ring-4 ring-pink-400/30"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60"
            }`}
          >
            👶 პატარების ვიდეოები
          </button>
          <button
            onClick={() => setActiveTab("movies")}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              activeTab === "movies"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/40 ring-4 ring-cyan-400/30"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60"
            }`}
          >
            🎬 საოჯახო ფილმები
          </button>
          <button
            onClick={() => setActiveTab("football")}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              activeTab === "football"
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/40 ring-4 ring-emerald-400/30"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60"
            }`}
          >
            ⚽ ფეხბურთის ვარჯიშები
          </button>
          <button
            onClick={() => setActiveTab("puzzles")}
            className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              activeTab === "puzzles"
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xl shadow-amber-500/40 ring-4 ring-amber-400/30"
                : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60"
            }`}
          >
            🧩 გამოცანები და ამოცანები
          </button>
        </div>

        {/* TAB 1: Toddler Videos */}
        {activeTab === "toddler" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toddlerVideos.map((vid) => (
              <div
                key={vid.id}
                className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/20"
              >
                <div>
                  <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-bold inline-block mb-3 border border-pink-500/30">
                    {vid.category}
                  </span>
                  <h3 className="font-bold text-base mb-3 text-slate-100">
                    {vid.title}
                  </h3>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 mb-4 shadow-inner">
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
                  className="text-center text-xs font-bold text-pink-300 hover:text-white bg-pink-950/40 hover:bg-pink-600 py-2.5 rounded-xl border border-pink-900/50 transition-all duration-300 shadow-sm"
                >
                  YouTube-ზე ნახვა ↗
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Movies */}
        {activeTab === "movies" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movieVideos.map((movie) => (
              <div
                key={movie.id}
                className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div>
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full font-bold inline-block mb-3 border border-cyan-500/30">
                    {movie.genre}
                  </span>
                  <h3 className="font-bold text-base mb-2 text-slate-100">
                    {movie.title}
                  </h3>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {movie.desc}
                  </p>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 mb-4 shadow-inner">
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
                  className="text-center text-xs font-bold text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-600 py-2.5 rounded-xl border border-cyan-900/50 transition-all duration-300 shadow-sm"
                >
                  ტრეილერის ნახვა ↗
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Football */}
        {activeTab === "football" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {kidsFootball.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div>
                  <h3 className="font-extrabold text-lg mb-2 text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <a
                  href={item.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-bold text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-600 py-3 rounded-2xl border border-emerald-900/50 transition-all duration-300 shadow-sm"
                >
                  ვიდეო გაკვეთილის ნახვა ↗
                </a>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: Puzzles & Riddles */}
        {activeTab === "puzzles" && (
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Puzzles Section */}
            <div>
              <h2 className="text-2xl font-black mb-5 text-amber-400 flex items-center gap-3">
                <span>🧩</span> ლოგიკური ამოცანები
              </h2>
              <div className="space-y-4">
                {puzzles.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 transition-all duration-300 hover:border-amber-500/50"
                  >
                    <p className="font-semibold text-slate-100 mb-3 text-base">
                      {p.q}
                    </p>
                    <button
                      onClick={() =>
                        setOpenPuzzle(openPuzzle === idx ? null : idx)
                      }
                      className="text-xs font-bold px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-sm"
                    >
                      {openPuzzle === idx
                        ? "პასუხის დამალვა 🔼"
                        : "პასუხის ნახვა 👁️"}
                    </button>
                    {openPuzzle === idx && (
                      <div className="mt-4 p-4 bg-amber-950/40 border border-amber-900/60 rounded-xl text-sm text-amber-200 font-medium animate-fadeIn">
                        {p.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Riddles Section */}
            <div>
              <h2 className="text-2xl font-black mb-5 text-purple-400 flex items-center gap-3">
                <span>🤔</span> გამოცანები
              </h2>
              <div className="space-y-4">
                {riddles.map((r, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 transition-all duration-300 hover:border-purple-500/50"
                  >
                    <p className="font-semibold text-slate-100 mb-3 text-base">
                      {r.q}
                    </p>
                    <button
                      onClick={() =>
                        setOpenRiddle(openRiddle === idx ? null : idx)
                      }
                      className="text-xs font-bold px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-sm"
                    >
                      {openRiddle === idx
                        ? "პასუხის დამალვა 🔼"
                        : "პასუხის ნახვა 👁️"}
                    </button>
                    {openRiddle === idx && (
                      <div className="mt-4 p-4 bg-purple-950/40 border border-purple-900/60 rounded-xl text-sm text-purple-200 font-medium animate-fadeIn">
                        {r.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
