const categoriesList = document.querySelectorAll("#categories .item");

console.log("Number of categories:", categoriesList.length);

categoriesList.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const CategoryCount = item.lastElementChild.children.length;

  console.log("Category:", categoryName);
  console.log("Elements:", CategoryCount);
});
