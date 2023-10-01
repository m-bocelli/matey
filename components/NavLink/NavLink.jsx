import Link from 'next/link';

export default function NavLink({ page }) {
    return <Link href={page}>bruh{page.toUpperCase()}</Link>;
}
