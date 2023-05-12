import * as entryAPI from './entry-api'

export async function createEntry(id, data){
    try {
        const entryData = await entryAPI.create(id, data)
        return entryData
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
        
    }
}

export async function deleteEntry(id){
    try {
        const deletedEntry = await entryAPI.destroy(id)
        return deletedEntry
        
    } catch (error) {
        console.log(error)
        throw new  Error(error)
        
    }
}