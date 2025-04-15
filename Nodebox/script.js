var nameList = [ 'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme',
    'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease',
    'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox' 
];

class Platform {
    constructor(resources) {
        this.resources = resources;
    }
}

class Level {
    constructor(lvl, peopleList) {
        this.lvl = lvl;
        this.peopleList = peopleList;
    }
}

class People {
    constructor(name, age, item = null) {
        this.name = name;
        this.age = age;
        this.item = item;
    }
    getRandomInt(min, max){
        const mintCeiled = Math.ceil(min);
        const MaxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored- minCeiled))
    }

    consume(platform) {
        const amount = 10;
        let percent = 0
        if(lvl < 3);
            percent = Math.floor(50,80)
        else if (lvl>3){
            percent = Math.floor(30,50)
            platform.resources -= amount;
        }
    }
}

const platform1 = new Platform(100);
const lvls = [];

for (let i = 0; i < 10; i++) {
    let people1 = new People(
        nameList[Math.floor(Math.random() * nameList.length)],
        Math.floor(Math.random() * 100)
    );

    let people2 = new People(
        nameList[Math.floor(Math.random() * nameList.length)],
        Math.floor(Math.random() * 100)
    );

    let level = new Level(i, [people1, people2]);
    lvls.push(level);
}

lvls.forEach((element) => {
    element.peopleList[0].consume(platform1);
    element.peopleList[1].consume(platform1);
    console.log(platform1);
});
