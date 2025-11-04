import React from 'react'

export default function PagosView() {
  return (
    <div className="bg-[#186f5f]">
      <div id="hero" className="w-full py-24">
        <h1 className="text-6xl md:text-8xl shadow-black drop-shadow-lg my-4 text-center text-[#F9F1D2] font-black">
          Gestión <br /> Pagos
        </h1>
        <p className="text-base mx-auto max-w-[350px] md:text-xl drop-shadow-lg text-center text-[#F9F1D2]">
          Elige un plan o paga la mensualidad correspondiente al mes actual
        </p>
      </div>
      <p>Descripción clara de seguridad</p>
      <p>Planes disponibles (Stripe)</p>
      <p>Pago mensualidad, seleccionar país y frecuencia</p>
    </div>
  )
}
