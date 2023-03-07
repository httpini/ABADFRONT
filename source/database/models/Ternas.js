module.exports=(sequelize,DataTypes)=>{
    let alias = "terna";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "ternas"
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
        responsable:{
            allowNull: false,
            type: DataTypes.STRING
        },
        email:{
            allowNull: false,
            type: DataTypes.STRING
        },
        tel:{
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }
    const Ternas = sequelize.define(alias, cols, config)

    Ternas.associate = function(model){
        Ternas.hasMany(model.partido, {
            as: 'partidos',
            foreignKey: 'terna_id',
        });
        
    
    }



    return Ternas
}