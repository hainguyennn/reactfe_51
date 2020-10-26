import React from 'react'
import KetQuaTroChoiF from './KetQuaTroChoiF'
import XucXacF from './XucXacF'

export default function GameXucXacReactF(props) {
    return (
        <div>
            <div style={{ backgroundImage: 'url(./img/BaiTapGameXucXac/bgGame.png)', width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, fontFamily: "fontGame" }}>
                <h1 className="display-4 text-center">GAME XÚC XẮC</h1>
                <XucXacF />
                <KetQuaTroChoiF />
            </div>
        </div>
    )
}
