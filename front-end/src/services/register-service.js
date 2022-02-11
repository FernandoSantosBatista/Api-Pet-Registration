import api from './api';

function getAll() {
    return new Promise((resolve, reject) => {
        return api.get('/api/v1/dogs')
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function gettId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/api/v1/dogs/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error));
        });
    }
    function gettImage(logo) {
    return new Promise((resolve, reject) => {
        return api.get(`/files/${logo}`)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}
        

function register(dog) {
    return new Promise((resolve, reject) => {
        return api.post(`/api/v1/dogs`, dog)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function update(dog) {
    return new Promise((resolve, reject) => {
        return api.put(`/api/v1/dogs/${dog.id}`, dog)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        return api.delete(`/api/v1/dogs/${id}`)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

export default {
    getAll,
    gettId,
    register,
    update,
    remove,
    gettImage
};