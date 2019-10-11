import tokenService from './tokenService';

export default  {
    getAllAssignments,
    createAssignment,
    getOneAssignment,
    updateAssignment,
    deleteAssignment
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

function getOneAssignment(id) {
    //Gets assignment based on logged in user
    return fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    //Turns response into json object of users assignments
    .then(res => res.json());
}

function updateAssignment(updatedAssignment) {
    return fetch(`${BASE_URL}/${updatedAssignment._id}`, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedAssignment)
    })
    .then(res => res.json());
}

function deleteAssignment(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    .then(res => res.json());
}
