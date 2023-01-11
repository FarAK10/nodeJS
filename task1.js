import { Transform,pipeline } from "stream";
import {stdin,stdout,} from 'process'

const tranform = new Transform({
    transform(chunk,enc,cb){
        const reversed = chunk.toString().trim().split('').reverse().join('')+'\n';
        cb(null,reversed)
    }
})

pipeline(
    stdin,
    tranform,
    stdout,
    (err)=>{console.log(err.message)}
)
process.on("exit",()=>{console.log('thank you!')})