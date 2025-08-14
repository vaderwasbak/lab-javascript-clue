// ITERATION 1

/*const field = document.getElementById("body");
field.populateField();*/

// Suspects Array

const suspectsArray = [];

class Suspect {
    constructor(firstName, lastName, occupation, age, description, image, color) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.age = age;
        this.description = description;
        this.image = image;
        this.color = color;

        return suspectsArray.push(this);
    }
}

const mrGreen = new Suspect('Jacob', 'Green', 'Entrepreneur', 45, 'He has a lot of connections', '../suspects/mrGreen.jpg', 'Green');

const drOrchid = new Suspect('Doctor', 'Orchid', 'Scientist', 26, 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', '../suspects/drOrchid', 'White');

const profPlum = new Suspect('Victor', 'Plum', 'Designer', 22, 'Billionaire video game designer', '../suspects/profPlum', 'Purple');

const missScarlet = new Suspect('Kasandra', 'Scarlet', 'Actor', 31, 'She is an A-list movue star with a dark past', '../suspects/missScarlet', 'Red');

const mrsPeacock = new Suspect('Eleanor', 'Peacock', 'Socialité', 36, 'She is from a wealthy family and uses her status and money to earn popularity', '../suspects/mrsPeacock', 'Blue');

const mrMustard = new Suspect('Jack', 'Mustard', 'Retired Foorball player', 62, 'He is a former foorvall player who trues to get by on his former glory', '../suspects/mrMustard', 'Yellow');


// Rooms Array

const roomsArray = [];

class Room {
    constructor(name) {
        this.name = name;

        return roomsArray.push(this);
    }
}

const room1 = new Room('Dining Room');
const room2 = new Room('Conservatory');
const room3 = new Room('Kitchen');
const room4 = new Room('Study');
const room5 = new Room('Library');
const room6 = new Room('Billiard Room');
const room7 = new Room('Lounge');
const room8 = new Room('Ballroom');
const room9 = new Room('Hall');
const room10 = new Room('Spa');
const room11 = new Room('Living Room');
const room12 = new Room('Observatory');
const room13 = new Room('Theater');
const room14 = new Room('Guest House');
const room15 = new Room('Patio');

// Weapons Array

const weaponsArray = [];

class Weapon {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;

        return weaponsArray.push(this);
    }
}

const weapon1 = new Weapon('Rope', 10);
const weapon2 = new Weapon('Knife', 8);
const weapon3 = new Weapon('candlestick', 2);
const weapon4 = new Weapon('Dumbell', 30);
const weapon5 = new Weapon('Poison', 2);
const weapon6 = new Weapon('Axe', 15);
const weapon7 = new Weapon('Bat', 13);
const weapon8 = new Weapon('Thropy', 25);
const weapon9 = new Weapon('Pistol', 20);

// ITERATION 2

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function pickMystery(suspect, room, weapon) {
    return {
        suspect: selectRandom(suspect),
        room: selectRandom(room),
        weapon: selectRandom(weapon)
    }
}

/*function pickMystery(suspect, room, weapon) {
    return {
        suspect: suspect[Math.floor(Math.random() * suspect.length)],
        room: room[Math.floor(Math.random() * room.length)],
        weapon: weapon[Math.floor(Math.random() * weapon.length)]
    }
}8/

/*function pickMystery(suspect, room, weapon) {
    const mystery = {
        suspect: suspectsArray[Math.floor(Math.random() * suspect.length)],
        room: roomsArray[Math.floor(Math.random() * room.length)],
        weapon: weaponsArray[Math.floor(Math.random() * weapon.length)]
    }

    return mystery;
}*/

/*function pickMystery(suspect, room, weapon) {
    const randomSuspect = Math.floor(Math.random() * suspect.length);
    const randomRoom = Math.floor(Math.random() * room.length);
    const randomWeapon = Math.floor(Math.random() * weapon.length);

    const mystery = {
        suspect: suspectsArray[randomSuspect],
        room: roomsArray[randomRoom],
        weapon: weaponsArray[randomWeapon]
    }

    return mystery;
}*/


// ITERATION 3

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

/*document.onload(populateField);*/

/*function populateField() {
    suspectsArray.forEach(suspect => {
    let newContainer = document.createElement("div");
    let newImage = document.createElement("img");
    let imageURL = `${suspect.image}`;
    newImage.setAttribute("src", imageURL);
    newContainer.appendChild(newImage);
    field.appendChild(newContainer);
    });
}*/