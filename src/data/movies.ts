const moviesData = [
  {
    adult: false,
    backdrop_path: "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
    genre_ids: [27, 9648],
    id: 507089,
    original_language: "en",
    original_title: "Five Nights at Freddy's",
    overview:
      "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
    popularity: 2817.844,
    poster_path: "/j9mH1pr3IahtraTWxVEMANmPSGR.jpg",
    release_date: "2023-10-25",
    title: "Five Nights at Freddy's",
    video: false,
    vote_average: 8.062,
    vote_count: 2055,
  },
  {
    adult: false,
    backdrop_path: "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
    genre_ids: [28, 18],
    id: 678512,
    original_language: "en",
    original_title: "Sound of Freedom",
    overview:
      "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    popularity: 1861.244,
    poster_path: "/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
    release_date: "2023-07-03",
    title: "Sound of Freedom",
    video: false,
    vote_average: 8.116,
    vote_count: 1362,
  },
  {
    adult: false,
    backdrop_path: "/wl4NWiZwpzZH67HiDgpDImLyds9.jpg",
    genre_ids: [28, 12, 53],
    id: 299054,
    original_language: "en",
    original_title: "Expend4bles",
    overview:
      "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
    popularity: 2088.409,
    poster_path: "/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
    release_date: "2023-09-15",
    title: "Expend4bles",
    video: false,
    vote_average: 6.495,
    vote_count: 671,
  },
  {
    adult: false,
    backdrop_path: "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
    genre_ids: [28, 12, 878],
    id: 609681,
    original_language: "en",
    original_title: "The Marvels",
    overview:
      "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    popularity: 1267.74,
    poster_path: "/tUtgLOESpCx7ue4BaeCTqp3vn1b.jpg",
    release_date: "2023-11-08",
    title: "The Marvels",
    video: false,
    vote_average: 6.587,
    vote_count: 286,
  },
  {
    adult: false,
    backdrop_path: "/tj7mp7uWjVw5N73G5Hwm1bkMOcD.jpg",
    genre_ids: [28, 10752],
    id: 975902,
    original_language: "en",
    original_title: "Boudica",
    overview:
      "Inspired by events in A.D. 60, Boudica follows the eponymous Celtic warrior who rules the Iceni people alongside her husband Prasutagus. When he dies at the hands of Roman soldiers, Boudica’s kingdom is left without a male heir and the Romans seize her land and property.  Driven to the edge of madness and determined to avenge her husband’s death, Boudica rallies the various tribes from the region and wages an epic war against the mighty Roman empire.",
    popularity: 1396.082,
    poster_path: "/ssEFC5wfFjj7lJpUgwJDOK1Xu1J.jpg",
    release_date: "2023-10-26",
    title: "Boudica",
    video: false,
    vote_average: 6.719,
    vote_count: 64,
  },
  {
    adult: false,
    backdrop_path: "/tC78Pck2YCsUAtEdZwuHYUFYtOj.jpg",
    genre_ids: [28, 53, 80],
    id: 926393,
    original_language: "en",
    original_title: "The Equalizer 3",
    overview:
      "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    popularity: 1209.273,
    poster_path: "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    release_date: "2023-08-30",
    title: "The Equalizer 3",
    video: false,
    vote_average: 7.428,
    vote_count: 1561,
  },
  {
    adult: false,
    backdrop_path: "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
    genre_ids: [28, 53, 80],
    id: 762430,
    original_language: "en",
    original_title: "Retribution",
    overview:
      "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
    popularity: 1083.449,
    poster_path: "/hAZO3hvLQVjIDW32lxSKmOOl987.jpg",
    release_date: "2023-08-23",
    title: "Retribution",
    video: false,
    vote_average: 6.988,
    vote_count: 644,
  },
  {
    adult: false,
    backdrop_path: "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
    genre_ids: [27, 53],
    id: 951491,
    original_language: "en",
    original_title: "Saw X",
    overview:
      "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    popularity: 1072.723,
    poster_path: "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    release_date: "2023-09-26",
    title: "Saw X",
    video: false,
    vote_average: 7.393,
    vote_count: 1010,
  },
  {
    adult: false,
    backdrop_path: "/gN79aDbZdaSJkFS1iVA17HplF2X.jpg",
    genre_ids: [27, 9648, 53],
    id: 968051,
    original_language: "en",
    original_title: "The Nun II",
    overview:
      "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
    popularity: 975.111,
    poster_path: "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    release_date: "2023-09-06",
    title: "The Nun II",
    video: false,
    vote_average: 6.933,
    vote_count: 1387,
  },
  {
    adult: false,
    backdrop_path: "/zgQQF04u3OgNBJqClRNby1FPz9s.jpg",
    genre_ids: [16, 10751, 28, 878],
    id: 893723,
    original_language: "en",
    original_title: "PAW Patrol: The Mighty Movie",
    overview:
      "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
    popularity: 823.132,
    poster_path: "/aTvePCU7exLepwg5hWySjwxojQK.jpg",
    release_date: "2023-09-21",
    title: "PAW Patrol: The Mighty Movie",
    video: false,
    vote_average: 7.1,
    vote_count: 146,
  },
  {
    adult: false,
    backdrop_path: "/azD31DjpV3PJfjF3h72LVw2WCSD.jpg",
    genre_ids: [27],
    id: 807172,
    original_language: "en",
    original_title: "The Exorcist: Believer",
    overview:
      "When two girls disappear into the woods and return three days later with no memory of what happened to them, the father of one girl seeks out Chris MacNeil, who's been forever altered by what happened to her daughter fifty years ago.",
    popularity: 859.035,
    poster_path: "/nqYrPJiKFoIsZt2kmZ0y3osffLs.jpg",
    release_date: "2023-10-04",
    title: "The Exorcist: Believer",
    video: false,
    vote_average: 6.195,
    vote_count: 539,
  },
  {
    adult: false,
    backdrop_path: "/3H9NA1KWEQN0ItL3Wl3SFZYP6yV.jpg",
    genre_ids: [28, 878, 12],
    id: 565770,
    original_language: "en",
    original_title: "Blue Beetle",
    overview:
      "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
    popularity: 708.584,
    poster_path: "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
    release_date: "2023-08-16",
    title: "Blue Beetle",
    video: false,
    vote_average: 6.996,
    vote_count: 1539,
  },
  {
    adult: false,
    backdrop_path: "/lyHmhoRj3zXSdeCYbs2oOXLCF4K.jpg",
    genre_ids: [16, 12, 10751, 14],
    id: 459003,
    original_language: "uk",
    original_title: "Мавка: Лісова пісня",
    overview:
      "Forest soul Mavka faces an impossible choice between her heart and her duty as guardian to the Heart of the Forest, when she falls in love with the talented young human musician Lukas.",
    popularity: 677.763,
    poster_path: "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
    release_date: "2023-03-02",
    title: "Mavka: The Forest Song",
    video: false,
    vote_average: 7.294,
    vote_count: 485,
  },
  {
    adult: false,
    backdrop_path: "/h7BoGo4NhckWRiMUCi3Qr8GwBDA.jpg",
    genre_ids: [28, 80, 18, 53],
    id: 1039690,
    original_language: "en",
    original_title: "Desperation Road",
    overview:
      "After 11 years in a Mississippi state prison, Russell Gaines struggles to leave his past sins behind him as he returns home to his stoic father, Mitchell. One fateful night he meets Maben, a young mother with nothing but a stolen gun and a murdered police deputy to her name. Desperate and on the run, Russell and Maben must trust one another to escape their own circumstances, before the truths of their intertwined violent past threatens to destroy them.",
    popularity: 507.855,
    poster_path: "/tPyj6Gii1HrnzCbJXEF7JdSFkQ8.jpg",
    release_date: "2023-10-19",
    title: "Desperation Road",
    video: false,
    vote_average: 7.4,
    vote_count: 46,
  },
  {
    adult: false,
    backdrop_path: "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
    genre_ids: [27, 53],
    id: 1008042,
    original_language: "en",
    original_title: "Talk to Me",
    overview:
      "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
    popularity: 533.549,
    poster_path: "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
    release_date: "2023-07-26",
    title: "Talk to Me",
    video: false,
    vote_average: 7.189,
    vote_count: 1720,
  },
  {
    adult: false,
    backdrop_path: "/cavK9ox37pxDg11RvJINMH63onU.jpg",
    genre_ids: [27],
    id: 744857,
    original_language: "es",
    original_title: "Cuando acecha la maldad",
    overview:
      "Residents of a small rural town discover that a demon is about to be born among them. They desperately try to escape before the evil is born, but it may be too late.",
    popularity: 481.476,
    poster_path: "/iQ7G9LhP7NRRIUM4Vlai3eOxBAc.jpg",
    release_date: "2023-10-05",
    title: "When Evil Lurks",
    video: false,
    vote_average: 7.381,
    vote_count: 188,
  },
  {
    adult: false,
    backdrop_path: "/45zVtZx6Tzx3RKeDziK25K9geFf.jpg",
    genre_ids: [16, 10751, 10402, 14, 35],
    id: 901362,
    original_language: "en",
    original_title: "Trolls Band Together",
    overview:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    popularity: 437.85,
    poster_path: "/lxoPJR6eR5nd6nHSKIkEIV4FQWe.jpg",
    release_date: "2023-10-12",
    title: "Trolls Band Together",
    video: false,
    vote_average: 6.703,
    vote_count: 37,
  },
  {
    adult: false,
    backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
    genre_ids: [10751, 16, 14, 10402, 35, 12],
    id: 354912,
    original_language: "en",
    original_title: "Coco",
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    popularity: 398.279,
    poster_path: "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    release_date: "2017-10-27",
    title: "Coco",
    video: false,
    vote_average: 8.218,
    vote_count: 18131,
  },
  {
    adult: false,
    backdrop_path: "/1rYAFNtu9yKaVInNTirgRr82a0N.jpg",
    genre_ids: [18, 14],
    id: 761851,
    original_language: "en",
    original_title: "His Only Son",
    overview:
      "By God's order, Abraham was commanded to sacrifice his son Isaac on the mountain of Moriah. While traveling to the place of the sacrifice, alongside Isaac and two servants, Abraham is flooded with vivid memories from the years he and Sarah spent longing for the son they were promised—the son he must now lay upon the altar.",
    popularity: 401.558,
    poster_path: "/e85UDGmD9HmKcS0BOgoha029bkK.jpg",
    release_date: "2023-03-30",
    title: "His Only Son",
    video: false,
    vote_average: 6.6,
    vote_count: 7,
  },
  {
    adult: false,
    backdrop_path: "/p9DKeXp6FPJtAQ1k13Z4zPWrCbN.jpg",
    genre_ids: [18],
    id: 1058694,
    original_language: "en",
    original_title: "Radical",
    overview:
      "In a Mexican border town plagued by neglect, corruption, and violence, a frustrated teacher tries a radical new method to break through his students’ apathy and unlock their curiosity, their potential… and maybe even their genius.",
    popularity: 422.055,
    poster_path: "/eSatbygYZp8ooprBHZdb6GFZxGB.jpg",
    release_date: "2023-10-19",
    title: "Radical",
    video: false,
    vote_average: 7.7,
    vote_count: 9,
  },
];

export default moviesData;