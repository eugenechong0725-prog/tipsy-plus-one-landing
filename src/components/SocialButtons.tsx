import { site } from "@/lib/config";
import { InstagramIcon, FacebookIcon } from "./icons";

type SocialButtonsProps = {
  layout?: "row" | "stack";
  size?: "md" | "sm";
};

export default function SocialButtons({
  layout = "row",
  size = "md",
}: SocialButtonsProps) {
  const sizeClass =
    size === "md"
      ? "px-6 py-3.5 text-sm"
      : "px-4 py-2.5 text-xs";

  const layoutClass =
    layout === "row"
      ? "flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      : "flex flex-col gap-3";

  return (
    <div className={layoutClass}>
      <SocialButton
        href={site.social.instagram}
        label="Follow on Instagram"
        sizeClass={sizeClass}
      >
        <InstagramIcon className="h-4 w-4 shrink-0" />
        Instagram
      </SocialButton>
      <SocialButton
        href={site.social.facebook}
        label="Follow on Facebook"
        sizeClass={sizeClass}
      >
        <FacebookIcon className="h-4 w-4 shrink-0" />
        Facebook
      </SocialButton>
    </div>
  );
}

function SocialButton({
  href,
  label,
  sizeClass,
  children,
}: {
  href: string;
  label: string;
  sizeClass: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`premium-button inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/25 font-semibold tracking-wide text-cream transition-colors hover:border-gold/70 hover:text-gold ${sizeClass}`}
    >
      {children}
    </a>
  );
}
