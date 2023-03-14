import React from 'react'
import { Html, useProgress } from '@React-three/drei';
import { three } from 'maath';



const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
    <p
      style={{
        fontSize: 20,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40,
      }}
    >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader;