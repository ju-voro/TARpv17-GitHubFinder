loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getObject);
}

function getObject() {
    const gitHub = new Github;

    gitHub.getUser('ju-voro')
    .then(data=> {
        console.log(data);
    });
}