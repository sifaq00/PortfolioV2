

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/60 backdrop-blur px-6 py-10 mt-24">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-foreground">
              Muhammad Asifaq
            </span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Web Developer & Machine Learning Enthusiast
          </p>
        </div>

        {/* Divider (mobile only) */}
        <div className="w-full h-px bg-border md:hidden" />

        
      </div>
    </footer>
  );
};
