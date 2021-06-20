import { makeAutoObservable } from 'mobx';
import AuthService from "../services/AuthService";
import axios from 'axios';
import { API_URL } from '../http';


export default class Store {
    user = {};
    isAuth = false;
    isLoading = false;
    error = null;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }
   
    setAuth(bool) {
        this.isAuth = bool;
    }
    setUser(user) {
        this.user = user;
    }
    setLoading(bool) {
        this.isLoading = bool;
    }

    setError(error) {
        this.error = error;
    }
    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            console.log(response.data.user.email);
        } catch(error) {
            console.log(error.response?.data?.message);
        }
    }

    async registration(email, password) {
        try {
            await AuthService.registration(email, password);
        } catch(error) {
            this.setError(error);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser( {} );
        } catch(error) {
            console.log(error.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

}