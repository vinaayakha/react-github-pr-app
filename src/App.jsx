
import './App.css'
import Routes from './Routes';

function App() {

  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <>
    <Routes pages={pages} />
    </>
  )
}

export default App
