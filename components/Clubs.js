import React from 'react'

import classes from './Clubs.module.css'

const Clubs = () => (
    <div className = { classes.Container }>
        <div className = { classes.List }>
            <h5 className = { classes.Heading }>Flordia</h5>
            <p className = { classes.Info }>Casa Feliz, Lake Mary Events Center, Bella Collina, Ever After Blueberry Farms</p>
        </div>
        <div className = { classes.List }>
            <h5 className = { classes.Heading }>Seattle</h5>
            <p className = { classes.Info }>Boxhouse, The Underground, Lucky Strike (Bellevue), F45 (Queen Anne), Tacoma Dome, Eastside Prep School, Rollin 253, Glendale Country Club, Nector Lounge, The Westin (Bellevue), South Bellevue Country Club, Lake Wilderness Lodge, Edmonds Yacht Club, 10 Degrees, Titlow Lodge, Historic 1625, Thornewood Castle, Trinity Tree Farms, Columbia Tower Club, Seattle Airport Marriott, McChord Club, Living Computers: Museum + Labs, Mount Baker Community Club. </p>
        </div>
        <div className = { classes.List }>
            <h5 className = { classes.Heading }>NJ / NY</h5>
            <p className = { classes.Info }>Abyss, Pure, Deko, Mansion, Lucky Strike (NYC), The Historic Old Bermuda, Palms Plaza, Shackamaxon Golf & Country Club, The Redbury, Hilton Garden Inn (SI), Above (SI), Pine's Manor, Stone House at Stirling Ridge, The Gramercy at Lakeside Manor, Park Ridge Marriott, The Riviera, Crest Hallow Country Club, Westin Hotel (Princeton), Perona Farms, Clark Landing, Shadowbrook, Venetian, Seasons, Park Chateau, Grand Marquis, The Manor, The Palace at Somerset Park, South Gate Manor, Brooklake Country Club, Farmstead Golf & Country Club, Battleground Country Club, Garden State Yacht Club, Farrington Lake, Woodcliff Manor, Molly Pitcher Inn, The Brick House, St. Pius X Church, Madison Hotel, The Mansion, Primavera Regency, Crystal Plaza, Hanover Manor, Windsor Ballroom, The Brownstone, Valley Regency, Nanina's In The Park, Forsgate Country Club </p>
        </div>
    </div>
)

export default Clubs