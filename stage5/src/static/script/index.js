function createProjectModal(name, description, url) {
    let project = document.createElement('div');
    let projectDesc = document.createElement('p');
    projectDesc.innerText = description + " ";

    let projectUrl = document.createElement('a');
    projectUrl.href = url;
    projectUrl.innerText = name;

    let tempSpan = document.createElement('span');
    tempSpan.appendChild(projectUrl);
    projectDesc.appendChild(tempSpan);
    project.appendChild(projectDesc)

    return project;
}

const projectData = {
    'Flashcard': createProjectModal("Flashcard", "Project about flashcard.",
        "https://github.com/ana117/hyperskill-frontend-Flashcard"),
    'Virtual Piano': createProjectModal("Virtual Piano", "Project about piano.",
        "https://github.com/ana117/hyperskill-frontend-VirtualPiano"),
};

document.getElementById('close-popup')
    .addEventListener('click', function (e) {
        let popupWindow = document.getElementById('popup-window');
        popupWindow.classList.toggle('hidden');
        popupWindow.classList.toggle('show');
    });

document.querySelectorAll('.open-window')
    .forEach(button => {
        button.addEventListener('click', function (e) {
            let popupWindow = document.getElementById('popup-window');
            let popupContent = document.getElementById('popup-content');
            let projectName = e.currentTarget.textContent;
            let projectDiv = projectData[projectName];

            popupContent.replaceChildren(projectDiv);
            popupWindow.classList.toggle('hidden');
            popupWindow.classList.toggle('show');
        });
    });


