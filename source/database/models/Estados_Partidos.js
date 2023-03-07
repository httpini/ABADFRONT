module.exports=(sequelize,DataTypes)=>{
    let alias = "estado_partido";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "estados_partidos"
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
        }
    }
    const Estados_Partidos = sequelize.define(alias, cols, config)

    Estados_Partidos.associate = function(model){
        Estados_Partidos.hasMany(model.partido, {
            as: 'partidos',
            foreignKey: 'estado_id',
        });
        
    
    }



    return Estados_Partidos
}