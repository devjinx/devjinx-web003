import Link from "next/link";
import './navbar.css'

const Navbar = () => {
    return(
      <nav>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/archive">
                  <p>Archive</p>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <p>Blog</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </nav>
    );
}
export default Navbar;