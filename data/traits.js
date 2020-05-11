const traits = [
    "1%",
    "12 years old",
    "a dollar",
    "a.i.",
    "accent",
    "addictive personality",
    "affirmative action",
    "afraid of water",
    "air tight",
    "alcoholic",
    "allergic to everything",
    "alone",
    "always hungery",
    "ambidextrous",
    "anal glands",
    "apocalypse",
    "apples",
    "arrested",
    "associate's degree",
    "australian accent",
    "avid reader",
    "backyard wrestler",
    "bad luck",
    "bad under pressure",
    "baguette",
    "bail",
    "bald eagal",
    "ballet",
    "balls",
    "bathes in bleach",
    "beard",
    "beefcake",
    "bees",
    "big net",
    "big shoes",
    "bikini season",
    "bipolar",
    "bitches",
    "black belt",
    "black hole",
    "blacklight",
    "bleach blond",
    "bleed",
    "blonde",
    "blunt",
    "boat",
    "boats",
    "bone",
    "boner",
    "boomerang",
    "born on the streets",
    "box",
    "box wine",
    "braces",
    "brass knuckles",
    "brick",
    "british accent",
    "brownies",
    "brunette",
    "buddhism",
    "burning bush",
    "calendar model",
    "camera",
    "camouflage",
    "can defuse bombs",
    "can swallow anything",
    "can't feel",
    "can't lie",
    "can't whistle",
    "cancer",
    "candy",
    "cane",
    "cannibal",
    "cannibalism",
    "cape",
    "captain",
    "cavernous",
    "cavity",
    "cell over",
    "cesspool",
    "chain",
    "chainsaw",
    "chastisty belt",
    "chastity belt",
    "cheese",
    "chemicals",
    "chocolate",
    "chocolate fetish",
    "chronic masterbator",
    "chronic masturbator",
    "clammy",
    "claw",
    "clinically depressed",
    "club",
    "coat hanger",
    "cock ring",
    "coke",
    "cold black heart",
    "collection",
    "combover",
    "comes in spurts",
    "comfortable shoes",
    "communes with fish",
    "condoms",
    "confession",
    "confident",
    "conservative",
    "consolation prize",
    "convict",
    "conviction",
    "cougar",
    "cougars",
    "crabs",
    "crack",
    "critical mass",
    "crystal ball",
    "cursed",
    "daddy",
    "daddy issues",
    "daily shower",
    "daredevil",
    "dark room",
    "daughter",
    "day job",
    "dead",
    "dead parents",
    "deaf in one ear",
    "decency",
    "decoder ring",
    "deep",
    "devil's advocate",
    "diaper",
    "dingo repellant",
    "diplomatic immunity",
    "dirty",
    "dirty mind",
    "disability",
    "disorder",
    "disorganized",
    "dragon",
    "drive",
    "drug habit",
    "drug hideout",
    "dumpster diver",
    "dungeon",
    "dyslexic",
    "eat anything",
    "edible underwear",
    "effeminate",
    "eggplant",
    "el diablo",
    "emotionally hollow",
    "emotionally unstable",
    "envy",
    "epic gamer",
    "erectile dysfunction",
    "erotica",
    "erotica collection",
    "every problem ever",
    "evil",
    "evil laugh",
    "excuses",
    "experience",
    "experiments",
    "expert",
    "extra credit",
    "fairy dust",
    "false teeth",
    "fancy hat",
    "fast runner",
    "fear",
    "fecal matter",
    "field experience",
    "fifty cats",
    "fifty tattoos",
    "film",
    "filter",
    "fire breathing",
    "firebreathing",
    "fishnet stockings",
    "fishy",
    "flaming sword",
    "flies",
    "fluids",
    "foam sword",
    "foot fetish",
    "french accent",
    "friendly",
    "full of fear",
    "funny",
    "furry",
    "furry ",
    "gag reflex",
    "gambling addiction",
    "game tester",
    "garbage",
    "gator",
    "genetically engineered",
    "german",
    "german accent",
    "germaphobe",
    "ginger",
    "glitter burps",
    "glorious mane",
    "gluttony",
    "goat",
    "god complex",
    "gold cross",
    "good times in tijuana",
    "grass",
    "greed",
    "green card",
    "grim",
    "grit",
    "grunt",
    "hairy",
    "hallucinates",
    "handcuffs",
    "handlebar moustache",
    "handlebars",
    "happy ending",
    "hash",
    "hears voices",
    "heavy flow",
    "heights",
    "high",
    "hocus focus",
    "holy grail",
    "hook",
    "hot dog",
    "hot mess",
    "hoverboard",
    "hungover",
    "hurgover",
    "illiterate",
    "immunity",
    "implants",
    "inclusive",
    "indecisive",
    "indian accent",
    "insatiable",
    "invisible ink",
    "italian accent",
    "jacked forearms",
    "jackhammer",
    "jazz hands",
    "jerk magnet",
    "jet packs",
    "k.o.",
    "katana",
    "ketamine addiction",
    "ketamine needle",
    "kiss everything",
    "level",
    "liberal",
    "licence",
    "license",
    "likes to play games",
    "lipstick stain",
    "lisp",
    "lives in own reality",
    "living a lie",
    "loose",
    "lust",
    "mace",
    "magic wand",
    "magical",
    "magnum",
    "manicured nails",
    "massage oil",
    "medicine",
    "memes",
    "merit badge",
    "million dollar smile",
    "mind reader",
    "minion",
    "minivan",
    "moderately good in bed",
    "moist",
    "monocle",
    "mormon",
    "mumble",
    "nasty rash",
    "nice things",
    "night terrors",
    "night vision",
    "no sense of humor",
    "no sense of humour",
    "no sense of smell",
    "nothing left to lose",
    "numb face",
    "nunchucks",
    "nutcracker",
    "obsessive compulsive",
    "obsessive compulsive disorder",
    "obsessive foot washer",
    "oedipus",
    "oedipus complex",
    "one eye",
    "onii-chan",
    "online dating profile",
    "online degree",
    "only eats blue food",
    "open",
    "opium den",
    "orange juice",
    "organic",
    "original sin",
    "package",
    "panda",
    "party hat",
    "passive aggressive",
    "pathological liar",
    "patient",
    "pearcing",
    "peg leg",
    "phoenix's roommate",
    "phone",
    "piece of cake",
    "piece of shit",
    "piercing",
    "pivot",
    "player",
    "plow",
    "poker face",
    "pole",
    "poor judgement",
    "poor judgment",
    "pound",
    "pretencious",
    "prickly",
    "pride",
    "princess tiara",
    "private jet",
    "privilege",
    "purple drank",
    "pyromaniac",
    "ragecomics",
    "raging alcoholic",
    "rain",
    "rapid",
    "really bad aim",
    "really loves blood",
    "recess",
    "red light",
    "red panda",
    "red sea",
    "reservations",
    "resourceful",
    "ripped",
    "rock",
    "rock hard",
    "room",
    "room to grow",
    "rotten bagel",
    "rum",
    "russian accent",
    "s & m",
    "s&m",
    "s.t.d.",
    "sack",
    "sad childhood",
    "saggy",
    "saviec-off",
    "sawed off shotgun",
    "sawed-off shotgun",
    "scalpel",
    "scented candle",
    "scientology",
    "scissors",
    "screw",
    "secret identity",
    "sees dead",
    "self entitled",
    "self loathing",
    "self respect",
    "self-entitled",
    "self-loathing",
    "self-respect",
    "sex den",
    "sexual tyrannosaurus",
    "sexy",
    "sexy time",
    "shady",
    "shallow",
    "shame",
    "sharp knives",
    "shaved",
    "shed",
    "sheltered",
    "shirtless",
    "shooting blanks",
    "short attention span",
    "sidekick",
    "six months left to live",
    "six pack",
    "six-pack",
    "skin samples",
    "slender frame",
    "slimy",
    "sloth",
    "slur",
    "slut",
    "slutty",
    "smells like onions",
    "smelly",
    "smuggled goods",
    "snake",
    "snatch",
    "sneaky",
    "soap",
    "sob story",
    "social",
    "social media profile",
    "soft hands",
    "soft voice",
    "son",
    "soulless",
    "soundproof room",
    "southern accent",
    "spaceship",
    "spandex",
    "speaks panda",
    "speech impairment",
    "speech impediment",
    "speedboat",
    "spirit",
    "split personality",
    "sports car",
    "spray",
    "squeegee",
    "std",
    "steroids",
    "stockings",
    "stool",
    "stroke",
    "student loans",
    "super stressed",
    "supercar",
    "superpower",
    "survival skills",
    "swag",
    "swear",
    "sweat",
    "sword",
    "taint",
    "target practice",
    "tasteless",
    "telenovela",
    "tentacles",
    "terrible flatulence",
    "terrible things",
    "the antidote",
    "the perfect alibi",
    "three piece suit",
    "three-piece suit",
    "thug life",
    "tickle",
    "tight quarters",
    "time machine",
    "tip",
    "toothpaste",
    "topless",
    "tramp stamp",
    "tramp stamps",
    "trapped in the closet",
    "treasure",
    "treats",
    "trench coat",
    "tri sexual",
    "trisexual",
    "trophies",
    "trust fund",
    "ugly",
    "uncontrollable gas",
    "uncontrollable libdo",
    "uncontrollable libido",
    "uniform",
    "unstable",
    "utility belt",
    "utterly adorable",
    "utterly alone",
    "v card",
    "vegan",
    "vegeterian",
    "viral",
    "walker",
    "wasp",
    "wet",
    "wet dream",
    "wheelchair",
    "whip",
    "wings",
    "witty banter",
    "wizard hat",
    "wood",
    "word vomit",
    "work ethic",
    "wrath",
    "x-ray vision",
    "yoga pants",
]
