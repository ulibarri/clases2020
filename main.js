const Music = require('./mongo/music.js')
const express = require('express')
const app = express()

let port = 3000

app.listen(port, () => {
    app.get('/add', (req, res) => {
        res.send('You have entered to add')
        Music.findOne({name: 'Serial Thrilla', artist: 'The Prodigy'}, (err, object) => {
            if (err) {
                console.error(err)
            }
            if (object) {
                console.log('Already added')
            } else {
                let newMusic = new Music({
                    name: 'Serial Thrilla',
                    artist: 'The Prodigy',
                    album: 'The Fat Of The Land',
                    trackNum: 4
                })
                newMusic.save().catch(err => console.error(err))
                console.log('Added')
            }
        })
    })
    app.get('/delete', (req, res) => {
        res.send('You have entered to delete')
        Music.findOne({name: 'Serial Thrilla', artist: 'The Prodigy'}, (err, object) => {
            if (err) {
                console.error(err)
            }
            if (!object) {
                console.log('Already deleted')
            } else {
                Music.deleteOne({
                    name: 'Serial Thrilla',
                    artist: 'The Prodigy',
                    album: 'The Fat Of The Land'
                  }).then(console.log('Deleted')).catch((err) => console.err(err));
            }
        })
    })
})