import React, {useRef, useEffect} from 'react'

const {tableau} = window;

const Tableau = () => {
  const ref = useRef(null)
  const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
  const options = {
    hideTabs: true,
    width: "800px",
    height: "700px",
  };

  const initViz = () => {
    return new tableau.Viz(ref.current, url, options)
  }

  useEffect(() => {
    initViz()
  })
  

  return <div ref={ref} />
}

export default Tableau 