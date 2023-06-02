import React from 'react'

export default function YourLevelBtn() {
  return (
    <div>
      <div onClick={() => router.push("/Niveles")} className='absolute right-4 top-8 pb-4'>
        <button class="btn-cta"> Continua en tu Nivel</button>
      </div>
    </div>
  )
}
