module.exports=(sequelize,DataTypes)=>{
    let alias = "predio";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "predios"
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
        adress:{
            allowNull: false,
            type: DataTypes.TEXT
        },
        map:{
            allowNull: false,
            type: DataTypes.TEXT
        }
    }
    const Predio = sequelize.define(alias, cols, config)

    Predio.associate = function(model){
        Predio.hasMany(model.equipo_torneo, {
            as: 'equipos',
            foreignKey: 'predio_id',
        });
        Predio.hasMany(model.partido, {
            as: 'partidos',
            foreignKey: 'predio_id',
        });
    
    }



    return Predio
}