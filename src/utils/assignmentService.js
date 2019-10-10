import tokenService from './tokenService';

export default  {
    getAllAssignments,
    createAssignment
}

const BASE_URL = '/api/assignments/';

function getAllAssignments() {
    //Gets assignments based on logged in user
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    //Turns response into json object of users assignments
    .then(res => res.json());
}

function createAssignment(assignment) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'content-type': 'application/json'
        },
        body: JSON.stringify(assignment)
    }).then(res => res.json());
}

