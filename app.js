/**
 * @todo - Make fetch-apis folder inside of codealongs
 * @todo - Create 3 files inside fetch-apis (index.html style.css app.js)
 * @todo - Add skeleton for index.html
 * @todo - link your css
 * @todo - link your script
 * @todo - Open VS code to app.js
 * @todo - Make a README.md file
 */

let githubUrl = 'http://api.github.com/users/';

/**
 * Template literals
 */

//let username = 'romebell';
//let = romeUrl = `${githubUrl}${username}`; // {string} -> https://api.github.com/users/romebell
// console.log('romeUrl:', romeUrl); // endpoint

/**
 * Fetch
 */

/**
 * Syntax - .then()
 * @function getRomeBellData
 * @return {object} - name, bio, following
 */
/*
function getRomeBellData() {
    fetch(romeUrl)
    .then(responseFromGithub => {
        console.log('responseFromGithub:', responseFromGithub);
        // check the status to make sure its 200
        console.log('status:', responseFromGithub.status);
        if (responseFromGithub.status === 200) {
            return responseFromGithub.json(); // grab this and pass it to the next .then(variable)
        } else {
            console.log('There is no data for this user!');
        }
    })
    .then(data => {
        console.log('data: ', data); // {object}
       // console.log('name: ', data.name); // Rome Bell -> {string}
        // Destructuring
       // let { bio } = data;
      //  console.log('bio:', data);
        // Destructure following
       // let { following } = data;
       // console.log('following:', following);

        // Destructure name, bio, following
        let { name, bio, following} = data;
        console.log('name:', name);
        console.log('bio:', bio);
        console.log('following:', following);

        const result = {name, bio, following};
        //result.name = name;
        //result.bio = bio;
        //result.following = following;

        return result;

    });
}
 
// Run 💖 -> f
// getRomeBellData();


/**
 * @todo Make two functions getBradRipple, getQmsparks
 * @todo Return 2 different items of data inside an object { name: ''}
 */
/*
let username2 = 'bradripple'
let bradUrl = `${githubUrl}${username2}`;
function getBradRipple() {
    fetch(bradUrl)
    .then(responseFromGithub => {
        console.log('responseFromGithub:',responseFromGithub);
        console.log('status:', responseFromGithub.status);
        if (responseFromGithub.status === 200) {
            return responseFromGithub.json();
        } else {
            console.log('There is not data for this user!');
        }
    })
    .then (data => {
        console.log('data:', data);

        let { name, location, public_repos } = data;
        console.log('name:', name);
        console.log('location:', location);
        console.log('public repos:', public_repos);

        const result = { name, location, public_repos}

        console.log('result:', result);

        return result;
    })
}

// Run -> f
getBradRipple();

let username1 = 'qmsparks';
let quinUrl = `${githubUrl}${username1}`;

function getQmsparks() {
    fetch(quinUrl)
    .then(responseFromGithub => {
        console.log('responseFromGithub:', responseFromGithub);
        console.log('status:', responseFromGithub.status);
        if(responseFromGithub.status === 200) {
            return responseFromGithub.json();
        } else {
            console.log('there is not data');
        }
    })
}

// Run -> f



/**
 * Syntax - async/await
 */


/**
 * Function Expression
 */
/*
const getRobData = function () {
    let robUrl = `${githubUrl}rest2437`; // {string} //http://api.github.com/users/rest2437
    fetch(robUrl)
    .then(responseFromGithub => { // promise -> {object} : what is being returned from the previous call
        console.log('responseFromGithub:', responseFromGithub);
        //check the status to make sure it's 200
        if (responseFromGithub.status === 200) {
            return responseFromGithub.json(); 
        } else {
            console.log('There is no data for this user!');
        }

    })
    .then(data => {
        console.log('data:', data);
        console.log('name:', data.name);

        let { name, html_url, public_repos} = data;
        console.log('name:', name);
        console.log('html_url:', html_url);
        console.log('public_repos:', public_repos);
    })

}

// getRobData();

const getBothDataSets = function () {
    console.log('inside get getBothDataSets');
    getRomeBellData();
    console.log('run getRomeBellData');
    getRobData();
    console.log(' run getRobData');
}

//Run
getBothDataSets();

async function getCalClemmerData() {
    const responseFromGithub = await fetch(`${githubUrl}CalClemmer`);
    console.log('cal response:', responseFromGithub);

    if (responseFromGithub.status === 200) {
        const data = await responseFromGithub.json(); // {object}
        //console.log('data constructor', data.constructor);
        let { name, html_url, public_repos } = data;
        let results = {
            name, 
            html_url,
            public_repos
        };
        console.log('results:', results);
        return results;
    } else {
        return { message: 'There was no data'}
    }
}
// Run
// getCalClemmerData();

const getNicholasTranData = async function(){
    const responseFromGithub = await fetch(`${githubUrl}siegfer`);
    console.log(`nicholas response:`, responseFromGithub);

    if (responseFromGithub.status === 200) {
        const data = await responseFromGithub.json();
        console.log('data:', data);
        let { name, html_url, public_repos} = data;
        let results = {
            name, 
            html_url,
            public_repos
        };
        console.log('results:', results);
        return results;
    } else {
        return { message: 'No data found'}
    }
}

const getBothData = async function () {
    let x = await getCalClemmerData();
    console.log('x:', x);
    console.log('before y')
    let y = await getNicholasTranData();
    console.log('after y')
    console.log('y:', y);
}
//Run
getBothData();
// When the javascript file is ran
// goes and finds all of the functions that declared

/**
 * function helloWorld() {
 *     console.log('Hello World');
 * }
 */
/*
let name = 'Rome';
const array = [1, 2, 3];
var age = 33;
console.log('age:', age);

async function getSharleneData() {
    const responseFromGithub = await fetch(`{githubUrl}SharleneImperial`);
    console.log('sharlene response:', responseFromGithub);

    if (responseFromGithub.status === 200) {
        const data = await responseFromGithub.json();
        console.log('data:', data);
        let { name, html_uel, public_repos } = data;
        let results = {
            name, 
            html_url,
            public_repos
        };
        console.log('results:', results);
        return results;
    } else {
        return { message: 'There was no data' }
    }
}

const getKasaiData = async function () {
    const responseFromGithub = await fetch(`${githubUrl}kasaiavery3`);
    console.log('kasai response:', responseFromGithub);

    if (responseFromGithub.status === 200) {
        const data = await responseFromGithub.json();
        console.log('data:', data);
        let { name, html_url, public_repos } = data;
        let results = {
            name,
            html_url,
            public_repos
        };
        console.log('results:', results);
        return results;
    } else {
        return { message: 'No data found'}
    }
}
*/


/**
 * Write a function getUserData(usernames) that takes in an array 
 * of strings ( Github usernames ) and return an array of objects that has { login, name, id }
 * which comes back as data from Github
 * @link https://api.github.com/users/
 * @function getUserData
 * @param usernames - {string}
 * @return {array[ojbect]} object includes login, name, id
 */

 
const getUserData = async function (usernames) {
     const engineerData = [];
     for(let i=0; i < usernames.length; i++) {
         let username = usernames[i];
         const responseFromGithub = await fetch(`${githubUrl}${username}`);
         // console.log('user response:', responseFromGithub);

         if (responseFromGithub.status === 200) {
             const data = await responseFromGithub.json();
             // console.log('data:', data);
             let { login, name, id, bio, url} = data;
             let engineer = {
                 login,
                 name,
                 id,
                 bio,
                 url
             };
             console.log('engineer:', engineer);
             engineerData.push(engineer);
         } else {
             return { message: 'No data found' }
         }
     }
     return engineerData;
}

const softwareEngineers = [
    'kasaiavery3', 
    'romebell', 
    'CalClemmer', 
    'janejiunkim', 
    'SharleneImperial', 
    'bradripple',
    'rest2437',
    'qmsparks',
    'siegfer'
];

// Run 🏎 -> f

/*
async function getName() {
    const engineers = await getUserData(softwareEngineers);
    const names = [];
    for (let i = 0; i < engineers.length; i++) {
        let index = engineers[i];
        console.log(index.name);
        if (index.name !== null) {
            names.push(index.name);
        } else {
            names.push(index.id);
        }
    }
    console.log(names);
    return names;
}

async function getBio() {
    const engineers = await getUserData(softwareEngineers);
    console.log(engineers);
    const bios = [];
    for (let i = 0; i < engineers.length; i++) {
        let index = engineers[i];
        console.log(index.bios);
        if (index.name !== null) {
            bios.push(index.bios);
        } else {
            console.log("No bio");
        }
    }
    console.log(bios);
    return bios;
}
*/

/*
const getNameAndBio = async function () {
    const engineers = await getUserData(softwareEngineers);
    const namesAndBios = [];
    for (let i = 0; i < engineers.length; i++) {
        let index = engineers[i];
        console.log(index.name);
        if (index.name !== null) {
            if (index.bio === null) {
                const person = {name: index.name, bio: "No bio listed"};
                namesAndBios.push(person);
            } else if (index.bio !== null) {
                const person = {name: index.name, bio: index.bio};
                namesAndBios.push(person);
            }
            
        } 
    }
    console.log(namesAndBios);
    return namesAndBios;
}
*/
/*
async function addNameList() {
    const divEl = document.querySelector('div');
    const newUl = document.createElement('ul');
    const names = await getName();
    divEl.appendChild(newUl);
    
    for (let i = 0; i < names.length; i++){
        let _engineer = names[i];
        const newListItem = document.createElement('li');
        newListItem.textContent = _engineer;
        newUl.appendChild(newListItem);
    }
    return divEl;
}

async function addBioList() {
    const divEl = document.querySelector('div');
    const newUl = document.createElement('ul');
    const bios = await getBio();
    divEl.appendChild(newUl);
    
    for (let i = 0; i < bios.length; i++){
        let _engineer = bios[i];
        const newListItem = document.createElement('li');
        newListItem.textContent = _engineer;
        newUl.appendChild(newListItem);
    }
    return divEl;
}
*/
async function addNameList() {
    const engineers = await getUserData(softwareEngineers);
    const divEl = document.querySelector('div');
    const nameUl = document.createElement('ul');
    nameUl.textContent = "Names List:";
    // const namesAndBios = await getNameAndBio();
    divEl.appendChild(nameUl);
    
    for (let i = 0; i < engineers.length; i++){
        let _engineer = engineers[i].name;
        const newListItem = document.createElement('li');
        newListItem.textContent = _engineer;
        nameUl.appendChild(newListItem);
    }
    return divEl;
}

async function addBioList() {
    const engineers = await getUserData(softwareEngineers);

    const divEl1 = document.querySelector('div');
    const bioUl = document.createElement('ul');
    bioUl.textContent = "Bios List: ";
    // const namesAndBios = await getNameAndBio();
    divEl1.appendChild(bioUl);
    
    for (let i = 0; i < engineers.length; i++){
        let _engineer = engineers[i].bio;

        if(_engineer !== null) {
            const newListItem = document.createElement('li');
            newListItem.textContent = _engineer;
            bioUl.appendChild(newListItem);
        } else {
            const newListItem = document.createElement('li');
            newListItem.textContent = "No bio listed";
            bioUl.appendChild(newListItem);
            console.log('bioUl:', bioUl);
        }
    }
    return divEl1;
}

async function addUrlList() {
    const engineers = await getUserData(softwareEngineers);

    const divEl = document.querySelector('div');
    const urlUl = document.createElement('ul');
    urlUl.textContent = "Url List: ";
    divEl.appendChild(urlUl);

    for(let i = 0; i < engineers.length; i++){
        let _engineer = engineers[i].url;
        if (_engineer !== null) {
            const newListItem = document.createElement('li');
            newListItem.textContent = _engineer;
            urlUl.appendChild(newListItem);
        } else {
            const newListItem = document.createElement('li');
            newListItem.textContent = "No Url listed";
            urlUl.appendChild(newListItem);
            console.log('urlUl:', urlUl);
        }

    }
}

addNameList();
addBioList();
addUrlList();





//const newDiv = addList(getUserData(softwareEngineers));




