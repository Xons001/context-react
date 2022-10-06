import { createContext, useContext, useState } from 'react'

const Context = createContext({valor: false, toggle: () => {}})

const Provider = ({ children }) => {

  const [valor, setValor] = useState(false)

  const value = {
    valor,
    toggle: () => setValor(!valor)
  }

  return (
    <Context.Provider value={'mi valor'}>
      { children }
    </Context.Provider>
  )
}

const Componente = () => {
  const { valor, toggle } = useContext(Context)

  return (
    <div>
      <label>{valor.toString()}</label>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

const UpdateState = () => {

  return (
    <Provider>
      <Componente />
    </Provider>
  );
}

export default UpdateState;
