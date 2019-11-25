import React from 'react'
import { Route, Switch } from "react-router-dom"
import Navbar from './Navbar'
import Landing from './Landing'
import Galeria from './Galeria'

export default function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Landing} />
                {/* <Route exact path="/sobremi" component={SobreMi} /> */}
                <Route exact path="/galeria" component={Galeria} />
                {/* <Route exact path="/servicios" component={Servicios} /> */}
                {/* <Route exact path="/reservar-cita" component={ReservarCita} /> */}
                {/* <Route exact path="/contacto" component={Contacto} /> */}
            </Switch>
        </div>
    )
}
