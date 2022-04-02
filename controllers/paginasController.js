import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimoniales.js'



const paginaInicio = async (req, res)=>{//req =lo que enviamos/res - lo que express nos responde

    
    // const viajes = await Viaje.findAll({limit: 3});
    // const testimoniales = await Testimonial.findAll({limit:3})
    //manera de que ambas consultas a la DB se hagan al mimso tiempo
    const promiseDB =[];
    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    try {
        
        const resultado = await Promise.all(promiseDB)

        res.render('inicio',{
        pagina: "inicio",
        clase: 'home',
        viajes:resultado[0] ,
        testimoniales:resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
    
}
const paginaNosotros = (req, res)=>{
    res.render('nosotros',{
            pagina: "Nosotros"
        });
}
 const paginaViajes = async (req, res)=>{
    //consultar DB
   const viajes = await Viaje.findAll();
    
    

    res.render('viajes',{
            pagina: "Próximos Viajes",
            viajes //como llave y valor se llaman igual, no hace falta poner ambos
        });
};

const paginaTestimoniales =  async (req, res)=>{

    try {

        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales',{
            pagina: "Testimoniales",
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
    
};
//muestra un viaje por su Slug
 const paginaDetalleViaje= async (req,res)=>{
    const {slug}= req.params

    try {
        const viaje = await Viaje.findOne({where:{slug}});

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
 };



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje

}