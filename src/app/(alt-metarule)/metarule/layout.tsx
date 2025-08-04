import "../../../styles/metarule-css.css";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
        { children }
        </div>
    );
}
