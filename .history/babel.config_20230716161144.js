module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/parsent", { "modules": false }]
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
