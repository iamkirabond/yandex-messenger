import HTTPrequest from '../utils/HTTPRequest';
  import { BaseAPI } from './base-api';


const host = 'https://ya-praktikum.tech';
const authAPIInstance = new HTTPrequest(`${host}/api/v2/auth`);

export default class AuthAPI extends BaseAPI {
    signup(data){
        return authAPIInstance.post('/signup', {data})
            .then(response => {
                console.log(response)
            })
            .catch(reject => {
                console.log(reject);
            })
    }
    signin(data){
        return authAPIInstance.post('/signin', {data})
        .then(response => {
            console.log(response)
        })
        .catch(reject => {
            console.log(reject);
        })
    }
    getUserInfo(){
        return authAPIInstance.get('/user', {title: 'string'});
    }
    userExit(){
        return authAPIInstance.post('/logout', {title: 'string'});
    }
}
