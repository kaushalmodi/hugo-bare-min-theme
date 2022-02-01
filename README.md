The **Bare Min** theme is heavily inspired from [the better
mother-loving website](http://bettermotherfuckingwebsite.com/).

# Requirements

You need to install the latest version of Go from
https://go.dev/doc/install because this theme component requires
[`hugo mod ..` commands](https://gohugo.io/hugo-modules/use-modules/)
to work.

This update on switch to using Hugo Modules was last tested with Hugo
v0.92.0.

# Installing this theme

To use this component,

1.  Add this to your site's TOML config file:

    ```toml
    [module]
      [[module.imports]]
        path = "github.com/kaushalmodi/hugo-bare-min-theme"
    ```

2.  Run `hugo mod tidy` in your main site directory.

## Theme components

This theme is composed of the base theme "hugo-bare-min-theme", and
the "hugo-debugprint" component (which gets auto-fetched using `hugo
mod`).

## Theme Concept

It was designed to:

-   Get rid of all visual clutter (CSS, JS, etc.)
-   Allow easily seeing debug information ([`debugprint.html`
    partial](https://github.com/kaushalmodi/hugo-debugprint/blob/master/layouts/partials/debugprint.html))
    while developing Hugo sites, where focus stays on content
    development.

## Screenshots

[![Bare Min Theme
Screenshot](https://raw.githubusercontent.com/kaushalmodi/hugo-bare-min-theme/master/images/screenshot.png)](https://ox-hugo.scripter.co/test/posts/keyword-collection/)

## Examples

This theme is being used by:

1. The [example site of this theme](https://hugo-bare-min.netlify.com/).
2. The [test site](https://ox-hugo.scripter.co/test/) for
   [`ox-hugo`](https://ox-hugo.scripter.co/).
3. Unofficial [Hugo Sandbox](https://hugo-sandbox.netlify.com/) site
   that is used to create test cases for `hugo` bugs, new feature
   requests, and testing `hugo` features in general.

## Configuration options

These theme provides few customization hooks.

```toml
# In the site's config.toml

[Params]
  description = "Description of the site."

  intro = """
Text here is added to the header of each page.

This can contain <b>HTML</b> and/or **Markdown**
and can be multiple lines.
"""
  footer = """
Text here is added to the footer of each page.

This can contain <b>HTML</b> and/or **Markdown**
and can be multiple lines.
"""

  # Custom favicon HTML
  favicon = """
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="theme-color" content="#ffffff">
"""

  custom_css = ["css/style.css"]  # assuming that you have the "static/css/style.css" file

  [Params.source]
    url = "https://your/site/repo/url"   # Needed if you want to see .GitInfo for a page
    md_dir = "content"                   # Needed if you want to get a link to Markdown source for each page
    org_dir = "content-org"              # Needed if you want to get a link to the Org source (e.g. when using ox-hugo!)
```

**Note**: It is **mandatory** to set `site.Params.source.url` if you
set `site.Params.source.md_dir` or `site.Params.source.org_dir`.

See the `Params` section in the [`config.toml` of this theme's
`exampleSite`](https://github.com/kaushalmodi/hugo-bare-min-theme/blob/master/exampleSite/config.toml)
to get an example.
