# Werkinstructie: van idee tot app

Deze werkinstructie gebruiken Ismail en Claude bij elk nieuw app-idee. Ismail is de opdrachtgever: hij geeft het idee, de wensen en de feedback. Claude doet het bouwen, testen en publiceren en zegt precies wanneer Ismail zelf iets moet doen.

## Hoe we samenwerken: in kleine rondes

We bouwen nooit een hele app in één keer. Elke ronde gaat zo:

1. Ismail vertelt of schrijft wat hij wil.
2. Claude bouwt één stukje.
3. Ismail bekijkt en test het.
4. Ismail zegt wat anders moet of wat erbij moet.
5. Claude past het aan. Daarna volgt de volgende ronde.

De stappen hieronder zijn geen lijst die we in één keer afwerken. Het zijn de onderdelen die een app uiteindelijk nodig heeft. Online zetten gebeurt pas als Ismail tevreden is.

## Waar we wat doen

- **Spraakgesprek:** ideeën bespreken en overleggen.
- **Getypte chat:** bouwen, testen en code op GitHub zetten met Claude Code.
- Nieuwe projecten op GitHub staan altijd op **Private**.

## Rolverdeling

- **Ismail:** idee en probleem uitleggen, keuzes maken, als eindgebruiker testen, betalen voor abonnementen of domeinen.
- **Claude (chat):** idee uitwerken, plan maken, opdrachten geven aan Lovable of Replit, beveiliging en kwaliteit bewaken.
- **Claude Code:** echte code schrijven, opslaan op GitHub, automatische tests en browsertests uitvoeren.

## Gereedschap

- **Lovable / Replit:** de app bouwen en publiceren.
- **GitHub:** alle code veilig opslaan, met versies (account: isidiabdelghani14-byte).
- **Supabase:** database en inloggen.
- **Context7:** actuele documentatie, zodat de code niet verouderd is.
- **Canva:** logo, ontwerp en beelden.
- **Claude Docs:** plannen en documentatie per project.

## Stap 1 – Idee

Ismail vertelt in gewone woorden: welk probleem, voor wie, en wat de app moet kunnen. Claude stelt vragen tot het helder is.

## Stap 2 – Plan

Claude maakt een kort plan in Claude Docs: doel, gebruikers, belangrijkste functies, wat er in versie 1 wel en niet in zit, en welk gereedschap we gebruiken. Ismail keurt het goed voordat er gebouwd wordt.

## Stap 3 – Bouwen

Claude geeft de bouwopdracht aan Lovable of Replit, of bouwt in Claude Code. De code komt altijd op GitHub. Er wordt in kleine stappen gebouwd, zodat elke stap te controleren is.

## Stap 4 – Beveiliging (verplicht)

- Elke database-tabel heeft beveiliging per rij (RLS): gebruikers zien alleen hun eigen gegevens.
- Geen wachtwoorden of geheime sleutels in de code, alleen in de beveiligde instellingen.
- Inloggen met bescherming tegen gelekte wachtwoorden.
- Voor publicatie altijd de diepe beveiligingsscan draaien, niet alleen de snelle scan.
- Publiceren blokkeren als er kritieke problemen zijn.
- Testen of iemand zonder inloggen geen gegevens kan zien.

**Strix (aanvalstest):** zodra er een echte app is, valt Strix die aan zoals een hacker dat zou doen. De scan draait automatisch via GitHub en altijd op een testversie, nooit op de live app. Strix zelf is gratis, maar het heeft een API-sleutel van een AI-dienst nodig, en die kost per scan geld. Na de scan lost Claude de gevonden problemen op en draait de scan opnieuw. Strix geeft geen garantie van honderd procent, dus de regels hierboven blijven gelden.

## Stap 5 – Testen

- **Automatisch (Claude Code):** tests op de belangrijkste functies, en browsertests die door de app klikken.
- **Handmatig (Ismail):** Claude geeft een korte checklist; Ismail probeert de app op laptop en telefoon en meldt wat raar is.
- Pas als alles werkt, gaat de app live.

## Stap 6 – Lanceren

- Eerst op een gratis adres (bijvoorbeeld .lovable.app).
- Daarna eventueel een eigen domeinnaam; de beveiligde verbinding gaat automatisch. Hiervoor is een betaald abonnement nodig.
- Installeerbaar op de telefoon als web-app (icoon op het beginscherm).
- Een echte App Store- of Play Store-app alleen als het echt nodig is; daarvoor zijn betaalde ontwikkelaarsaccounts van Apple en Google nodig.

## Stap 7 – Verbeteren

Ismail vertelt of schrijft in de chat wat beter moet. Claude zoekt zelf het juiste project, geeft de opdracht aan het juiste gereedschap, test opnieuw en publiceert. Elke wijziging staat op GitHub, dus terugdraaien kan altijd.

## Wat Ismail nog moet regelen

- Claude op GitHub toegang geven tot alle repositories (Claude zegt wanneer).
- Kiezen welk betaald abonnement nodig is, zodra een app live gaat.
- Eventueel een domeinnaam kopen.

Wat er nog bijkomt zodra een project het nodig heeft: een database (Supabase), hosting, een domeinnaam en een API-sleutel voor Strix.

---

*Origineel: [Claude Docs](https://claude.ai/artifact/8UWbxH2BZVNJLGwxgSJHAQ). Bij wijzigingen worden beide versies bijgewerkt.*
