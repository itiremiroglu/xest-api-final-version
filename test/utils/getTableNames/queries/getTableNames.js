const { submitQuery } = require("~root/lib/database");

const getTableNames = () => submitQuery`
    SELECT 
    table_name as tableName 
    FROM information_schema.TABLES 
    WHERE table_schema = "xest_api_final_version_db";
`;

module.exports = getTableNames;
