module.exports=(sequelize,DataTypes)=>{
    let alias = "categoria";
    let config={
        timestamps: false,
        deletedAt: false,
        tableName: "categorias"
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
        description:{
            allowNull: true,
            type: DataTypes.TEXT
        }
    }
    const Categoria = sequelize.define(alias, cols, config)



    return Categoria
}