const fs = require('fs')


exports.getGroupAdmins = function (participants) {
    let admins = [];
    for (let i of participants) {
        i.admin !== null ? admins.push(i.id) : "";
    }
    return admins;
};

exports.updateDatabase = (jenis, after) => {
	
    //DATABASE
    const server = JSON.parse(fs.readFileSync('./database/server.json'))
    const grups = JSON.parse(fs.readFileSync('./database/grups.json'))
    
    
        if (jenis == "url") {
      server[0].url = after
    fs.writeFileSync('./database/server.json', JSON.stringify(server))
    return "success"
    } else if (jenis == "username") {
      server[0].username = after
    fs.writeFileSync('./database/server.json', JSON.stringify(server))
    return "success"
      } else if (jenis == "password") {
      server[0].password = after
    fs.writeFileSync('./database/server.json', JSON.stringify(server))
    return "success"
      } else if (jenis == "ip") {
      server[0].ip = after
    fs.writeFileSync('./database/server.json', JSON.stringify(server))
    return "success"
      } else if (jenis == "domain") {
      server[0].domain = after
    fs.writeFileSync('./database/server.json', JSON.stringify(server))
    return "success"
      } else if (jenis == "grup") {
      grups.push(after)
    fs.writeFileSync('./database/grups.json', JSON.stringify(grups))
    return "success"
    
    
    } else {
      return "failed"
    }
    
      
      
    } 


