module.exports=(sequelize,DataTypes)=>{
    let alias = "delegado";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "delegados"
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
        last_name:{
            allowNull: false,
            type: DataTypes.STRING
        },
        email:{
            allowNull: true,
            type: DataTypes.TEXT
        },
        tel:{
            allowNull: true,
            type: DataTypes.INTEGER
        },
        equipo_id:{
            allowNull: false,
            type:DataTypes.INTEGER
        },
        categoria_id:{
            allowNull: false,
            type:DataTypes.INTEGER
        }
    }
    const Delegado = sequelize.define(alias, cols, config)

    Delegado.associate = function(model){
        Delegado.belongsTo(model.equipo,{
            as:"equipo",
            foreignKey:"equipo_id",
        })
        Delegado.belongsTo(model.categoria,{
            as:"categoria",
            foreignKey:"categoria_id",
        })
    }
   


    return Delegado
}