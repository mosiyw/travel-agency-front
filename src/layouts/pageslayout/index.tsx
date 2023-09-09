import HeaderMenu from "../../components/HeaderMenu";
export default function PagesLayout({ children }: any) {
    return (
        <>
        <HeaderMenu/>
        <main className="main">{children}</main>
        <footer className="footer">
        </footer>
        </>
    );
    }