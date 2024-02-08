import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-xl font-semibold">Home</a>
        </Link>
        <div className="hidden md:flex">
          <Link href="/carform" legacyBehavior>
            <a className="text-white hover:underline mr-4">Cadastrar</a>
          </Link>
          <Link href="/finance" legacyBehavior>
            <a className="text-white hover:underline">Financie</a>
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
