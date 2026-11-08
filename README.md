# Steven Gee

A one-page site in Steven Gee’s own voice. He buys vinyl record collections within 30 miles of Bottesford, NG13, and he comes to see them. Sixties and seventies rock, of any type, is what he mainly wants. He also collects other records for himself.

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

## The village pages

Villages are measured in a straight line from the centre of Bottesford, using OpenStreetMap place points. Melton Mowbray, Ancaster, Southwell and Nottingham sit outside the circle, so the form turns those away.

## SEO

- Every village on the list has its own page at `/sell-vinyl-records/<village>`, generated from `src/lib/places.ts`, with its own title, description, canonical URL, keywords and structured data. They are all listed in `/sitemap.xml`.
- Home page and village pages share `LocalBusiness`, `Service`, `FAQPage` and breadcrumb JSON-LD.
- Keywords, the artist, style and label lists live in `src/lib/site.ts`.
- Sitemap, canonical links and the share image use `https://pinkmoonrecords.co.uk`, which the Pages workflow sets as `NEXT_PUBLIC_SITE_URL`.

## Putting it live on GitHub Pages

The repo includes `.github/workflows/pages.yml`. Once this code is in a GitHub repository:

1. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main` (or run the workflow from the **Actions** tab).
3. The workflow builds for `https://pinkmoonrecords.co.uk` with an empty base path, so pages and assets are at the apex root. `www.pinkmoonrecords.co.uk` is not a second site: once its DNS points at `frozenvisions.github.io` and the Pages custom domain is the apex, GitHub Pages redirects `www` to `https://pinkmoonrecords.co.uk`.

GitHub Pages can only serve static files, so the Pages build leaves out the server-side enquiry route. On the live site the form checks the details and then opens an email to Steven with the note filled in. Phone and email links work as normal.

## Blog

Posts live in `content/blog/` as Markdown files with a short frontmatter block. They are built into static pages at `/blog/` and `/blog/<slug>/`, listed newest first, and added to `sitemap.xml`. See `content/blog/README.md` for how to add one.

## Photo credits

Photos are from Pexels and used under the Pexels licence (free for commercial use, attribution not required). They were resized and saved as WebP in `public/images/`.

- `record-bins.webp`: Mick Haupt, https://www.pexels.com/photo/a-vinyl-records-in-the-music-store-6131935/
- `record-shop-crates.webp`: Mick Haupt, https://www.pexels.com/photo/a-vinyl-records-in-the-music-store-6131925/
- `holding-record.webp`: cottonbro studio, https://www.pexels.com/photo/a-person-holding-a-vinyl-record-6867598/
- `turntable-needle.webp`: Stefan, https://www.pexels.com/photo/close-up-of-turntable-playing-vinyl-record-30858638/
- `record-shelves.webp`: Iryna Varanovich, https://www.pexels.com/photo/cozy-vinyl-record-store-with-albums-on-display-34786466/

Unsplash (Unsplash Licence):

- `pink-moon.webp`: Maciek Sulkowski, https://unsplash.com/photos/a-very-large-pink-full-moon-rising-over-a-forest-g7iIhEsy5TI
- `druid-stonehenge.webp`: Priyank V, https://unsplash.com/photos/a-large-stone-structure-in-the-middle-of-a-field-yP8HHiF2okM
- `druid-stones-sky.webp`: Iryna Marienko, https://unsplash.com/photos/the-stonehenge-monument-in-the-middle-of-a-field-MWbiKdcycHU

Wikimedia Commons and Geograph, resized to WebP:

- `castlerigg-circle.webp`: Dominic Nelson, Castlerigg Stone Circle with Latrigg behind, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Castlerigg_Stone_Circle_with_Latrigg_behind.jpg
- `stanton-drew-moon.webp`: Neil Owen, The north east circle at night, Stanton Drew, CC BY-SA 2.0, https://www.geograph.org.uk/photo/8229296
- `oak-in-the-mist.webp`: Sally, Oak in the mist, CC BY-SA 2.0, https://www.geograph.org.uk/photo/2271111
