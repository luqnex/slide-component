import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { XSalada } from './components/XSalada'
import { SaoBurguer } from './components/SaoBurguer'
import { XBacon } from './components/XBacon'
import { Combo } from './components/Combo'
import { Prove } from './components/Prove'

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