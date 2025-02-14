const dbConnection=require('../config/connection');

const createOurTeamService=(ourTeamData,callback)=>{
    const query='INSERT INTO team (name,qalification,experience,imageUrl) VALUES (?,?,?,?)';
    dbConnection.query(query,
        [
            ourTeamData.name,
            ourTeamData.qalification,
            ourTeamData.experience,
            ourTeamData.imageUrl
        ],
        (error,result)=>{
            callback(error,result)
        })
}

const getAllOurTeamService=(callback)=>{
    const query='SELECT * FROM team';
    dbConnection.query(query,
        (error,result)=>{
            callback(error,result);
        })
}

const getByIdOurTeamService=(ourTeamId,callback)=>{
    const query=`SELECT * FROM team WHERE id=?`;
    dbConnection.query(query,[ourTeamId],(error,result)=>{
        callback(error,result);
    })
}

const updateOurTeamService=(ourTeamId,ourTeamData,callback)=>{
    const query=`UPDATE team SET name=?,qalification=?,experience=?,imageUrl=? WHERE id=?`;
    dbConnection.query(query,
        [
            ourTeamData.name,
            ourTeamData.qalification,
            ourTeamData.experience,
            ourTeamData.imageUrl,
            ourTeamId
        ],
        (error,result)=>{
            callback(error,result);
        })
}

module.exports={
    createOurTeamService,
    getAllOurTeamService,
    getByIdOurTeamService,
    updateOurTeamService
}