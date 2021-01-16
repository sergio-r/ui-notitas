module.exports = (sequelize, DataTypes) => {
    let alias = "Note";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        },
        status: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'notes',
        timestamps: true,
    }

    const Note = sequelize.define(alias, cols, config);
    return Note
}