

export default function Navbar() {
  return (
    <nav className="bg-violet-950 p-6 fixed top-0 w-full z-30 font font-mono font-extrabold text-lg text-shadow-outline">
      <div className="flex container mx-auto flex-row justify-between items-center">
        <div className="flex-none">
          <h1>Adam Sutherby</h1>
        </div>
        <ul className="flex flex-row justify-center items-center flex-grow">
          <li className="px-4">About</li>
          <li className="px-4">Works</li>
          <li className="px-4">Contact</li>
        </ul>
        <div className="flex-none">
          <h1>Dark Mode</h1>
        </div>
      </div>
    </nav>
  );
}
