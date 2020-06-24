import React from 'react'

import Background from '../components/Background'
import Header from '../components/Header'
import Clubs from '../components/Clubs'

const styles = {
    container: {
        width: '100vw',
        height: '250vh',
        backgroundColor: '#eee',
        display: 'flex',
        flexDirection: 'column'
    },
    row: {
        display: 'flex'
    }
}

const Index = () => (
    <section style = { styles.container }>
        <div style = { styles.row }>
            <Background />
            <Header />
        </div>
        <Clubs />
    </section>
)

export default Index