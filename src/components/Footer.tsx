const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">OÜ ERK EHITUS</p>
        <p className="text-white/80">
          © {new Date().getFullYear()} OÜ ERK EHITUS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
