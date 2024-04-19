import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-16">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" href="/#about-section">
          About Me
        </Link>
        <Link className="link link-hover" href="/#projects-section">
          Projects
        </Link>
        <Link className="link link-hover" href="/#skills-section">
          Skills
        </Link>

        <Link className="link link-hover" href="/blog">
          Blogs
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/nhan-bach-48b20b11a/"
          >
            <Linkedin />
          </Link>
          <Link target="_blank" href="https://github.com/denz93">
            <Github />
          </Link>
        </div>
      </nav>

      <aside>
        <p>Copyright © 2024 - Nhan Bach</p>
      </aside>
    </footer>
  );
}
