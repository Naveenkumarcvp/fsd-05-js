let sellingInp = document.getElementById("sellingPrice"),
  cogsInp = document.getElementById("cogs"),
  GrassMargOut = document.getElementById("grassMargin"),
  salesInp = document.getElementById("salesPrice"),
  operationalInp = document.getElementById("operational"),
  NetMarginOut = document.getElementById("netMargin"),
  button = document.getElementById("Cal");
(sellingValue = sellingInp.value),
  (cogsValue = cogsInp.value),
  (salesValue = salesInp.value),
  (operationalValue = operationalInp.value);
function task() {
  let grass = sellingValue - cogsValue;
  GrassMargOut.value = grass;
  let netmar = grass - salesValue - operationalValue;
  NetMarginOut.value = netmar;
}

button.addEventListener("click", task);
