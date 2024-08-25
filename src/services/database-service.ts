// create a sqlite database connection using DataSource class from typeorm 
import { DataSource } from 'typeorm';

const databaseService = new DataSource({
    "type": "sqlite",
    "database": "src/infrastructure/db/database.sqlite",
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/infrastructure/migrations/**/*.ts"
    ],
    "subscribers": [
        "src/infrastructure/subscriber/**/*.ts"
    ]
});

export default databaseService;