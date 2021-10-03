import {data} from '../data/data'

export const getData = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(data);
        }, 3000)
    })
}