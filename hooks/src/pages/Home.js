import { useContext } from 'react'
import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'



const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef/>
      <HookUseCallback/>
      <HookUseMemo/>
      <HookUseLayoutEffect/>
      <HookUseImperativeHandle/>
      <HookCustom/>
    </div>
  )
}

export default Home