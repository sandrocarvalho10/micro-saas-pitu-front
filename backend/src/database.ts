import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:teste1234@localhost:3306/micro_saas_pitu');

export default sequelize;

