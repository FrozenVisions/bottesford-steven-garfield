# How to add a blog post

1. Make a new file in this folder, `content/blog/`. The file name becomes the web address, so use lower case words joined by hyphens and end with `.md`. For example, `selling-records-in-bingham.md` becomes `/blog/selling-records-in-bingham/`.
2. Start the file with this block (the frontmatter), then write the post in Markdown underneath it:

   ```markdown
   ---
   title: The headline of the post
   date: 2026-11-04
   description: One or two sentences. This shows on the blog list, in Google results and in link previews.
   image: /blog/my-photo.jpg
   ---

   The post starts here. Use `## ` for sub-headings, `- ` for bullet points,
   and [link text](https://example.com) for links.
   ```

   - `title`, `date` (YYYY-MM-DD) and `description` are required. The build stops with an error if one is missing.
   - `image` is optional. Put the picture in `public/blog/` and write its path starting with `/blog/`. It is used at the top of the post and as the social preview image.
3. Commit the file to `main`. The GitHub Pages workflow rebuilds the site, and the post appears on `/blog/`, newest first, and in `sitemap.xml`.

Tips:

- Only write things that are true. No made-up prices, reviews or promises.
- Phone and email links: `[07359 456528](tel:+447359456528)` and `[name@example.com](mailto:name@example.com)`.
- This README is not published as a post.
