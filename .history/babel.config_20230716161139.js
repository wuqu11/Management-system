module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel", { "modules": false }]
  ],
 
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
