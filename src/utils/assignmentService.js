import tokenService from './tokenService';

export default  {
    getAllAssignments,
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

