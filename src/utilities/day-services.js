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
        return dayData
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}

export async function getDay(id){
    try { 
        const dayData = await dayAPI.detail(id)
        return dayData
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}

export async function updateDay(id, data){
    try {
        console.log(data)
        const dayData = await dayAPI.update(id, data)
        return dayData
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}