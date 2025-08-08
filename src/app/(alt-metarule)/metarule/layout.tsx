import { AltHeader } from "@/components/alt/global";
import "../../../styles/metarule-css.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <AltHeader /> */}
      {children}
    </div>
  );
}
