import React, {useEffect} from 'react'

function IndicadorMacroeconomico() {
  const sytleGeneralPage={
    minHeight:"60vh"
  }

  useEffect(() => {
    !function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");
  }, [])

  return (
    <div className='container' style={sytleGeneralPage}>
      <div className="infogram-embed" data-id="11058e99-dee3-4312-9a90-adac993c36fc" data-type="interactive" data-title="INDICADORES MACROECONÓMICOS"></div>
    </div>
  )
}

export default IndicadorMacroeconomico