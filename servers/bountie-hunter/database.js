const uuid = require('uuid')

module.exports = [
{    
    firstName: "Jar Jar",
    lastName: "Binks",  
    living: true,
    bountyAmount: 100,
    type: "Jedi",
    _id: uuid.v4() 
},{    
    firstName: "Darth",
    lastName: "Vader",  
    living: true,
    bountyAmount: 200,
    type: "Sith",
    _id: uuid.v4() 
},{    
    firstName: "Luke",
    lastName: "SkyWalker",  
    living: true,
    bountyAmount: 300,
    type: "Jedi",
    _id: uuid.v4() 
}
]