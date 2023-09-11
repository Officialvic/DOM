// Ternary Operators
/*let age = prompt(`What is your age?`)
let warning = age >= 18 ? "You can play" : "You cannot play"
alert(warning)*/

//DOM Practicals
// let para = document.querySelector('body > p:nth-child(2)')
// console.log(para)

// change active class from one menu to another onclick

const menus = document.querySelectorAll('li');

menus.forEach(menu => {
    menu.addEventListener("click", () => {
        menus.forEach(menu => {
            menu.classList.remove('active');
        })
        menu.classList.add('active');
    })
}) 

// 
// let arr = ["Victor", 25, "Black", "Nigerian"]
// console.log(arr.splice(0, 3))
// console.log(arr)
// console.log(arr.splice(0, 2, "Seun", 23, "Bronde"))
// console.log(arr)
// let arr2 = [2,3,4,5]
// let arr3 = [6,7,8,9]
// console.log(arr.concat(arr2, arr3))

// let word = ['b','a','-','c','k','b']
// let wordLength = word.length;
// console.log(wordLength)
// console.log(word)
// let dashLength = word.indexOf('-') + 1
// console.log(word[dashLength].toUpperCase())
// console.log(word.filter(word => word.includes('b')))
// word.forEach(word => {
//     console.log(word.length)
//     })

// let numbers = [22,54,63,13,21,55,22,76,87,78,29]
// numbers.sort((a,b) => a - b)
// alert(numbers)

// let camelize = (str) => {
//     alert((str.split('')[str.indexOf('-') + 1]).toUpperCase())
// }
// camelize('my-short-string')



// var names = ['George','Ringo','Paul','John'];
// for(var i=0;i<names.length;i++){
//  doSomeThingWith(names[i]);
// }

// var names = ['George','Ringo','Paul','John'];
// var all = names.length;
// for(var i=0;i<all;i++){
//  doSomeThingWith(names[i]);
// }

// var awesomeBands = new Array();
// awesomeBands[0] = 'Bad Religion';
// awesomeBands[1] = 'Dropkick Murphys';
// awesomeBands[2] = 'Flogging Molly';
// awesomeBands[3] = 'Red Hot Chili Peppers';
// awesomeBands[4] = 'Pornophonique';

// var awesomeBands = [
//     'Bad Religion',
//     'Dropkick Murphys',
//     'Flogging Molly',
//     'Red Hot Chili Peppers',
//     'Pornophonique'
//    ];

let projects = [
{
    projectName : "Superstructure",
    id: 100111,
    supervisor: "Victor",
    projectImage: "images/project1(1).jpg"
},
{
    projectName : "Blockwork",
    id: 100111,
    supervisor: "Victor",
    projectImage: "images/project1(2).jpg"
},
{
    projectName : "Superstructure",
    id: 100111,
    supervisor: "Victor",
    projectImage: "images/project1(3).jpg"
},
{
    projectName : "Superstructure",
    id: 100111,
    supervisor: "Victor",
    projectImage: "images/project1(4).jpg"
}
]

let newProjects = [
{
    projectName : "Superstructure",
    id: 100111,
    supervisor : "Victor",
    projectImage: "images/project1(2).jpg"
},
{
    projectName : "Blockwork",
    id: 100111,
    supervisor: "Victor",
    projectImage: "images/project1(2).jpg"
},
{
    projectName : "Superstructure",
    id: 100111,
    supervisor: "Victor",
    projectImage: "images/project1(3).jpg"
},
{
    projectName : "Superstructure",
    id: 100111,
    supervisor: "Victor",
    projectImage: "images/project1(4).jpg"
}
]


let projectsContainer = document.getElementById("projects");
let newProjectContainer = document.getElementById("newProject");
renderProjects()

function renderProjects(){
    let projectBox = '';
    let newProjectBox = '<option>Select new project</option>'

    projects.forEach(project => {
        projectBox += `<div class="project">
        <img src="${project.projectImage}" alt="${project.projectName}">
        ${project.projectName} ${project.id}</div>`
        projectsContainer.innerHTML = projectBox;
    })

    newProjects.forEach(project => {
        newProjectBox += `<option value=${JSON.stringify(project)}>
        ${project.projectName} ${project.id}</option>`;
        newProjectContainer.innerHTML = newProjectBox
    })

}
function removeFirstProject(){
    let removedProject = projects.shift();
    alert(`${removedProject.projectName} has been removed. We have ${projects.length} projects left`)
    renderProjects()
}

function removeLastProject(){
    let removedProject = projects.pop();
    alert(`${removedProject.projectName} has been removed. We have ${projects.length} projects left`)
    renderProjects()
}

function getSelectedProject(){
    // let selectedProject = e.target.value;
    let selected = newProjectContainer.options[newProjectContainer.selectedIndex].value
    return selected;
}

function addToStart() {
    let selectedProject = getSelectedProject();
    projects.unshift(JSON.parse(selectedProject));
    renderProjects()
}

function addToEnd() {
    let selectedProject = getSelectedProject();
    projects.push(JSON.parse(selectedProject));
    renderProjects()
}



