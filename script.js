/* defining variables to grab the html-tile-picture-elements needed */
const getTileOne = document.querySelector(".tileOne");
const getTileTwo = document.querySelector(".tileTwo");
const getTileThree = document.querySelector(".tileThree");

/* defining variables to grab the html-overlay-elements needed */
const getOverlayTileOne = document.querySelector(".tileOne__overlay");
const getOverlayTileTwo = document.querySelector(".tileTwo__overlay");
const getOverlayThree = document.querySelector(".tileThree__overlay");

/* defining functions to define what should happen, if functions are called - showing/hiding overlays */
const showOverlayOne = () => {
  getOverlayTileOne.style.display = "flex";
};

const showOverlayTwo = () => {
  getOverlayTileTwo.style.display = "flex";
};

const showOverlayThree = () => {
  getOverlayThree.style.display = "flex";
};

const hideOverlayOne = () => {
  getOverlayTileOne.style.display = "none";
};

const hideOverlayTwo = () => {
  getOverlayTileTwo.style.display = "none";
};

const hideOverlayThree = () => {
  getOverlayThree.style.display = "none";
};

/* add eventListener for defining what function should be called if the event - mouseover/mouseout - happens */
getTileOne.addEventListener("mouseover", showOverlayOne);
getTileOne.addEventListener("mouseout", hideOverlayOne);

getTileTwo.addEventListener("mouseover", showOverlayTwo);
getTileTwo.addEventListener("mouseout", hideOverlayTwo);

getTileThree.addEventListener("mouseover", showOverlayThree);
getTileThree.addEventListener("mouseout", hideOverlayThree);

// *****ALTERNATIVE SOLUTION USING CLASSES TO ACCESS*********/
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
