const markers = [
    {
        "position": {
            "lat": 43.623039,
            "lng": -70.207892
        },
        "locationName": "Mile 79 - Maine Foghorn",
        "blurb": "This piece features a synth made from the sound of the Portland Head Light in Cape Elizabeth, Maine. Nevermind that it was crystal clear and sunny on the day that I recorded this foghorn. I isolated the tone from the waves in the background, mapped it to a sampler and added a splash of reverb, which led to this creation. ",
        "youtubeId": "VPkNuea2J64",
        "youtubeTitle": "Maine Foghorn",
        "icon": "diamond.svg",
        "releaseDate": "2024-06-01"
    },
    {
        "position": {
            "lat": 43.3126,
            "lng": -70.6907
        },
        "locationName": "Mile 118 - Maine Crow",
        "blurb": "The crow was not shy of the microphone. On the second day of my trip, I stopped to record this shrieking crow in southern Maine. I was about halfway into a 93 mile ride from Yarmouth, ME to Stratham, NH. According to a thermometer on a bank in Biddeford, it was 100 degrees that day. I sang Third World's \"96 Degrees In The Shade\" to myself as I rode. I turned the crow into an arpeggiated synth with the Microcosm delay pedal and made a beat using mostly sounds recorded on the bike trip. ",
        "youtubeId": "PeqpPfVFaNQ",
        "youtubeTitle": "Maine Crow",
        "icon": "diamond.svg",
        "releaseDate": "2024-06-01"
    },
    {
        "position": {
            "lat": 42.55,
            "lng": -79.17
        },
        "locationName": "Mile 765 - Silver Creek, NY - Tunnel Singing",
        "blurb": "I did a lot of singing in tunnels on this trip. Here is one of those instances from a rainy day in Silver Creek, NY near the edge of Lake Erie. In addition to the natural reverb from the tunnel, I love what happened when I made copies of the vocal and tuned those copies as harmonies. The birds and raindrops in the background of the audio multiplied in their own weird ways. I used those harmonies as the basis for the track that is excerpted here.",
        "youtubeId": "KssfJ7CKx0o",
        "youtubeTitle": "Tunnel Singing",
        "icon": "diamond.svg",
        "releaseDate": "2024-07-07"
    },
    {
        "position": {
            "lat": 42.95,
            "lng": -97.65
        },
        "locationName": "Mile 2,056 - Tabor, SD",
        "blurb": "There is a bar in Tabor, South Dakota called the Keg. I had an interaction with some folks there that led to the composition of the song \"Slingshot.\" This is the story.",
        "youtubeId": "s33RgXeJSrA",
        "youtubeTitle": "Behind The Song: \"Slingshot\"",
        "icon": "diamond.svg",
        "releaseDate": "2024-07-07"
    },
    {
        "position": {
            "lat": 43.95,
            "lng": -69.50
        },
        "locationName": "Mile 4 - Bristol, ME - Fish Ladder",
        "blurb": "This is a fish ladder and swimming hole in Bristol, Maine. The fish ladder was built recently next to a small dam so that alewives can climb up river as part of a 5.5 mile journey from the ocean to fresh water where they can spawn. This was recorded on the afternoon of June 28th during the first rest break of my trip. I was 4 miles into the 4,000 mile ride and not at all happy with myself that I hadn't properly trained my legs by riding with fully weighed down panniers.",
        "youtubeId": "VU-Tk3vFdRA",
        "youtubeTitle": "Fish Ladder",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.68,
            "lng": -70.25
        },
        "locationName": "Mile 70 - Portland, ME - Construction clangs",
        "blurb": "This is the sound of some unidentified construction clanging in Portland, Maine recorded on the morning of June 29th.",
        "youtubeId": "wvwvahAoAmY",
        "youtubeTitle": "Construction Clangs",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.06,
            "lng": -70.80
        },
        "locationName": "Mile 146 - Portsmouth, NH Airport Jet Engine",
        "blurb": "This is the sound of a plane taking off at the Portsmouth, NH airport at dusk on June 29th. It was recorded toward the end of a 93 mile ride in 100 degree heat, an early test of mettle that led to my body shutting down temporarily on the sidewalk outside of a Dairy Queen earlier in the day. The heat was such that I wasn't able to eat more than a few cashews all afternoon, but I found more energy here as the sun went down. ",
        "youtubeId": "x443ADd-0ec",
        "youtubeTitle": "Portsmouth Airport Jet Engine",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.03,
            "lng": -71.21
        },
        "locationName": "Mile 174 - Raymond, NH - nature ambience",
        "blurb": "This is a nature ambience recorded on a dirt trail in Raymond, NH on the afternoon of June 30th.",
        "youtubeId": "F6iBOotR3To",
        "youtubeTitle": "Nature Ambience",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 42.98,
            "lng": -72.65
        },
        "locationName": "Mile 276 - Newfane, VT - Smith brook after the rain",
        "blurb": "This is the sound of Smith Brook in Newfane, Vermont after a heavy rain. I've spent many hours by brooks in this part of Vermont since I was a kid because my aunt and uncle own a house nearby. I stopped and stayed with them early in the journey and my family was there to meet me and cheer me on, a tremendous boon. ",
        "youtubeId": "d603D8HoM98",
        "youtubeTitle": "Smith Brook After The Rain",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 42.95,
            "lng": -72.69
        },
        "locationName": "Mile 278 - Williamsville, VT - Beetlestone Hill",
        "blurb": "This is the sound of birds after a rainstorm on a quiet dirt road in Williamsville, Vermont.",
        "youtubeId": "35bG8PSyzOw",
        "youtubeTitle": "Beetlestone Hill",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.03,
            "lng": -74.86
        },
        "locationName": "Mile 427 - Little Falls, NY - distant train",
        "blurb": "This is a train sound recorded from a bridge in Little Falls, New York along the Erie Canal. Little Falls felt like one of those gorgeous but forgotten towns whose industry dried up as the canal lost its industrial relevance. Very few businesses were open on the night I spent there.",
        "youtubeId": "-lJAaPbNJKE",
        "youtubeTitle": "Distant Train",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.14,
            "lng": -75.29
        },
        "locationName": "Mile 457 - Marcy, NY - pipe percussion",
        "blurb": "This is the sound of hand percussion on an empty construction pipe next to the Erie Canal in Marcy, New York. These samples featured prominently in many of the beats that I made from this trip.",
        "youtubeId": "5UQvsDvxJBM",
        "youtubeTitle": "Pipe Percussion",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.04,
            "lng": -76.11
        },
        "locationName": "Mile 509 - Syracuse, NY - outdoor dining",
        "blurb": "This is the sound of a heavy rainstorm impinging on an evening of outdoor dining at a Mexican restaurant in Syracuse, New York.",
        "youtubeId": "zdkceddqVA8",
        "youtubeTitle": "Outdoor Dining",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.19,
            "lng": -77.94
        },
        "locationName": "Mile 651 - Brockport, NY - bike shower",
        "blurb": "This is the sound of me washing my bike in a hotel shower in Brockport, NY after an extremely muddy day of trail riding.",
        "youtubeId": "x16N1WF8m6k",
        "youtubeTitle": "Bike Shower",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.25,
            "lng": -78.12
        },
        "locationName": "Mile 666 - Albion, NY - Erie Canal Bork Patrol",
        "blurb": "This is the sound of dogs barking at me from across the Erie Canal in Albion, New York.",
        "youtubeId": "CmbrmMYPXEo",
        "youtubeTitle": "Erie Canal Bork Patrol",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.08,
            "lng": -79.06
        },
        "locationName": "Mile 721 - Niagara Falls, NY",
        "blurb": "This is the sound at the top of Niagara Falls, on which a lone daredevil seagull was perched with tremendous calm at the precipice of the roughly 100 foot drop off. The US / Canadian border was still closed because of the pandemic at the time of recording in July 2021, so all of my recordings were made from the New York side of the border.",
        "youtubeId": "aThhoMIJSKA",
        "youtubeTitle": "Niagara Falls",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 41.90,
            "lng": -80.68
        },
        "locationName": "Mile 864 - North Kingsville, OH - Yoga",
        "blurb": "This is an entry in my favorite Signs Across America sub-chapter. The sound is traffic outside The Yoga House in North Kingsville, Ohio.",
        "youtubeId": "eUEi9a_zv70",
        "youtubeTitle": "Yoga",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 41.80,
            "lng": -81.10
        },
        "locationName": "Mile 878 - North Perry, OH - Greenhouse Vents",
        "blurb": "This is the sound of vents flapping on a greenhouse in North Perry, Ohio.",
        "youtubeId": "XtMCIFHF4wg",
        "youtubeTitle": "Greenhouse Vents",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 41.37,
            "lng": -83.63
        },
        "locationName": "Mile 1,057 - Bowling Green, OH - hotel hot tub",
        "blurb": "This is the sound of a hotel hot tub in Bowling Green, Ohio recorded on July 14th. The hot tub sound felt oddly musical after a 124 mile ride from Cleveland, my first ever 100+ mile day.",
        "youtubeId": "37cKICUHz00",
        "youtubeTitle": "Hotel Hot Tub",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 41.37,
            "lng": -83.65
        },
        "locationName": "Mile 1,059 - Bowling Green, OH - Rainfall Totals",
        "blurb": "This is the sound of a foreboding forecast before a 113 mile ride through corn and soybean fields from Bowling Green, Ohio to Yoder, Indiana. ",
        "youtubeId": "bWVVc_XHoqo",
        "youtubeTitle": "Rainfall Totals",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 41.39,
            "lng": -83.66
        },
        "locationName": "Mile 1,060 - Bowling Green, OH - Rain on Sunporch Roof",
        "blurb": "This sound of rain on the roof of a sunroom does not make much sense with the visuals. The material of the roof and the acoustics of the room led to a strange kind of resonance when the rain started falling.",
        "youtubeId": "36zaSQR4ZkY",
        "youtubeTitle": "Rain on Sunporch Roof",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 40.92,
            "lng": -85.26
        },
        "locationName": "Mile 1,169 - Yoder, IN - Bees",
        "blurb": "This is the sound of a beehive at the home of my wonderful hosts in Yoder, Indiana. No field recordists were stung during the making of this recording.",
        "youtubeId": "SrLbnxfhEOM",
        "youtubeTitle": "Bees",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 40.90,
            "lng": -85.32
        },
        "locationName": "Mile 1,173 - Markle, IN - Power lines static",
        "blurb": "This is a sound that I heard lots during the trip and is a little disorienting to encounter in person. The crackle of the power lines is quite loud and is not matched by any visual movement. The sound resembles some sort of eerie unnatural weather event. ",
        "youtubeId": "gsQ8czmPbpQ",
        "youtubeTitle": "Power Lines Static",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 40.98,
            "lng": -86.47
        },
        "locationName": "Mile 1,244 - Royal Center, IN - Soybean Sunset",
        "blurb": "This is an early morning ambience recorded at a soybean farm in Royal Center, Indiana.",
        "youtubeId": "RtQhNUetdps",
        "youtubeTitle": "Soybean Sunset",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 40.88,
            "lng": -87.20
        },
        "locationName": "Mile 1,296 - Rensselaer, IN - Highway Overpass",
        "blurb": "Of the 4,000 miles that I rode, 20 of those were spent on the shoulder of an interstate. The other 3,980 were on smaller roads. This is the sound of a highway overpass in Rensselaer, Indiana that I was grateful to avoid riding. ",
        "youtubeId": "F6USlH0cFQg",
        "youtubeTitle": "Highway Overpass",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 41.57,
            "lng": -91.26
        },
        "locationName": "Mile 1,590 - West Liberty, IA - Mexican Grocery Store",
        "blurb": "More than half of the 4,000 residents of West Liberty, Iowa are Hispanic. I was surprised and delighted to see so many Mexican grocery stores and restaurants nearly in a row in this vibrant little town, so I looked up the demographics. This is the sound from inside one of those stores. ",
        "youtubeId": "IZU5ZnGhtpo",
        "youtubeTitle": "Mexican Grocery Store",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 42.11,
            "lng": -95.71
        },
        "locationName": "Mile 1,909 - Mapleton, IA - Corn husks rustling in the wind",
        "blurb": "Whenever someone asks me: \"What is your favorite sound from the trip?\" These corn husks rustling in the wind come to mind. I don't know if it actually is my favorite sound, but it's so clearly evocative of a large section of the country - the humidity, the rolling hills through farmland, the smell of bonfires and sounds of tractors early in the morning. What I like about it is that there are countless variations of the same type of sound happening all at once, like raindrops hitting different leaves on trees or like the visual effect of the zinc roofs in Paris stacked next to each other.",
        "youtubeId": "Fzs2A8Ty96A",
        "youtubeTitle": "Corn Husks Rustling in the Wind",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 42.99,
            "lng": -97.86
        },
        "locationName": "Mile 2,055 - Tyndall, SD - morning ambience and church bells",
        "blurb": "This is the sound of church bells ringing early in the morning in Tyndall, South Dakota.",
        "youtubeId": "l48rUBT51Zc",
        "youtubeTitle": "Morning Ambience and Church Bells",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.25,
            "lng": -98.69
        },
        "locationName": "Mile 2,116 - Geddes, SD - Carving Walleye with a Sawzall",
        "blurb": "I made an unplanned stop at a lodge in Geddes, South Dakota on July 29th. Thick wildfire smoke appeared west of Tyndall on my way to Pierre, quickly irritating my lungs and eyes. I deemed it best to try and wait out the smoke. This lodge hosted a number of folks who were fishing on the Missouri River, so this is the sound of a guide breaking down walleye with a Sawzall.  ",
        "youtubeId": "bGzo6WGsdcA",
        "youtubeTitle": "Carving Walleye with a Sawzall",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 44.30,
            "lng": -100.05
        },
        "locationName": "Mile 2,134 - Pierre, SD - Goats being goats",
        "blurb": "My stop in Pierre, South Dakota was one of the richest in terms of hospitality on this trip. My hosts were, oddly enough, family friends of a woman - a fellow cyclist and musician - who I met at a café in Cleveland earlier in the trip. The folks in South Dakota own a massive ranch filled with sunflowers, horses and goats. I spent a couple of days there enjoying their company and meeting some of their family. This is the sound of some of their goats.",
        "youtubeId": "7_DKfIVC2XM",
        "youtubeTitle": "Goats Being Goats",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 44.31,
            "lng": -100.07
        },
        "locationName": "Mile 2,134 - Pierre, SD - Mitch the horse",
        "blurb": "My stop in Pierre, South Dakota was one of the richest in terms of hospitality on this trip. My hosts were, oddly enough, family friends of a woman - a fellow cyclist and musician - who I met at a café in Cleveland earlier in the trip. The folks in South Dakota own a massive ranch filled with sunflowers, horses and goats. I spent a couple of days there enjoying their company and meeting some of their family. This is the sound of Mitch the horse throwing a tantrum because he was left out from a walk around the property.",
        "youtubeId": "8uul4OowZVY",
        "youtubeTitle": "Mitch the Horse",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 44.32,
            "lng": -100.09
        },
        "locationName": "Mile 2,270 - Badlands, SD - Coyotes in the middle of the night",
        "blurb": "This is the sound of coyotes recorded in the middle of the night while I camped at Badlands National Park in South Dakota. I slept with my recorder inside the tent for moments like this. You can hear a light rain falling as I try to breathe as quietly as possible.",
        "youtubeId": "QEtEe6bGTJA",
        "youtubeTitle": "Coyotes in the Middle of the Night",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.89,
            "lng": -102.41
        },
        "locationName": "Mile 2,335 - Badlands, SD - Bison emoting",
        "blurb": "I went for a morning walk with a new friend after camping at the Sage Creek Campground in Badlands, SD. We followed bison paths up a hill until encountering a large group of them a great distance away. I boosted the signal of this recording as much as possible to make it sound as if the bison were closer to us.",
        "youtubeId": "YeL4ayd1sy8",
        "youtubeTitle": "Bison Emoting",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.89,
            "lng": -103.42
        },
        "locationName": "Mile 2,440 - Keystone, SD - Motorcycles passing through during Sturgis",
        "blurb": "One of the bizarre synchronicities of this bicycle trip was that I ended up in Rapid City, South Dakota at exactly the time of the Sturgis Motorcycle Rally. Approximately 900,000 of my loud-vehicle friends made their way through the area in sync with me. I had several memorable encounters with them, including one as I rode up the 1,000 foot hill from Keystone, SD to Mt. Rushmore. A large, pony-tailed and leather clad man was descending the hill on his motorcycle as I ascended. He slowed down as he approached me, took one hand off his bike to cup around his mouth and yelled in a low, gravelly voice: \"You're a badass.\" ",
        "youtubeId": "fCJixbj7i7o",
        "youtubeTitle": "Motorcycles Passing Through During Sturgis",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.87,
            "lng": -103.45
        },
        "locationName": "Mile 2,443 - Mount Rushmore, SD - tourists at the summit",
        "blurb": "It was a detour for me to ascend the hill to Mt. Rushmore, but I'm glad I did both for the aforementioned motorcyclist encounter at mile 2,440 and also because I truly earned the descent from the sculpture down toward the stunning Mickelson Trail later on (not before getting caught in a hailstorm and sheltering under someone's garage, but that's another story). This is the sound of tourists mingling below the rocks and coordinating their photographs. ",
        "youtubeId": "ec8u5DK5Rmg",
        "youtubeTitle": "Tourists at the Summit",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.70,
            "lng": -105.29
        },
        "locationName": "Mile 2,609 - Gilette, WY - Coal mine train rumbling",
        "blurb": "This sound was recorded in eastern Wyoming during the most desolate and barren stretch of the trip, outside of what purports to be \"the largest surface coal mine in North America.\" This is a series of trains filled with small pieces of black coal. The freight cars literally stretch to the edge of the horizon and presumably beyond, rumbling and creaking as they go.",
        "youtubeId": "6WAtvjJkjQ4",
        "youtubeTitle": "Coal Mine Train Rumbling",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.71,
            "lng": -109.97
        },
        "locationName": "Mile 2,886 - Crowheart, WY - Roadside grasshoppers",
        "blurb": "This is the sound of some sort of grasshopper recorded outside Dubois, Wyoming before I climbed to the continental divide.",
        "youtubeId": "8xz-D5PDyZI",
        "youtubeTitle": "Roadside Grasshoppers",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 43.90,
            "lng": -110.64
        },
        "locationName": "Mile 2,998 - Moran, WY - Grand Teton National Park",
        "blurb": "When I saw the Tetons for the first time after weeks of riding through corn and soybean fields, I yelled out loud in excitement. Their purple mountain majesty in that context reminded me of Robert Pirsig's quote from Zen and The Art of Motorcycle Maintenance: \"…to arrive in the Rocky Mountains by plane would be to see them in one kind of context, as pretty scenery. But to arrive after days of hard travel across the prairies would be to see them in another way, as a goal, a promised land.\" This is the sound of Jackson Lake in the evening.",
        "youtubeId": "RvYuT3b6png",
        "youtubeTitle": "Grand Teton National Park",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 44.41,
            "lng": -110.80
        },
        "locationName": "Mile 3,013 - Yellowstone National Park, WY - Lone Star Geyser erupting",
        "blurb": "I met a young park employee at Yellowstone who implored me to visit The Lone Star Geyser. She said that it was both a tremendous sight and considerably less trafficked than other popular points in the park located closer to parking lots. I took her advice and did not regret it. I waited for Lone Star to erupt and recorded this sound.",
        "youtubeId": "9k4lLU_lW-M",
        "youtubeTitle": "Lone Star Geyser Erupting",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 45.63,
            "lng": -116.28
        },
        "locationName": "Mile 3,333 - White Bird, Idaho - Salmon River flowing in the morning",
        "blurb": "If I had to pick one favorite vista over 4,000 miles, it would be the one from the top of White Bird Hill in Idaho. After a couple of flat tires and a series of punishing ascents between Kooskia and Riggins, I saw the Salmon River 2,000 feet below me with its rapids glistening in the afternoon sun. I descended an old county road full of switchbacks and devoid of cars. It was heaven. This is the sound of a quieter section of river.",
        "youtubeId": "DvmUpaTtcZY",
        "youtubeTitle": "Salmon River Flowing in the Morning",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 44.01,
            "lng": -124.12
        },
        "locationName": "Mile 4,002 - Florence, OR",
        "blurb": "Trees creaking in the wind and a distant foghorn, recorded from my campsite in Florence, Oregon. I picked up a huge Mexican feast in town for myself and hauled it to the ocean so I could eat with views of the water. I never tire of hearing this sound. ",
        "youtubeId": "viFJrsVWhEg",
        "youtubeTitle": "Florence, OR",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    },
    {
        "position": {
            "lat": 44.02,
            "lng": -124.13
        },
        "locationName": "Miles 4,002 - Florence, OR - Pacific ocean waves",
        "blurb": "This is the sound of the end: the wild, windy Pacific Ocean ripping in the afternoon. The obvious observation of how grand it is struck me a little differently after it took 2 months to reach from the quiet, more intimate Atlantic at home in Maine. ",
        "youtubeId": "wB949pU3mWs",
        "youtubeTitle": "Pacific Ocean Waves",
        "icon": "diamond.svg",
        "releaseDate": "2026-08-24"
    }
]
