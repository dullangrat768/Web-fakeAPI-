import { useState } from 'react'
import Inicio from './components/inicio'
import coleccion from './components/coleccion'
import favoritos from './components/favoritos'
import info from './components/info'
import usuario from './components/usuario'
import fakeapi from './components/fakeapi'
import './App.css'

function App() {

  return (
    <>
    <Inicio/>
    <coleccion/>
    <favoritos/>
    <info/>
    <usuario/>
    <fakeapi/>
    </>
  )
}

export default App
