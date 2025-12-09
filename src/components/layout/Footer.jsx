const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-2 border border-gray-300">
      <div className="container mx-auto px-4 text-center space-y-1">
        <h2 className="text-lg font-semibold">NOVA GADGET</h2>

        <p className="text-sm">
          © {new Date().getFullYear()} NOVA GADGET. All rights reserved.
        </p>
        <p className="text-xs">
          Made with ❤️ by Surji
        </p>

      </div>
    </footer>
  );
};

export default Footer;
