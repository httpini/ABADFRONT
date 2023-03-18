module.exports=(sequelize,DataTypes)=>{
    let alias = "fecha";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "fechas"
    }
    let cols = {
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nro:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        name:{
            allowNull: false,
            type: DataTypes.STRING
        },
        torneo_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        dia:{
            allowNull: true,
            type: DataTypes.DATEONLY
        }
    }
    const Fecha = sequelize.define(alias, cols, config)

    Fecha.associate = function(model){
        Fecha.belongsTo(model.torneo, {
            as: 'torneo',
            foreignKey: 'torneo_id',
        })
        Fecha.hasMany(model.partido, {
            as: 'partidos',
            foreignKey: 'fecha_id',
        })
        Fecha.hasMany(model.sancionado, {
            as: 'sancionados',
            foreignKey: 'f_sancion',
        })
       
    }



    return Fecha
}