module.exports=(sequelize,DataTypes)=>{
    let alias = "club";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "clubes"
    }
    let cols = {
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name:{
            allowNull: false,
            type: DataTypes.STRING
        },
        name_url:{
            allowNull: false,
            type: DataTypes.STRING
        }
    }
    const Club = sequelize.define(alias, cols, config)

    Club.associate = function(model){
        Club.hasMany(model.equipo,{
            as:"equipos",
            foreignKey:"club_id",
        })
 
    }


    return Club
}