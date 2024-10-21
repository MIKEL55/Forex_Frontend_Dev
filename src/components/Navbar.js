//import { Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a href="/">Forex</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-gray-300 hover:text-white">Dummy1</a></li>
          <li><a href="/" className="text-gray-300 hover:text-white">Dummy2</a></li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;