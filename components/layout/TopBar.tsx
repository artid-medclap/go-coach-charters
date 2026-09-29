import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/shared/SocialIcons";
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="hidden border-b border-border bg-surface-muted text-xs text-muted-foreground md:block">
      <Container className="flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-2 hover:text-foreground">
            <Phone className="h-3.5 w-3.5" /> {CONTACT_PHONE}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-foreground">
            <Mail className="h-3.5 w-3.5" /> {CONTACT_EMAIL}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="hover:text-foreground">
            <FacebookIcon className="h-3.5 w-3.5" />
          </a>
          <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="hover:text-foreground">
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
          <a href={SOCIAL_LINKS.twitter} aria-label="X (Twitter)" className="hover:text-foreground">
            <XIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </div>
  );
}
