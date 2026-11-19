# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in Americana, SP looking for a haircut, beard trim or self-care appointment. Per the client briefing: men aged 18–65 and women aged 40–75. They reach the site from Google and Instagram, mostly on their phones. They want to see the services and prices, decide whether this is their kind of place, and book a time.

## Product Purpose

The site for Travessa 32, a barbershop and care space in Americana, SP, founded in 2017 by Nando Garcia. There was no website before this one. Its main job, per the briefing, is **service awareness**: show what Travessa 32 offers, with prices, and turn a visit into a booking through WhatsApp or AVEC. It also has to tell the brand's story, which the client asked for. Success means visitors book an appointment.

## Positioning

The shop sells more than haircuts and beard trims ("Muito além de cabelo e barba"). Its edge is warm, personal service: personality, exclusivity, and attention to each client's experience. It also offers wellness services, massage and Reiki, that competing barbershops don't. The origin story is something no competitor can claim: the shop started in a living room at Rua das Travessas, número 32.

Direct competitors (briefing): Urban Hair Cabeleireiro, Barbearia Phederal, Vitello Barbershop.

## Operating Context

- **Booking:** WhatsApp (pre-filled message, including a per-service message) and online scheduling on AVEC (`https://www.avec.app/travessa32/`). There is no booking system on the site itself.
- **Marketing channels:** Instagram (`@travessa32`) and Google (Google Business profile and reviews).
- **Address:** R. Pres. Vargas, 905 – Vila Pavan, Americana – SP, 13465-222.
- **WhatsApp / phone (confirmed current):** (19) 98965-6363. The (19) 98324-7948 number in the briefing and the planning mockup is outdated and must not be used.
- **Hours (confirmed):** Tuesday to Friday 09h–19h; Saturday 09h–12h. Closed Sunday and Monday.
- All links and contact data live in `js/config.js`, which non-developers can edit.

## Capabilities and Constraints

- A static single-page site: `index.html`, `css/style.css`, a vendored copy of Bootstrap, `js/main.js` and `js/config.js`. There is no build step.
- Content is in Brazilian Portuguese (`pt-BR`).
- **Services and prices (current):** Corte Masculino R$ 90 · 30 min; Barba R$ 75 · 30 min; Corte e Barba R$ 150 · 1h; Corte Feminino R$ 160 · 1h; Hidratação R$ 90 · 30 min; Massagem / Reiki from R$ 80. The client approved showing prices for every service. The R$ 70 values in the planning mockup were placeholders.
- Section map: Início, Sobre (história), Serviços, Galeria, Avaliações, Contato.
- **Years in business are counted from 2017.** The briefing says the 10-year anniversary is May 2027. Any "X anos" claim has to be correct for the current date: the trust bar's "8 anos de história" is outdated as of 2026.
- **Open:** the direct Google Business/reviews URL. It currently points to a Google search.

## Brand Commitments

- **Name:** Travessa 32. The client's own text also writes it as "Travessa32".
- **Tagline:** "Atreva-se. Atravesse." The longer form is "Atreva-se | Atravesse | Travessa32".
- **Keep the existing visual identity and colors**, which the client required in the briefing. Logo: `img/logo-travessa32.png`. The source file is `../Logo Travessa 3 em Azul e Coral.png`, a navy-blue and coral logo.
- **Voice:** care, warmth, personality, exclusivity and attitude. Honest service with no rush and no upselling.
- **The current site is the approved identity (confirmed 2026-11-12).** A full redesign was rejected and reverted. The owner values the motion: buttons with a magnetic follow and a shine sweep, service cards with the "spotlight" hover, floating icons, the hero parallax and scroll reveals. Keep these and the services grid exactly as they are. Make changes only when asked, one at a time.
- **The brand story is client-supplied copy** and must be kept close to verbatim: "Assim começou o que somos hoje: na sala de uma casa, na Rua das Travessas, número 32…"

## Evidence on Hand

- **Google rating 5,0** (stated by the client).
- **Photos** in `img/`: the shopfront with the founder (`foto-fachada.jpg`), the founder serving a client (`foto-atendimento.webp`), three haircut photos (`foto-corte-01..03.jpg`). There are more images in the parent folder (`img_sobre.webp`, `travessa_32_fundo_inicio.png`).
- **Founder:** Nando Garcia, owner and barber.
- **Absent, do not fabricate:**
  - written testimonials: the real Google reviews have not been collected yet, so the site shows a "Depoimentos em breve" placeholder;
  - team photos and before/after photos (the client wants them, but they are not supplied yet);
  - client counts, awards and press.

## Product Principles

1. **Booking is always one tap away.** Every section leads to WhatsApp or AVEC, and the booking paths must never break.
2. **Care before sales.** Show the human, personal side and the wellness services first. Never use pushy or upsell language.
3. **Real people, real place.** Use the actual founder, space and work. Use no stock imagery and no invented social proof.
4. **The story is the moat.** The living room at Rua das Travessas, 32, is the brand's origin and its argument. Give it room.
5. **Both audiences belong.** Men 18–65 and women 40–75 must both feel the space is for them. It is not a male-only barbershop.

## Accessibility & Inclusion

The audience includes older women, up to 75. Text must be readable on phones (comfortable sizes and strong contrast), tap targets must be generous, and contact details (address, hours, phone) must be legible and easy to find.
