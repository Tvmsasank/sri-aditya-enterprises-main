export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-lg font-semibold mb-2">
          Sri Aditya Enterprises
        </p>
        <p className="text-primary-foreground/70 text-sm">
          © {new Date().getFullYear()} Sri Aditya Enterprises. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
