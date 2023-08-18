const projectContainer = document.querySelector('#container-projects')
let projects = []

//lê o arquivo json com dados
async function getListsProjects(){
    const fetchResponse  =  await fetch("./projects.json")
    const results = await fetchResponse.json()
    return results
}

// carrega os cards seção projetos dinamicamente
window.onload =  async function() {
    projects = await getListsProjects()
    projects.forEach(project => renderProject(project))
}

function renderProject(project) {

    const projectElement = document.createElement('div')
    projectElement.classList.add('card-project')
    projectContainer.appendChild(projectElement)

    const projectImage = document.createElement('img')
    projectImage.classList.add('img-project')
    projectImage.src = project.img
    projectImage.alt = project.title
    projectElement.appendChild(projectImage)

    const projectTitle = document.createElement('h3')
    projectTitle.classList.add('title-project')
    projectTitle.textContent = project.title
    projectElement.appendChild(projectTitle)

    const projectDescription = document.createElement('p')
    projectDescription.classList.add('project-description')
    projectDescription.textContent = project.description
    projectElement.appendChild(projectDescription)

    const projectTechnologies = document.createElement('p')
    projectTechnologies.classList.add('project-technologies')
    projectTechnologies.innerHTML = `Tecnologias: <strong> ${project.technologies} </strong>`
    projectElement.appendChild(projectTechnologies)

    const projectBtn = document.createElement('div')
    projectBtn.classList.add('btn')

    const projectLink = document.createElement('a')
    projectLink.href = project.url
    projectLink.target = "_blank"
    projectLink.textContent = "Ver no GitHub"
    projectBtn.appendChild(projectLink)
    projectElement.appendChild(projectBtn)

}