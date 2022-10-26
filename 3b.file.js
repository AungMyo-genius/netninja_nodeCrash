// File System
const fs = require('fs')

// reading file
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })
// console.log('last line')

// fs writing files
fs.writeFile('./docs/blog.txt', 'hello world', () => {
    console.log("file was writtten")
})

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', err => {
        if(err){
            console.log(err)
        }
        console.log('Folder created')
    })
}else{
    fs.rmdir('./assets', err => {
        if(err){
            console.log(err)
        }
        console.log('Folder deleted')
    })
}

//Deleting Files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', err => {
        if(err){
            console.log(err)
        }
        console.log("Deleted")
    })
}