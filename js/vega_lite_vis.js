let vg_1 =
  "https://raw.githubusercontent.com/bevanlewis/FIT3179_homework_w9/main/js/choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
