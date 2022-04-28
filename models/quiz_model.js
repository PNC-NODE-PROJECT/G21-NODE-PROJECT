const fs = require("fs");

const PATH = "data/data.json";
function load() {
    // read data from file (data.json)
    return JSON.parse(fs.readFileSync(PATH));
}

function getAllTasks() {
    // return the list of tasks
    return load();
}

// export the functions to use in the main file
module.exports.getAllTasks = getAllTasks;