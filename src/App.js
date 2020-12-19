import React,{useState,useEffect} from 'react'
import Main from './components/Main'
import Description from './components/Description'

function App() {

  const [Page, setPage] = useState(0)

  const onScroll = (e) => {
    const winScroll = e.deltaY

    if (winScroll <= 0) {
      setPage(1)
      console.log(Page)
    }
    else if (winScroll < 500 && winScroll > 0) {
      setPage(2)
      console.log(Page)
    }
    else if (winScroll < 600 && winScroll >= 300) {
      setPage(3)
      console.log(Page)
    }
    else {
      setPage(1)
      console.log(Page)
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("scroll", onScroll)
  });

  return (
    <React.Fragment>
      {Page === 1 && 
        <Main />
      }
      {Page === 2 && 
        <Description />
      }
      {console.log('loaded')}
    </React.Fragment>
  );
}

export default App;
