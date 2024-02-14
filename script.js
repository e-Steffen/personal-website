const getOverlayTileOne = document.querySelector(".tileOne__overlay");
const getTileOne = document.querySelector(".tileOne");
const showOverlayOne = () => {
  getOverlayTileOne.style.display = "flex";
};
const hideOverlayOne = () => {
  getOverlayTileOne.style.display = "none";
};

getTileOne.addEventListener("mouseover", showOverlayOne);
getTileOne.addEventListener("mouseout", hideOverlayOne);

// *****ALTERNATIVE SOLUTION*********/
// const getOverlayTileOne = document.getElementsByClassName("tileOne__overlay")[0];
// const getTileOne = document.getElementsByClassName("tileOne")[0];
// const showOverlayOne = () => {
//   getOverlayTileOne.style.display = "flex";
// };
// const hideOverlayOne = () => {
//   getOverlayTileOne.style.display = "none";
// };

// getTileOne.addEventListener("mouseover", showOverlayOne);
// getTileOne.addEventListener("mouseout", hideOverlayOne);
