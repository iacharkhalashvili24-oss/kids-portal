"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"; //

export default function Home() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<"toddler" | "kids" | "teens">(
    "teens",
  );
  const [kidsSubTab, setKidsSubTab] = useState<
    "football" | "tales" | "science" | "riddles"
  >("football");
  const [teensSubTab, setTeensSubTab] = useState<
    "movies" | "football" | "topics" | "puzzles"
  >("movies");

  // 👶 1. 20 ვიდეო 2-5 წლის პატარებისთვის
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

  const [selectedVideo, setSelectedVideo] = useState(toddlerVideos[0]);

  // 🎬 20 ფილმი
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
      id: "10",
      title: "10. 🐉 How to Train Your Dragon",
      embedUrl: "https://www.youtube.com/embed/oKiYuIsLyXY",
      directUrl: "https://www.youtube.com/watch?v=oKiYuIsLyXY",
      genre: "🐉 ფენტეზი",
      desc: "ჰიკაპისა და დრაკონ უკბილოს (Toothless) დიდი მეგობრობა.",
    },
    {
      id: "11",
      title: "11. 🚢 Titanic",
      embedUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ",
      directUrl: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
      genre: "📜 ისტორიული",
      desc: "ისტორიული და დრამატული მოგზაურობა ოკეანეში.",
    },
    {
      id: "12",
      title: "12. 🪐 Avatar",
      embedUrl: "https://www.youtube.com/embed/5PSNL1qE6VY",
      directUrl: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
      genre: "🌌 სამეცნიერო",
      desc: "პანდორას უცხო პლანეტის საოცარი ბუნება.",
    },
    {
      id: "13",
      title: "13. 🍫 Charlie & Chocolate Factory",
      embedUrl: "https://www.youtube.com/embed/OFVGCUIXJls",
      directUrl: "https://www.youtube.com/watch?v=OFVGCUIXJls",
      genre: "🍫 ფენტეზი",
      desc: "ჩარლის თავგადასავალი ვილი ვონკას ჯადოსნურ ფაბრიკაში.",
    },
    {
      id: "14",
      title: "14. 🎒 Home Alone",
      embedUrl: "https://www.youtube.com/embed/jEDaVHmw7r4",
      directUrl: "https://www.youtube.com/watch?v=jEDaVHmw7r4",
      genre: "😂 კომედია",
      desc: "კევინის მხიარული ბრძოლა სახლის დასაცავად.",
    },
    {
      id: "15",
      title: "15. 🦸‍♂️ The Incredibles",
      embedUrl: "https://www.youtube.com/embed/eZbZbC92070",
      directUrl: "https://www.youtube.com/watch?v=eZbZbC92070",
      genre: "🦸‍♂️ ექშენი",
      desc: "სუპერგმირების ოჯახი, რომლებიც სამყაროს იცავენ.",
    },
    {
      id: "16",
      title: "16. 🦍 Jumanji",
      embedUrl: "https://www.youtube.com/embed/2QKg5SZ_35I",
      directUrl: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
      genre: "🌴 ექშენი",
      desc: "თამაში, რომელიც მოთამაშეებს რეალურ ჯუნგლებში გადაისვრის.",
    },
    {
      id: "17",
      title: "17. 🌊 Moana",
      embedUrl: "https://www.youtube.com/embed/LKFuXETZUsI",
      directUrl: "https://www.youtube.com/watch?v=LKFuXETZUsI",
      genre: "🌊 ანიმაცია",
      desc: "მოანას მოგზაურობა ოკეანეში ხალხის გადასარჩენად.",
    },
    {
      id: "18",
      title: "18. 🦊 Zootopia",
      embedUrl: "https://www.youtube.com/embed/jWM0ct-OLsM",
      directUrl: "https://www.youtube.com/watch?v=jWM0ct-OLsM",
      genre: "🔍 დეტექტივი",
      desc: "ცხოველთა დიდ ქალაქში გამომძიებელი კურდღლის ისტორია.",
    },
    {
      id: "19",
      title: "19. 🦖 Jurassic Park",
      embedUrl: "https://www.youtube.com/embed/lc0UehYemQA",
      directUrl: "https://www.youtube.com/watch?v=lc0UehYemQA",
      genre: "🦖 სათავგადასავლო",
      desc: "დინოზავრების გაცოცხლებული სამყარო.",
    },
    {
      id: "20",
      title: "20. ⚡ Percy Jackson",
      embedUrl: "https://www.youtube.com/embed/xko1Mx5w4SM",
      directUrl: "https://www.youtube.com/watch?v=xko1Mx5w4SM",
      genre: "⚡ ფენტეზი",
      desc: "ბერძნული მითოლოგიის ღმერთები და ახალგაზრდა ნახევარღმერთი.",
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState(movieVideos[0]);

  // 🎨 2. 6-9 წლის სექციის მონაცემები
  const kidsFootball = [
    {
      title: "1. ⚽ ბურთის ტარება ტერფით",
      desc: "მჭიდრო დრიბლინგი და ბურთის კონტროლი.",
      directUrl: "https://www.youtube.com/watch?v=3Uj34B3I51I",
    },
    {
      title: "2. 🎯 ზუსტი პასი ფეხის შიდა მხარით",
      desc: "როგორ მივცეთ სუფთა და ზუსტი პასი გუნდელს.",
      directUrl: "https://www.youtube.com/watch?v=k9Y_s6j908E",
    },
    {
      title: "3. 🥅 ძლიერი დარტყმა კარში",
      desc: "დარტყმის სწორი ტექნიკა და ბალანსი.",
      directUrl: "https://www.youtube.com/watch?v=R7Cq7B3O4m0",
    },
    {
      title: "4. 🔄 ბურთის გაჩერება (მიღება)",
      desc: "როგორ გავაჩეროთ ჰაერიდან და მიწიდან მომავალი ბურთი.",
      directUrl: "https://www.youtube.com/watch?v=v9p4YvP1mQE",
    },
    {
      title: "5. 🏃‍♂️ სისწრაფე ბურთით",
      desc: "სწრაფი გარბენი და მიმართულების შეცვლა.",
      directUrl: "https://www.youtube.com/watch?v=J1Zk1A11K8M",
    },
    {
      title: "6. 🪄 მარტივი ფინტი: Step Over",
      desc: "მცველის მოტყუება მარტივი მოძრაობით.",
      directUrl: "https://www.youtube.com/watch?v=5a4G4fA6x8o",
    },
    {
      title: "7. 🛡️ დაცვაში თამაში",
      desc: "როგორ ავართვათ ბურთი მეტოქეს წესების დარღვევის გარეშე.",
      directUrl: "https://www.youtube.com/watch?v=83p4kIq_1m0",
    },
    {
      title: "8. 🧠 თავით თამაში",
      desc: "უსაფრთხო და ზუსტი დარტყმა თავით.",
      directUrl: "https://www.youtube.com/watch?v=qP2n_7K9oA0",
    },
    {
      title: "9. 🧤 მეკარის საფუძვლები",
      desc: "როგორ დავიჭიროთ ბურთი და დავდგეთ სწორად კარში.",
      directUrl: "https://www.youtube.com/watch?v=9Xp3z8Y_1mA",
    },
    {
      title: "10. 👟 კუთხურის ჩაწოდება",
      desc: "კუთხურიდან ბურთის ჩაწოდების ტექნიკა.",
      directUrl: "https://www.youtube.com/watch?v=k3B_4M8p9zA",
    },
    {
      title: "11. 📐 ჯარიმის დარტყმა",
      desc: "როგორ დავარტყათ საჯარიმო დარტყმა კედლის ავლით.",
      directUrl: "https://www.youtube.com/watch?v=1X7B_3N9mA0",
    },
    {
      title: "12. ⚽ აკენწვლა (Juggle)",
      desc: "ბურთის აკენწვლის სწავლა ნაბიჯ-ნაბიჯ.",
      directUrl: "https://www.youtube.com/watch?v=7M_3X9zK2mA",
    },
    {
      title: "13. 🔄 Cruyff Turn ფინტი",
      desc: "ლეგენდარული კრუიფის მოტყუების ილეთი.",
      directUrl: "https://www.youtube.com/watch?v=9M_2N7X9mA0",
    },
    {
      title: "14. 🏃‍♂️ სირბილი ბურთის გარეშე",
      desc: "როგორ გათავისუფლდე მცველისგან და გაეხსნა პასს.",
      directUrl: "https://www.youtube.com/watch?v=2B_8N9K1mA0",
    },
    {
      title: "15. 🛑 ბურთის დაფარვა ტანით",
      desc: "ბურთის დაცვა მეტოქისგან სხეულის გამოყენებით.",
      directUrl: "https://www.youtube.com/watch?v=3C_9M8X2mA0",
    },
    {
      title: "16. 🥅 პენალტის დარტყმის საიდუმლო",
      desc: "ფსიქოლოგია და სიზუსტე პენალტის დროს.",
      directUrl: "https://www.youtube.com/watch?v=4D_7M9N3mA0",
    },
    {
      title: "17. 🤾‍♂️ აუტის მოწოდება",
      desc: "როგორ გადმოვარგოთ ბურთი ხელით წესების დაცვით.",
      directUrl: "https://www.youtube.com/watch?v=5E_8M9P4mA0",
    },
    {
      title: "18. ⚡ სწრაფი კონტრშეტევა",
      desc: "როგორ გადავიდეთ დაცვიდან შეტევაში წამებში.",
      directUrl: "https://www.youtube.com/watch?v=6F_9M0Q5mA0",
    },
    {
      title: "19. 🧘‍♂️ გახურება და გაჭიმვები",
      desc: "აუცილებელი სავარჯიშოები ტრავმების თავიდან ასაცილებლად.",
      directUrl: "https://www.youtube.com/watch?v=7G_0N1R6mA0",
    },
    {
      title: "20. 🏆 გუნდური თამაში და ურთიერთპატივისცემა",
      desc: "რატომ არის ფეხბურთში უმთავრესი მეგობრობა.",
      directUrl: "https://www.youtube.com/watch?v=8H_1O2S7mA0",
    },
  ];

  const tales = [
    {
      title: "1. 🦊 მელა და ყანჩა",
      text: "მელამ ყანჩა დაპატიჟა და ბრტყელ თეფშზე ფაფა დაასხა. ყანჩამ ვერაფერი შეჭამა. მეორე დღეს ყანჩამ დოქში ჩაასხა საჭმელი...",
    },
    {
      title: "2. 🐭 კაცი და დათვი",
      text: "კაცმა და დათვმა ბოლოკი დათესეს. კაცმა მიწისზედა აიღო, დათვმა მიწისქვეშა. კაცს ტკბილი ბოლოკი დარჩა, დათვს - ფოთლები.",
    },
    {
      title: "3. 🐺 მგელი და თხა",
      text: "თხამ თიკნები სახლში დატოვა და გააფრთხილა: კარი არავის გაუღოთო. ეშმაკმა მგელმა ხმა დაიწვრილა...",
    },
    {
      title: "4. 🦁 ლომი და თაგვი",
      text: "თაგვმა ლომს სიცოცხლე სთხოვა. ლომმა შეიბრალა. მოგვიანებით თაგვმა მონადირის ბადეში გაბმული ლომი გადაარჩინა.",
    },
    {
      title: "5. 🐜 ჭიანჭველა და ჭრიჭინა",
      text: "ჭრიჭინა მთელი ზაფხული მღეროდა, ჭიანჭველა კი შრომობდა. ზამთარში ჭრიჭინა მშიერი დარჩა.",
    },
    {
      title: "6. 🐇 კურდღელი და კუ",
      text: "კურდღელს ეგონა კუს იოლად აჯობებდა სირბილში, მაგრამ გზაში ჩაეძინა და სიბეჯითეში კუმ გაიმარჯვა.",
    },
    {
      title: "7. 🦅 არწივი და მელა",
      text: "არწივმა და მელამ დამეგობრება გადაწყვიტეს, თუმცა პატიოსნება და სიტყვის შეworkspace უმთავრესია.",
    },
    {
      title: "8. 🐓 ყოჩაღი მამალი",
      text: "მამალმა ეზოში მშვიდობა დაიცვა და ქორს თავისი ეშმაკობით აჯობა.",
    },
    {
      title: "9. 🐻 დათვი და სამი ძმა",
      text: "სამმა ძმამ ჭკუითა და ერთსულოვნებით ტყეში დიდი დაბრკოლება გადალახა.",
    },
    {
      title: "10. 🐸 ბაყაყების მეფე",
      text: "ბაყაყებს მოწყინდათ ტბორში და მეფე ითხოვეს, თუმცა ბოლოს მიხვდნენ, რომ თავისუფლება სჯობს.",
    },
    {
      title: "11. 🍇 მელა და ყურძენი",
      text: "მელამ ყურძენს ვერ მიწვდა და თქვა: მაინც მჟავეაო.",
    },
    {
      title: "12. 🐟 ოქროს თევზი",
      text: "მოხუცმა ოქროს თევზი დაიჭირა, რომელმაც სურვილები შეუსრულა, თუმცა სიბორბოტემ ყველაფერი წაართვა.",
    },
    {
      title: "13. 🏡 სამი გოჭი",
      text: "მხოლოდ მყარად აშენებულმა აგურის სახლმა გადაარჩინა ძმები მგლისგან.",
    },
    {
      title: "14. 🦆 უშნო იხვის ჭუკი",
      text: "ყველასგან გარიყული პატარა ფრინველი ბოლოს ულამაზეს გედოვნად გადაიქცა.",
    },
    {
      title: "15. 🧙‍♂️ ჯადოსნური ცერცვი",
      text: "ბიჭმა ცერცვი დარგო, რომელიც ცამდე გაიზარდა და ჯადოსნურ სამყაროში მოხვდა.",
    },
    {
      title: "16. 👞 ჩექმებიანი კატა",
      text: "ჭკვიანმა კატამ თავისი პატრონი დიდებულ მეფედ და მდიდარ კაცად აქცია.",
    },
    {
      title: "17. 🥖 პატარა წითელი ქათამი",
      text: "ქათამმა მარცვალი დათესა, მოიმკო და პური გამოაცხო - ჭამა კი მხოლოდ იმას ეკუთვნის, ვინც იშრომა.",
    },
    {
      title: "18. 🐺 მგელი და შვიდი თიკანი",
      text: "დედა თხამ თავისი ჭკუითა და სიმამაცით თიკნები მგლის მუცლიდან გადაარჩინა.",
    },
    {
      title: "19. 👑 შიშველი მეფე",
      text: "ორი ცრუ ოსტატი მეფეს «უხილავ ტანსაცმელს» უნაკერავდა, სანამ პატარა ბავშვმა სიმართლე არ თქვა.",
    },
    {
      title: "20. ❄️ თოვლის დედოფალი",
      text: "გერდას დიდმა სიყვარულმა და ერთგულებამ კაის გულიდან ყინული გაადნო.",
    },
  ];

  const science = [
    {
      icon: "🌈",
      title: "1. ცისარტყელა",
      text: "მზის სინათლე წყლის წვეთებში გაივლის და 7 ფერად იშლება!",
    },
    {
      icon: "🐝",
      title: "2. ფუტკრები",
      text: "ფუტკრები ერთმანეთს ყვავილების ადგილს სპეციალური ცეკვით ატყობინებენ.",
    },
    {
      icon: "🌋",
      title: "3. ვულკანები",
      text: "ვულკანი არის დედამიწის ზედაპირის ხვრელი, საიდანაც ცხელი ლავა ამოედინება.",
    },
    {
      icon: "🐬",
      title: "4. დელფინები",
      text: "დელფინები ერთმანეთს სახელებით (სპეციალური სტვენით) უხმობენ.",
    },
    {
      icon: "🌌",
      title: "5. ვარსკვლავები",
      text: "მზეც ვარსკვლავია! ის უბრალოდ დედამიწასთან ყველაზე ახლოსაა.",
    },
    {
      icon: "🌱",
      title: "6. ფოტოლინთეზი",
      text: "მცენარეები მზის სინათლით ჟანგბადს წარმოქმნიან, რომლითაც ჩვენ ვსუნთქავთ.",
    },
    {
      icon: "🌙",
      title: "7. მთვარის ფაზები",
      text: "მთვარე ფორმას არ იცვლის, ის უბრალოდ მზისგან სხვადასხვანაირად განათდება.",
    },
    {
      icon: "🐘",
      title: "8. სპილოები",
      text: "სპილოებს საოცარი მეხსიერება აქვთ და წყლის სუნს კილომეტრებიდან გრძნობენ.",
    },
    {
      icon: "🧊",
      title: "9. აისბერგები",
      text: "აისბერგის მხოლოს 10% ჩანს წყლის ზემოთ, 90% წყალქვეშაა!",
    },
    {
      icon: "🦒",
      title: "10. ჟირაფები",
      text: "ჟირაფის ენა 50 სანტიმეტრამდე სიგრძისაა და ლურჯი/იისფერი ფერი აქვს.",
    },
    {
      icon: "🐙",
      title: "11. რვაფეხა",
      text: "რვაფეხას 3 გული აქვს და სისხლი ლურჯი ფერის აქვს!",
    },
    {
      icon: "⚡",
      title: "12. ელვა და ქუხილი",
      text: "სინათლე ხმაზე სწრაფია, ამიტომ ჯერ ელვას ვხედავთ და მერე ქუხილი გვესმის.",
    },
    {
      icon: "🦘",
      title: "13. კენგურუ",
      text: "პატარა კენგურუ დაბადებისას ცერა თითის ზომისაა.",
    },
    {
      icon: "🐧",
      title: "14. პინგვინები",
      text: "პინგვინები ფრინველები არიან, მაგრამ ფრენის ნაცვლად წყალში ძალიან სწრაფად ცურავენ.",
    },
    {
      icon: "🦴",
      title: "15. ადამიანის ძვლები",
      text: "ბავშვებს ზრდასრულებზე მეტი ძვალი აქვთ, ზოგიერთი ზრდასთან ერთად შეერთდება.",
    },
    {
      icon: "🐝",
      title: "16. თაფლი",
      text: "თაფლი ერთადერთი საჭმელია, რომელიც არასოდეს ფუჭდება (ათასობით წელი)!",
    },
    {
      icon: "🦖",
      title: "17. დინოზავრები",
      text: "დინოზავრები დედამიწაზე 160 მილიონ წელზე მეტხანს ცხოვრობდნენ.",
    },
    {
      icon: "🌊",
      title: "18. ოკეანეები",
      text: "დედამიწის ზედაპირის 70%-ზე მეტი წყლითაა დაფარული.",
    },
    {
      icon: "🪐",
      title: "19. სატურნი",
      text: "სატურნის რგოლები ყინულის, ქვისა და მტვრის ნაწილაკებისგან შედგება.",
    },
    {
      icon: "🐜",
      title: "20. ჭიანჭველები",
      text: "ჭიანჭველას შეუძლია თავის წონაზე 50-ჯერ მძიმე ტვირთი აწიოს.",
    },
  ];

  const riddles = [
    {
      question: "1. ოთხი ფეხი აქვს და სიარული არ შეუძლია, რა არის?",
      answer: "სკამი / მაგიდა 🪑",
    },
    {
      question: "2. რაც უფრო მეტს იღებ, მით უფრო დიდი ხდება, რა არის?",
      answer: "ორმო 🕳️",
    },
    {
      question:
        "3. დილით ოთხ ფეხზე დადის, შუადღისას ორზე, საღამოს სამზე. ვინ არის?",
      answer: "ადამიანი (ბავშვობაში, ზრდასრული, მოხუცებულობაში) 🚶",
    },
    {
      question:
        "4. ცრემლს არ ღვრის, მაგრამ როცა ჭრიან, ყველას ატირებს. რა არის?",
      answer: "ხახვი 🧅",
    },
    {
      question: "5. თეთრია და რძე არ არის, ტკბილია და შაქარი არ არის. რა არის?",
      answer: "თოვლი ❄️",
    },
    {
      question:
        "6. სახლი აქვს, მაგრამ შიგნით არავის უშვებს, გარეთ კი სულ დაატარებს. რა არის?",
      answer: "ლოკოკინა 🐌",
    },
    {
      question:
        "7. ცაში დაფრინავს, ფრთები არ აქვს, ტირის და თვალები არ აქვს. რა არის?",
      answer: "ღრუბელი ☁️",
    },
    {
      question: "8. თავი აქვს და თმა არ აქვს, წვიმაში იხსნება. რა არის?",
      answer: "ქოლგა ☂️",
    },
    {
      question:
        "9. წყალში იბადება, წყლის არ ეშინია, მაგრამ წყალში ჩავარდება და ქრება. რა არის?",
      answer: "მარილი 🧂",
    },
    {
      question: "10. მრგვალია, წითელია, ტკბილია და ხეზე ასხია. რა არის?",
      answer: "ვაშლი 🍎",
    },
    {
      question:
        "11. ყოველთვის შენთან ერთად დადის, მაგრამ ვერასოდეს შეეხები. რა არის?",
      answer: "ჩრდილი 👤",
    },
    {
      question: "12. კბილები აქვს და არ იკბინება. რა არის?",
      answer: "სავარცხელი 🪮",
    },
    {
      question:
        "13. პირი არ აქვს და ლაპარაკობს, ყური არ აქვს და ყველაფერი ესმის. რა არის?",
      answer: "ტელეფონი 📱",
    },
    {
      question: "14. წითელი ქუდი ახურავს, ტყეში დგას და შხამიანია. რა არის?",
      answer: "სოკო (შხამასოკო) 🍄",
    },
    {
      question:
        "15. მწვანე სამოსი აცვია, შიგნით წითელია და შავი თესლები აქვს. რა არის?",
      answer: "საზამთრო 🍉",
    },
    {
      question: "16. ფრთები აქვს და ვერ დაფრინავს, წყალში ცურავს. რა არის?",
      answer: "თევზი 🐟",
    },
    {
      question: "17. დილით ანათებს, ღამით იძინებს. რა არის?",
      answer: "მზე ☀️",
    },
    {
      question: "18. მუშაობს წიკ-წაკ, არასოდეს იღლება. რა არის?",
      answer: "საათი ⏰",
    },
    {
      question: "19. ზამთარში გვათბობს, ზაფხულში გვავიწყდება. რა არის?",
      answer: "ღუმელი / ქურთუკი 🧥",
    },
    {
      question:
        "20. წიგნივით იშლება, ფანჯარასავით ანათებს, შიგნით მულტფილმებია. რა არის?",
      answer: "ტაბლეტი / ტელევიზორი 📺",
    },
  ];

  const teensFootball = [
    {
      title: "1. ⚽ Rainbow Flick ტრიუკი",
      desc: "ბურთის ქუსლით ჰაერში აწევა და თავზე გადაგდება.",
      directUrl: "https://www.youtube.com/watch?v=5a4G4fA6x8o",
    },
    {
      title: "2. 🪄 Elastico (Ronaldo / Ronaldinho)",
      desc: "ფეხის გარეთა და შიდა მხარით სწრაფი მოტყუება.",
      directUrl: "https://www.youtube.com/watch?v=k9Y_s6j908E",
    },
    {
      title: "3. 🎯 Knuckleball ჯარიმა",
      desc: "როგორ დავარტყათ ბურთი ისე, რომ ჰაერში ტრაექტორია იცვალოს.",
      directUrl: "https://www.youtube.com/watch?v=R7Cq7B3O4m0",
    },
    {
      title: "4. 🔄 Rabona დარტყმა და პასი",
      desc: "ჯვარედინი ფეხით დარტყმის დახვეწილი ტექნიკა.",
      directUrl: "https://www.youtube.com/watch?v=v9p4YvP1mQE",
    },
    {
      title: "5. 🏃‍♂️ High Pressing ტაქტიკა",
      desc: "როგორ განვახორციელოთ გუნდური პრესინგი მეტოქის ნახევარზე.",
      directUrl: "https://www.youtube.com/watch?v=J1Zk1A11K8M",
    },
    {
      title: "6. 📐 Trivela (ფეხის გარეთა მხარით დარტყმა)",
      desc: "კვარაცხელიასა და მოტრიჩის საყვარელი დარტყმის ტექნიკა.",
      directUrl: "https://www.youtube.com/watch?v=83p4kIq_1m0",
    },
    {
      title: "7. 🧠 Tiki-Taka მოკლე პასების სისტემა",
      desc: "ბარსელონას სტილის სწრაფი მოკლე გადაცემები.",
      directUrl: "https://www.youtube.com/watch?v=qP2n_7K9oA0",
    },
    {
      title: "8. 🛡️ 1v1 დაცვის ტაქტიკა",
      desc: "როგორ შევაჩეროთ სწრაფი თავდამსხმელი ერთზე ერთზე.",
      directUrl: "https://www.youtube.com/watch?v=9Xp3z8Y_1mA",
    },
    {
      title: "9. ✂️ მაკრატელა დარტყმა (Bicycle Kick)",
      desc: "ჰაერში გადაბრუნებით დარტყმის უსაფრთხო სწავლა.",
      directUrl: "https://www.youtube.com/watch?v=k3B_4M8p9zA",
    },
    {
      title: "10. ⚡ Counter-Attack (სწრაფი შეტევა)",
      desc: "სივრცის სწრაფი ათვისება და 3-4 პასში გოლის გატანა.",
      directUrl: "https://www.youtube.com/watch?v=1X7B_3N9mA0",
    },
    {
      title: "11. 🧤 მეკარის რეფლექსები და Dive",
      desc: "ნახტომის ტექნიკა და რთული ბურთების მოგერიება.",
      directUrl: "https://www.youtube.com/watch?v=7M_3X9zK2mA",
    },
    {
      title: "12. ⚽ Around the World (ATW) აკენწვლა",
      desc: "ფრიስታილ ფეხბურთის ელემენტი აკენწვლისას.",
      directUrl: "https://www.youtube.com/watch?v=9M_2N7X9mA0",
    },
    {
      title: "13. 🎯 პენალტების სერიის ფსიქოლოგია",
      desc: "როგორ შევინარჩუნოთ სიმშვიდე და დავამარცხოთ მეკარე.",
      directUrl: "https://www.youtube.com/watch?v=2B_8N9K1mA0",
    },
    {
      title: "14. 🔄 Roulette (Zidane Turn)",
      desc: "ბურთზე ფეხის დადგმით 360 გრადუსით შემობრუნება.",
      directUrl: "https://www.youtube.com/watch?v=3C_9M8X2mA0",
    },
    {
      title: "15. 🏃‍♂️ მარცხენა და მარჯვენა ფეხის გათანაბრება",
      desc: "სავარჯიშოები სუსტი ფეხის დასახვეწად.",
      directUrl: "https://www.youtube.com/watch?v=4D_7M9N3mA0",
    },
    {
      title: "16. 📊 თამაშის კითხვა და ხედვა",
      desc: "როგორ დავინახოთ თავისუფალი ზონები მოედანზე.",
      directUrl: "https://www.youtube.com/watch?v=5E_8M9P4mA0",
    },
    {
      title: "17. 🏋️‍♂️ ფიზიკური გამძლეობა და ფიტნესი",
      desc: "სპეციალური სავარჯიშოები 90 წუთიანი სირბილისთვის.",
      directUrl: "https://www.youtube.com/watch?v=6F_9M0Q5mA0",
    },
    {
      title: "18. ⚽ La Croqueta (Iniesta Move)",
      desc: "ბურთის ერთი ფეხიდან მეორეზე სწრაფი გადატანა.",
      directUrl: "https://www.youtube.com/watch?v=7G_0N1R6mA0",
    },
    {
      title: "19. 🛑 თამაშის ტემპის კონტროლი",
      desc: "როდის ავაჩქაროთ და როდის დავაწყნაროთ თამაში.",
      directUrl: "https://www.youtube.com/watch?v=8H_1O2S7mA0",
    },
    {
      title: "20. 🏆 კაპიტნობა და ლიდერობა მოედანზე",
      desc: "როგორ გავამხნევოთ გუნდი მარცხის დროსაც კი.",
      directUrl: "https://www.youtube.com/watch?v=3Uj34B3I51I",
    },
  ];

  const teenTopics = [
    {
      icon: "🌌",
      title: "1. შავი ხვრელები",
      text: "ისეთი ძლიერი გრავიტაცია აქვთ, რომ სინათლესაც კი არ უშვებენ გარეთ!",
    },
    {
      icon: "🤖",
      title: "2. ხელოვნური ინტელექტი",
      text: "როგორ აზროვნებენ ენობრივი მოდელები და ნეიროქსელები.",
    },
    {
      icon: "🚀",
      title: "3. მარსის კოლონიზაცია",
      text: "შეძლებს თუ არა კაცობრიობა წითელ პლანეტაზე ცხოვრებას?",
    },
    {
      icon: "🧬",
      title: "4. დნმ და გენეტიკა",
      text: "ჩვენი სხეულის ინსტრუქციის წიგნი, რომელიც განსაზღვრავს ვინ ვართ.",
    },
    {
      icon: "💻",
      title: "5. კვანტური კომპიუტერები",
      text: "მილიარდჯერ სწრაფი გამოთვლები, ვიდრე ჩვეულებრივ კომპიუტერში.",
    },
    {
      icon: "🌋",
      title: "6. სუპერვულკანები",
      text: "იელოუსტოუნის ვულკანი და მისი გავლენა დედამიწის კლიმატზე.",
    },
    {
      icon: "🌊",
      title: "7. მარიანას ღრმული",
      text: "ოკეანის ყველაზე ღრმა წერტილი (11,000 მეტრი) და მისი უცნაური ბინადრები.",
    },
    {
      icon: "⚡",
      title: "8. ნიკოლა ტესლა",
      text: "გენიოსი გამომგონებელი, რომელმაც ცვალებადი დენი და მომავალი შექმნა.",
    },
    {
      icon: "⌛",
      title: "9. დროის ფარდობითობა",
      text: "აინშტაინის თეორია: სიჩქარესთან ერთად დრო ნელდება!",
    },
    {
      icon: "🦖",
      title: "10. ასტეროიდი და დინოზავრები",
      text: "როგორ შეიცვალა დედამიწის ისტორია 66 მილიონი წლის წინ.",
    },
    {
      icon: "🧠",
      title: "11. ადამიანის ტვინი",
      text: "ტვინში 86 მილიარდი ნეირონია - უფრო მეტი, ვიდრე ვარსკვლავები ირმის ნახტომში!",
    },
    {
      icon: "🎮",
      title: "12. თამაშების დეველოპმენტი",
      text: "როგორ იქმნება 3D გრაფიკა და სათამაშო ძრავები (Unreal / Unity).",
    },
    {
      icon: "🏎️",
      title: "13. ბგერის სიჩქარე (Mach 1)",
      text: "როცა თვითმფრინავი 1235 კმ/სთ-ს აჭარბებს, ბგერითი ბარიერი ტყდება.",
    },
    {
      icon: "🛰️",
      title: "14. ჯეიმს ვების ტელესკოპი",
      text: "სამყაროს ყველაზე შორეული და ძველი გალაქტიკების ფოტოები.",
    },
    {
      icon: "🔋",
      title: "15. ლითიუმის ელემენტები",
      text: "როგორ მუშაობს ტელეფონისა და ელექტრომობილების ელემენტები.",
    },
    {
      icon: "🌐",
      title: "16. ინტერნეტის არქიტექტურა",
      text: "როგორ მოგზაურობს მონაცემები ოკეანისქვეშა კაბელებით წამებში.",
    },
    {
      icon: "❄️",
      title: "17. აბსოლუტური ნული (-273.15°C)",
      text: "ტემპერატურის ზღვარი, სადაც ატომების მოძრაობაც კი ჩერდება.",
    },
    {
      icon: "🛰️",
      title: "18. GPS სისტემა",
      text: "როგორ გვიდგენს ადგილმდებარეობას კოსმოსში მყოფი 24 თანამგზავრი.",
    },
    {
      icon: "🦈",
      title: "19. ზვიგენების იმუნიტეტი",
      text: "ზვიგენები დედამიწაზე ხეებზე უფრო დიდხანს არსებობენ (400 მლნ წელი)!",
    },
    {
      icon: "🌌",
      title: "20. ბნელი მატერია",
      text: "სამყაროს 85% შედგება ნივთიერებისგან, რომელსაც თვალით ვერ ვხედავთ.",
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

      {/* 🚀 ავტორიზაციის ღილაკები */}
      <div className="relative z-10 flex justify-end p-4">
        {session ? (
          <div className="flex items-center gap-3 bg-slate-800/80 p-2 px-4 rounded-2xl border border-slate-700 backdrop-blur-md">
            {session.user?.image && (
              <img
                src={session.user.image}
                alt="User"
                className="w-8 h-8 rounded-full border border-pink-500"
              />
            )}
            <span className="text-sm font-bold text-white">
              {session.user?.name}
            </span>
            <button
              onClick={() => signOut()}
              className="bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              გამოსვლა
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => signIn("google")}
              className="bg-white text-slate-900 font-bold px-4 py-2 rounded-xl text-xs hover:bg-slate-200 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              🚀 Google-ით შესვლა
            </button>
            <button
              onClick={() => signIn("github")}
              className="bg-slate-800 text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-slate-700 transition-all flex items-center gap-2 border border-slate-600 shadow-lg cursor-pointer"
            >
              🐙 GitHub-ით შესვლა
            </button>
          </div>
        )}
      </div>
      {/* 🚀 ღილაკების დასასრული */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10 pt-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-pink-500/30 text-pink-300 text-xs font-black tracking-widest uppercase shadow-lg backdrop-blur-md animate-pulse">
            ✨ ყველაზე მხიარული და შემეცნებითი სივრცე
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-4 bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(236,72,153,0.3)]">
            საბავშვო სამყარო 🚀
          </h1>
          <p className="text-slate-300 text-base md:text-2xl max-w-2xl mx-auto font-bold opacity-90 drop-shadow">
            აირჩიე შენი ასაკი და აღმოაჩინე საინტერესო თავგადასავლები! 🌟
          </p>
        </header>

        {/* 🎨 Main Age Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {/* 👶 2-5 წელი */}
          <button
            onClick={() => setActiveTab("toddler")}
            className={`px-7 py-4 rounded-3xl font-black text-lg transition-all duration-300 border-2 flex items-center gap-3 backdrop-blur-xl shadow-xl transform active:scale-95 ${
              activeTab === "toddler"
                ? "bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white border-pink-300 shadow-pink-500/50 scale-110 ring-4 ring-pink-500/30"
                : "bg-slate-900/80 text-pink-300 border-pink-500/30 hover:border-pink-400 hover:bg-pink-950/40 hover:scale-105"
            }`}
          >
            <span className="text-2xl">👶</span> 2 - 5 წელი
            <span className="text-xs font-extrabold px-2.5 py-1 bg-black/30 rounded-full border border-white/20">
              20 ვიდეო
            </span>
          </button>

          {/* 🎨 6-9 წელი */}
          <button
            onClick={() => setActiveTab("kids")}
            className={`px-7 py-4 rounded-3xl font-black text-lg transition-all duration-300 border-2 flex items-center gap-3 backdrop-blur-xl shadow-xl transform active:scale-95 ${
              activeTab === "kids"
                ? "bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-slate-950 border-yellow-200 shadow-amber-500/50 scale-110 ring-4 ring-amber-500/30"
                : "bg-slate-900/80 text-amber-300 border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/40 hover:scale-105"
            }`}
          >
            <span className="text-2xl">🎨</span> 6 - 9 წელი
            <span className="text-xs font-extrabold px-2.5 py-1 bg-black/30 text-white rounded-full border border-white/20">
              80 ჩანაწერი
            </span>
          </button>

          {/* 🚀 10-14 წელი */}
          <button
            onClick={() => setActiveTab("teens")}
            className={`px-7 py-4 rounded-3xl font-black text-lg transition-all duration-300 border-2 flex items-center gap-3 backdrop-blur-xl shadow-xl transform active:scale-95 ${
              activeTab === "teens"
                ? "bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-400 text-slate-950 border-cyan-200 shadow-cyan-500/50 scale-110 ring-4 ring-cyan-500/30"
                : "bg-slate-900/80 text-cyan-300 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/40 hover:scale-105"
            }`}
          >
            <span className="text-2xl">🚀</span> 10 - 14 წელი
            <span className="text-xs font-extrabold px-2.5 py-1 bg-black/30 text-white rounded-full border border-white/20">
              80 ჩანაწერი
            </span>
          </button>
        </div>

        {/* =========================================================
            👶 TAB 1: TODDLER SECTION (2-5 წელი)
        ========================================================= */}
        {activeTab === "toddler" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-slate-900/90 border border-pink-500/30 rounded-3xl p-4 md:p-6 shadow-2xl backdrop-blur-2xl">
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner border border-white/10 mb-4 bg-black">
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-pink-500/20 text-pink-300 border border-pink-500/30 mb-2">
                    {selectedVideo.category}
                  </span>
                  <h2 className="text-xl md:text-3xl font-black text-white">
                    {selectedVideo.title}
                  </h2>
                </div>
                <a
                  href={selectedVideo.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95"
                >
                  ▶ YouTube-ზე ნახვა
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {toddlerVideos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                    selectedVideo.id === video.id
                      ? "bg-pink-600 text-white border-pink-300 shadow-lg shadow-pink-600/40 scale-105"
                      : "bg-slate-900/60 text-slate-200 border-slate-800 hover:border-pink-500/50 hover:bg-slate-800/80"
                  }`}
                >
                  <span className="text-xs font-bold opacity-75 mb-1">
                    {video.category}
                  </span>
                  <span className="font-extrabold text-sm line-clamp-2">
                    {video.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================
            🎨 TAB 2: KIDS SECTION (6-9 წელი)
        ========================================================= */}
        {activeTab === "kids" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Sub Tabs */}
            <div className="flex flex-wrap justify-center gap-3 bg-slate-900/60 p-2 rounded-2xl border border-amber-500/20 backdrop-blur-md">
              <button
                onClick={() => setKidsSubTab("football")}
                className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all ${
                  kidsSubTab === "football"
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "text-amber-200 hover:bg-slate-800"
                }`}
              >
                ⚽ ფეხბურთის აკადემია (20)
              </button>
              <button
                onClick={() => setKidsSubTab("tales")}
                className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all ${
                  kidsSubTab === "tales"
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "text-amber-200 hover:bg-slate-800"
                }`}
              >
                📖 იგავ-არაკები (20)
              </button>
              <button
                onClick={() => setKidsSubTab("science")}
                className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all ${
                  kidsSubTab === "science"
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "text-amber-200 hover:bg-slate-800"
                }`}
              >
                🔬 საინტერესო ფაქტები (20)
              </button>
              <button
                onClick={() => setKidsSubTab("riddles")}
                className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all ${
                  kidsSubTab === "riddles"
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "text-amber-200 hover:bg-slate-800"
                }`}
              >
                🧩 გამოცანები (20)
              </button>
            </div>

            {/* Sub-Tab 1: Football */}
            {kidsSubTab === "football" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {kidsFootball.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 border border-amber-500/20 p-5 rounded-2xl hover:border-amber-400/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-extrabold text-amber-300 text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4">{item.desc}</p>
                    </div>
                    <a
                      href={item.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-xl font-bold text-xs transition-all"
                    >
                      ▶ ნახე ვიდეო გაკვეთილი
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-Tab 2: Tales */}
            {kidsSubTab === "tales" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tales.map((tale, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 border border-amber-500/20 p-6 rounded-2xl"
                  >
                    <h3 className="font-extrabold text-amber-300 text-xl mb-2">
                      {tale.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {tale.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-Tab 3: Science */}
            {kidsSubTab === "science" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {science.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 border border-amber-500/20 p-5 rounded-2xl flex gap-4 items-start"
                  >
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h3 className="font-extrabold text-amber-300 text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-Tab 4: Riddles */}
            {kidsSubTab === "riddles" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {riddles.map((riddle, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 border border-amber-500/20 p-5 rounded-2xl"
                  >
                    <p className="font-extrabold text-amber-200 text-base mb-3">
                      {riddle.question}
                    </p>
                    <button
                      onClick={() =>
                        setOpenRiddle(openRiddle === index ? null : index)
                      }
                      className="px-4 py-1.5 rounded-lg bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30 hover:bg-amber-400/30 transition-all"
                    >
                      {openRiddle === index
                        ? "პასუხის დამალვა 🙈"
                        : "პასუხის ნახვა 💡"}
                    </button>
                    {openRiddle === index && (
                      <div className="mt-3 p-3 bg-amber-400/10 border border-amber-400/20 rounded-xl text-amber-300 font-extrabold text-sm animate-fadeIn">
                        {riddle.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* =========================================================
            🚀 TAB 3: TEENS SECTION (10-14 წელი)
        ========================================================= */}
        {activeTab === "teens" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Sub Tabs */}
            <div className="flex flex-wrap justify-center gap-3 bg-slate-900/60 p-2 rounded-2xl border border-cyan-500/20 backdrop-blur-md">
              <button
                onClick={() => setTeensSubTab("movies")}
                className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all ${
                  teensSubTab === "movies"
                    ? "bg-cyan-400 text-slate-950 shadow-md"
                    : "text-cyan-200 hover:bg-slate-800"
                }`}
              >
                🎬 TOP 20 ფილმი
              </button>
              <button
                onClick={() => setTeensSubTab("football")}
                className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all ${
                  teensSubTab === "football"
                    ? "bg-cyan-400 text-slate-950 shadow-md"
                    : "text-cyan-200 hover:bg-slate-800"
                }`}
              >
                ⚽ პრო-ფეხბურთი (20)
              </button>
              <button
                onClick={() => setTeensSubTab("topics")}
                className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all ${
                  teensSubTab === "topics"
                    ? "bg-cyan-400 text-slate-950 shadow-md"
                    : "text-cyan-200 hover:bg-slate-800"
                }`}
              >
                🚀 მეცნიერება & AI (20)
              </button>
              <button
                onClick={() => setTeensSubTab("puzzles")}
                className={`px-5 py-2.5 rounded-xl font-black text-sm transition-all ${
                  teensSubTab === "puzzles"
                    ? "bg-cyan-400 text-slate-950 shadow-md"
                    : "text-cyan-200 hover:bg-slate-800"
                }`}
              >
                🧠 ლოგიკური თავსატეხები (20)
              </button>
            </div>

            {/* Sub-Tab 1: Movies Player */}
            {teensSubTab === "movies" && (
              <div className="space-y-8">
                <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-4 md:p-6 shadow-2xl backdrop-blur-2xl">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner border border-white/10 mb-4 bg-black">
                    <iframe
                      src={selectedMovie.embedUrl}
                      title={selectedMovie.title}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-2">
                        {selectedMovie.genre}
                      </span>
                      <h2 className="text-xl md:text-3xl font-black text-white mb-1">
                        {selectedMovie.title}
                      </h2>
                      <p className="text-slate-300 text-sm font-medium">
                        {selectedMovie.desc}
                      </p>
                    </div>
                    <a
                      href={selectedMovie.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95 whitespace-nowrap"
                    >
                      ▶ თრეილერის ნახვა
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {movieVideos.map((movie) => (
                    <button
                      key={movie.id}
                      onClick={() => setSelectedMovie(movie)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                        selectedMovie.id === movie.id
                          ? "bg-cyan-500 text-slate-950 border-cyan-200 shadow-lg shadow-cyan-500/40 scale-105 font-bold"
                          : "bg-slate-900/60 text-slate-200 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80"
                      }`}
                    >
                      <span className="text-xs font-bold opacity-75 mb-1">
                        {movie.genre}
                      </span>
                      <span className="font-extrabold text-sm line-clamp-2">
                        {movie.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-Tab 2: Teens Football */}
            {teensSubTab === "football" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teensFootball.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 border border-cyan-500/20 p-5 rounded-2xl hover:border-cyan-400/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-extrabold text-cyan-300 text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4">{item.desc}</p>
                    </div>
                    <a
                      href={item.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 rounded-xl font-bold text-xs transition-all"
                    >
                      ▶ გაკვეთილის ნახვა
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-Tab 3: Teen Topics */}
            {teensSubTab === "topics" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teenTopics.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 border border-cyan-500/20 p-5 rounded-2xl flex gap-4 items-start"
                  >
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h3 className="font-extrabold text-cyan-300 text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-Tab 4: Puzzles */}
            {teensSubTab === "puzzles" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {puzzles.map((puzzle, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/80 border border-cyan-500/20 p-5 rounded-2xl"
                  >
                    <p className="font-extrabold text-cyan-200 text-base mb-3">
                      {puzzle.q}
                    </p>
                    <button
                      onClick={() =>
                        setOpenPuzzle(openPuzzle === index ? null : index)
                      }
                      className="px-4 py-1.5 rounded-lg bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30 hover:bg-cyan-400/30 transition-all"
                    >
                      {openPuzzle === index
                        ? "პასუხის დამალვა 🙈"
                        : "პასუხის ნახვა 💡"}
                    </button>
                    {openPuzzle === index && (
                      <div className="mt-3 p-3 bg-cyan-400/10 border border-cyan-400/20 rounded-xl text-cyan-300 font-extrabold text-sm animate-fadeIn">
                        {puzzle.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
