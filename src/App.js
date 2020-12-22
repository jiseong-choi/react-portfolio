import React,{useState,useEffect} from 'react'
import Main from './components/Main'
import Skill from './components/Skill'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

function App() {

  const [Page, setPage] = useState(1)

  const onScroll = (e) => {
    const winScroll = e.deltaY


    if (winScroll <= 0) {
      setPage(1)
      //console.log(Page)
    }
    else if (winScroll < 500 && winScroll > 0) {
      setPage(2)
     // console.log(Page)
    }
    else if (winScroll < 600 && winScroll >= 300) {
      setPage(3)
      console.log(Page)
    }
    else {
      setPage(1)
      //console.log(Page)
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll)
  });
  //console.log('loaded')


  return (
    <React.Fragment>
      <div>
      <Header />
      {Page === 1 && 
        <Main style={{ width:'100%', height:'100%'  }} />
      }
      {Page === 2 && 
        <Skill style={{ width:'100%', height:'100%' }} />
      }
        <Footer />
        </div>
    </React.Fragment>
  );
}

export default App;
