import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales',{//el nombre de la tabla de la base de datos que habiamos conectado
                    nombre:{
                        type: Sequelize.STRING
                    },
                    correo:{
                        type: Sequelize.STRING
                    },
                    mensaje:{
                        type: Sequelize.STRING
                    },
                   
})