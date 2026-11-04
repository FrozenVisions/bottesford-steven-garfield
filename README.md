# Steven Garfield

A one-page site in Steven Garfield’s own voice (he writes his name as Steven Gee on the village hall notice boards, so the site mentions both). He buys vinyl record collections within ten miles of Bottesford, NG13, and he comes to see them. Sixties and seventies rock, of any type, is what he mainly wants. He also collects other records for himself.

Call **07359 456528** or email **diotima2003@yahoo.co.uk**.

## Run it locally

```bash
npm install
npm run dev -- -p 47221
```

Open [http://127.0.0.1:47221](http://127.0.0.1:47221).

## Contact details

Phone and email live in `src/lib/site.ts`. Changing them updates the page, the call button, and the local-business listing used by search engines.

Notes left through the form are written to `data/enquiries.json` on the machine running the site. That file is not committed.

## The ten-mile line

Villages are measured in a straight line from the centre of Bottesford, using OpenStreetMap place points. Melton Mowbray, Ancaster, Southwell and Nottingham sit outside the circle, so the form turns those away.

## SEO

- Every village inside the ten-mile line has its own page at `/sell-vinyl-records/<village>`, generated from `src/lib/places.ts`, with its own title, description, canonical URL, keywords and structured data. They are all listed in `/sitemap.xml`.
- Home page and village pages share `LocalBusiness`, `Service`, `FAQPage` and breadcrumb JSON-LD.
- Keywords, the artist, style and label lists live in `src/lib/site.ts`.
- Before launch, set `NEXT_PUBLIC_SITE_URL` to the real address (for example `https://www.example.co.uk`) so the sitemap, canonical links and share image point at it.

## Putting it live on GitHub Pages

The repo includes `.github/workflows/pages.yml`. Once this code is in a GitHub repository:

1. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main` (or run the workflow from the **Actions** tab).
3. The live address appears in the workflow summary, usually `https://<username>.github.io/<repository>/`.

GitHub Pages can only serve static files, so the Pages build leaves out the server-side enquiry route. On the live site the form checks the details and then opens an email to Steven with the note filled in. Phone and email links work as normal.
