import React, {useEffect} from 'react'

function IndicadorMercadoLaboral() {
  const sytleGeneralPage={
    minHeight:"60vh"
  }

  useEffect(() => {
    !function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");

    !function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");
  }, [])
  
  
  return (
    <div className="container" style={sytleGeneralPage}>
      <div className="infogram-embed" data-id="f70fdd00-eed4-41b1-b71d-378a719b8c2f" data-type="interactive" data-title="INDICADORES MERCADO LABORAL PAG 1"></div>
      <div className="infogram-embed" data-id="d1977a95-a4c3-408a-a9da-81de3f3bfe5f" data-type="interactive" data-title="INDICADORES DE MERCADO LABORAL PAGE 2"></div>
    </div>
  )
}

export default IndicadorMercadoLaboral