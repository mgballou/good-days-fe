import * as dayAPI from './day-api'


export async function getDays() {
    try {
        const daysData = await dayAPI.index()
        return daysData
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}

export async function createDay(data){
    try {
        const dayData = await dayAPI.create(data)
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}