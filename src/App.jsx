import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { XSalada } from './components/xSalada/XSalada'
import { SaoBurguer } from './components/saoBuguer/SaoBurguer'
import { XBacon } from './components/xBacon/XBacon'
import { Combo } from './components/combo/Combo'
import { Prove } from './components/prove/Prove'

import './App.css'

export function App(props) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={XSalada} />
          <Route path="/sao-burguer" component={SaoBurguer} />
          <Route path="/x-bacon" component={XBacon} />
          <Route path="/combo" component={Combo} />
          <Route path="/prove" component={Prove} />
        </Switch>
      </BrowserRouter>
    )
}