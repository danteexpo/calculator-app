'use client';

import { useState } from 'react';
import Form from '../components/Form';

export default function HomeClient({
  cotizaciones,
}: {
  cotizaciones: Record<string, { compra: number; venta: number }>;
}) {
  const [amount, setAmount] = useState(0);

  return (
    <main className="grid grid-cols-1 gap-4 text-sm sm:text-base">
      <Form value={amount} onChange={(_amount: number) => setAmount(_amount)} />
      <section className="bg-[#00474B] text-white rounded-xl p-2 sm:p-4 overflow-y-auto">
        <ul className="flex flex-col gap-4">
          {Object.entries(cotizaciones).map(
            ([name, value]: [string, { compra: number; venta: number }]) => {
              const total = amount ? Number(amount / value.venta) : value.venta;
              return (
                <li key={name} className="flex items-center justify-between">
                  <div className="text-xs sm:text-sm">{name}</div>
                  <div className="flex justify-center items-center gap-4">
                    <span className="font-bold text-[#69B772] text-base sm:text-lg">
                      {total.toLocaleString('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                      })}
                    </span>
                    <span className="hidden sm:flex font-bold text-[#28C0AC] text-lg sm:text-xl">
                      {value.venta.toLocaleString('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                      })}
                    </span>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </main>
  );
}
