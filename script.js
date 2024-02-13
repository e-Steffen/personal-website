const overlayTileOne = document.getElementsByClassName("tileOne__overlay");
const tileOne = document.getElementsByClassName("tPicOne");
const showOverlayOne = () => {
  overlayTileOne.style.display = "block";
};
const hideOverlayOne = () => {
  overlayTileOne.style.display = "none";
};
tileOne.addEventListener("mouseover", showOverlayOne);
tileOne.addEventListener("mouseout", hideOverlayOne);
