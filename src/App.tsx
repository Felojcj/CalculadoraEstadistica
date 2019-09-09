import React, { useState } from 'react'
import stats from 'stats-lite'
import './App.scss'

class App extends React.Component {
  state = {
    item: {
      number: 0,
    },
    items: [],
  }

  handleAddNumber = (e: any) => {
    e.preventDefault()

    const item = {
      number: e.target.number.value,
    }

    this.setState((prevState: any) => {
      return {
        items: [...prevState.items, item],
      }
    })

    e.target.reset()
  }

  render() {
    const { items } = this.state
    const numbers = items.map((item: any) => item.number)

    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-header__tittle">Calculadora estadística</h2>
        </div>
        <div className="App-body">
          <form onSubmit={this.handleAddNumber} className="App-body__form">
            <input required type="number" name="number" id="number" placeholder="Escriba un numero..." className="App-body__form-input"/>
            <button type="submit" className="App-body__form-button">Agregar</button>
          </form>
          <ul>
            {items.map((item: any) => (
              <li key={item.number}>Número Ingresado: {item.number}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Resultados: </h3>

          {numbers.length >= 1 && (
            <ul>
              <li>Media: {stats.median(numbers)} </li>
              <li>Mediana: {stats.mean(numbers)} </li>
              <li>Moda: {stats.mode(numbers)} </li>
              <li>Desviación estandar: {stats.stdev(numbers)} </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
