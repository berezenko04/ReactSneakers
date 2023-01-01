import axios from 'axios'

const DEFAULT_API_URL = 'https://63a98589100b7737b99480ec.mockapi.io';
const PATH__SNEAKERS = '/sneakers';
const PATH__CART = '/cart';
const PATH__FAVORITES = '/favorites';


export default class SneakersService {

    static async getSneakers() {
        const response = await axios.get(`${DEFAULT_API_URL}/${PATH__SNEAKERS}`);
        return response;
    }

    static async getCartItems() {
        const response = await axios.get(`${DEFAULT_API_URL}/${PATH__CART}`);
        return response;
    }

    static async getFavorites() {
        const response = await axios.get(`${DEFAULT_API_URL}/${PATH__FAVORITES}`);
        return response;
    }

}