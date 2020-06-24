import React from 'react'

import classes from './Background.module.css'

const Background = () => (
    <div className = { classes.Background }>
        <img src = "sam1.png" alt = "sam" className = { classes.Sam } />

        <h5 className = { classes.Heading }>Celebrity Shows</h5>
        <p className = { classes.Info }>Electric Adventure 2014 + 2015, Victor Niglio, DVBBS, Bassjackers, Caked Up, 4B, DJ Snake, David S, DJ Yonny, Beatbreaker, GTA, Deorro, Fedde Le Grand, Markus Schulz, Dillion Francis, Corona (beer) + more.</p>
    </div>
)

export default Background