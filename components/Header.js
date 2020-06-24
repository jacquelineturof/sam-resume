import React from 'react'

import classes from './Header.module.css'

const Header = () => (
    <header className = { classes.Header }>
        <h1 className = { classes.Name }>Sam Marcus (BPN)</h1>
        <h5 className = { classes.Heading }>Biography</h5>
        <p className = { classes.Info }>Endless energy combined with a dynamic personality and million dollar smile has propelled Sam (BPN) into a sought after DJ/MC/Event Host. Sam began spinning records at a young age. At 14, she became a roadie for several New Jersey DJ companies where she was like a sponge, soaking up everything going on in order to learn and improve her skills. Originally from New York/New Jersey area where she grew up and fell in love with all types of music, now rocks parties on both coasts. In addition to being a private event DJ, Sam has opened, closed for, and worked with some of the biggest names in the music industry today. Excelling in both private parties and clubs, easy to work with, Sam’s originality transforms parties into a once in a lifetime magical event.</p>
        <h5 className = { classes.Heading }>Locations</h5>
        <p className = { classes.Info }> NJ, NYC, Staten Island, Long Island, Orlando, Tampa, Miami, Boca Raton, Seattle, Destination</p>
    </header>
)

export default Header 