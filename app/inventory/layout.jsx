export default function DashboardLayout({children}) {
    return (
        <section>
            <Nav></Nav>
            {children}
        </section>
    )
}