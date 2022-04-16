import { API_Picture } from './types'

const base_url = 'https://picsum.photos/v2/list'

async function getAllPicture(): Promise<Array<API_Picture>> {
    // Get all picture
    // [TODO] remove this return to use a fetch API

    const response = await fetch(base_url)
    const data = await response.json()


    return data

}

async function getPicture(id: API_Picture['id']): Promise<API_Picture> {
    // Get a picture
    // [TODO] remove this return to use a fetch API
    
    const response = await fetch(`${base_url}/${id}`)
    const data = await response.json()

    return data
}

export { getAllPicture, getPicture }
