import Nav from "../../components/Nav/Nav.jsx"

export default function CreateHouseLayout({ children }) {
    return (            
        <section>
            <Nav></Nav>
            {children}
        </section>
    )
}
