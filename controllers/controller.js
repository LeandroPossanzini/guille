
function getInfo(_req,res){
    const info = {
        "nombre" : "prueba",
        "test": 2
    }
    res.json(info)
};

module.exports = getInfo;

