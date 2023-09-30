import Nav from "../../components/Nav/Nav.jsx"

export default function ManageHousesLayout({ children }) {
    return (            
        <section>
            <Nav></Nav>
            {children}
        </section>
    )
}
