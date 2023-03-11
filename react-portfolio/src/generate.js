
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, "/genrData.json")
console.log(outputPath)

const data = [{
    id: 1,
    title: 'Generate-ReadMe',
    pages: "",
    code: "",
    src: "./rm.png"
},
 
{
    id: 2,
    title: 'Movie-Zone',
    pages: "https://zakirali1.github.io/Movie-Zone/",
    code: "https://github.com/zakirali1/Movie-Zone",
    src: "./mvz.png"
 
},

{
    id: 3,
    title: "Weather-Dashboard",
    pages: "https://zakirali1.github.io/Weather-Dashboard/",
    code: "https://github.com/zakirali1/Weather-Dashboard",
    src: "./wd.png"
}
];


fs.writeFile(outputPath, JSON.stringify(data), err => {
    err ? console.err(err) : console.log("success!");
});