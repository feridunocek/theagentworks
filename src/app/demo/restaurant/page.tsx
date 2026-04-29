import { RestaurantClient } from "./restaurant-client";

export const metadata = {
  title: "Akıllı Restoran Sistemi | The Agent Works",
  description: "Müşteri menüsü, mutfak ekranı ve yönetim paneli tek sistemde.",
  robots: { index: false, follow: false },
};

export default function RestaurantDemoPage() {
  return <RestaurantClient />;
}
