//Create the directory
let teamDirectory = [
    { name: 'Leo Brooks',  role: 'Designer',  skills: ['UI', 'UX', 'Figma'],          available: true  },
    { name: 'Sasha Ivana', role: 'Developer', skills: ['HTML', 'CSS', 'JS'],           available: false },
    { name: 'Jordan Lee',  role: 'Manager',   skills: ['Planning', 'Agile'],           available: true  }
];

//Add a new specialist
teamDirectory.push({ name: 'Casey Moore', role: 'QA Engineer', skills: ['Testing', 'Debugging'], available: true });

//Updateavailability
//teamDirectory[1].available = true;

//Data extraction
console.log(`First member: ${teamDirectory[0].name} / ${teamDirectory[0].skills[0]}`);
console.log(`Last member: ${teamDirectory[teamDirectory.length - 1].name} / ${teamDirectory[teamDirectory.length - 1].skills.length} skills`);
console.log(`Total members: ${teamDirectory.length}`);

