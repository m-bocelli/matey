import Nav from "../../components/Nav/Nav.jsx"

export default function JoinHouseLayout({ children }) {
    return (            
        <section>
            <Nav></Nav>
            {children}
        </section>
    )
}
