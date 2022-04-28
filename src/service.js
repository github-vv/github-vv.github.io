import users from './users.json';

const headers = {
    'Content-Type': 'application/json',
    'Api-Key': '2eb4d913-f343-4e6d-aa38-0f2a8718e521'
};

class ServiceClass {
    constructor() {
        this.users = users;
        this.endpoints = {
            appointments: 'https://json.psty.io/api_v1/stores/appointments',
            hours: 'https://json.psty.io/api_v1/stores/hours'
        }
    }

    checkUser(username) {
        return !!this.users.find(user => user.username === username);
    }

    save(appointments) {
        return fetch(this.endpoints.appointments, {
            method: 'PUT',
            headers,
            // keep all the other appointments
            body: JSON.stringify(appointments)
        });
    }

    get() {
        return fetch(this.endpoints.appointments, {
            method: 'GET',
            headers
        }).then(response => response.json()).then(data => data.data);
    }

    getHours(){
        return fetch(this.endpoints.hours, {
            method: 'GET',
            headers
        }).then(response => response.json()).then(data => data.data);
    }
}

export const Service = new ServiceClass();