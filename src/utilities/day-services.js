import * as dayAPI from './day-api'


export async function getDays() {
    try {
        const data = await dayAPI.index()
        return data
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}