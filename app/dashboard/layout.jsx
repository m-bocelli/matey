import Nav from "../../components/Nav/Nav.jsx"

export default function DashboardLayout({children}) {
    return (
        <section>
            <Nav></Nav>
            {children}
        </section>
    )
}
