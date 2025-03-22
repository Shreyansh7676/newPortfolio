import React from 'react'
import Aurora from './components/aurorabg'
function Auroramainbg() {
    return (
        
            <div className="absolute inset-0">
                <Aurora
                    colorStops={["#0FBED8", "#2AF598", "#08B3E5"]}
                    blend={0.5}
                    amplitude={2.0}
                    speed={0.5}
                />
            </div>
        
    )
}

export default Auroramainbg
