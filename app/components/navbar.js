

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-u from-slate-600 from-10% to-transparent p-4 fixed top-0 w-full z-10">
        <div className="flex container mx-uto flex-row justify-between items-center">
        <h1>Adam Sutherby</h1>
        <ul className="flex flex-row justify-between items-center">
        <li className="px-4">About</li>
        <li className="px-4">Works</li>
        <li className="px-4">Contact</li>
        </ul>
        <h1>Dark Mode</h1>
      </div>
    </nav>
  );
}