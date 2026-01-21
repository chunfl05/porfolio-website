import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:liuchunfei682@163.com",
    icon: Mail,
    label: "Email",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
