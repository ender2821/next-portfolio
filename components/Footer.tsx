export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 text-center border-t border-white-border w-full bg-white">
      <p className="text-black-bg mb-0">
        262-271-6729 | design@joshjensencreative.com | Copyright © {year}{" "}
        JoshJensenCreative LLC. All rights reserved.
      </p>
    </footer>
  );
}
