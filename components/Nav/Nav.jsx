import NavLink from '../NavLink/NavLink.jsx';

export default function Nav() {
    const pages = ['/', 'storePage', 'createHouse'];
    const links = pages.map((page) => {
        <NavLink page={page} />;
    });
    return <nav>{links}</nav>;
}
