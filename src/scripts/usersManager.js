import { v4 as uuidv4 } from 'uuid';

export default class userManager {
    constructor() {}

    async addUser(obj){
        try {
            const user = {
                id: uuidv4(),
                ...obj
            }
            return user
        } catch (error) {
            console.error(error)
        }
    }
}