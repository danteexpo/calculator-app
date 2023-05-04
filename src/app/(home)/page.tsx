import HomeClient from './client';
import cotizaciones from '../cotizaciones.json';

const COTIZACIONES = cotizaciones as Record<
  string,
  { compra: number; venta: number }
>;

export default function Home() {
  return <HomeClient cotizaciones={COTIZACIONES} />;
}
