import { DemoClient } from "./demo-client";

export const metadata = {
  title: "Demo Merkezi | The Agent Works",
  description: "Potansiyel müşteriler için hazır AI sistem demoları.",
  robots: { index: false, follow: false },
};

export default function DemoHubPage() {
  return <DemoClient />;
}
