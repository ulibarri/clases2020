const Games = require('./models/games.js')
const express = require ('express');
let app = express();
let port = process.env.PORT || 3000;


app.listen(port, () => {
    app.get('/add', (req,res) =>{
        res.send('add')
        Games.findOne({nombre:'halo', genero:"shooter"}, (err,object)=> {
            if(err) console.error(err)
            if (object) {
                console.log('repetido');
            }else{
                let newGames = new Games({
                    nombre: 'Gears',
                    genero: 'action/adventure'
                });
                newGames.save().theb(console.log('añadido')).catch(err => console.err(err));
            }
        });
    });
    app.get('/delete', (req,res) =>{
        res.send('delete')
        Games.deleteOne({nombre:'halo', genero:"shooter"}, (err,object)=> {
            if(err) console.error(err);
            if(!object){
                res.send('NO FOUNDED');
                console.log('NO EXISTE');
            } else{
                Games.deleteOne({
                    nombre: 'Gears',
                    genero: 'action/adventure'
                }).then(() =>{
                    res.send('eliminado');
                    console.log('eliminado');
                }).catch((err) => console.err(err))
            }
        });

    });
})