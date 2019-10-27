window.MathJax = {
  chtml: {
    displayAlign: "center",
    displayIndent: "0em",
    scale: 1
  },
  svg: {
    scale: 1
  },
  tex: {
    tags: "ams",
    multlineWidth: "85%",
    tagSide: "right",
    tagIndent: ".8em",
    autoload: {
      color: [],
      colorV2: ['color']
    },
    packages: {'[+]': ['noerrors']}
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  },
  loader: {
    load: ['[tex]/noerrors']
  }
};
