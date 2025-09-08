import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 text-white flex gap-4 justify-end">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}
