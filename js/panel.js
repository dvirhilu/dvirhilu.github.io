//toggles the size of an html element based on the given parameters
function togglePanel(panelId, panelSizeDesktop, panelSizeTablet, panelSizeMobile) {
    var screenSize = panelSizeDesktop;
    var panel = document.getElementById(`${panelId}`);


    //resizes panel responsively
    if (window.innerWidth <= 426) {
        screenSize = panelSizeMobile;
    }
    else if (window.innerWidth <= 768) {
        screenSize = panelSizeTablet;
    }
    if (panel.style.width == "0px")
        openPanel(screenSize, panel);
    else
        closePanel(panel);
    return false;
}

//used to open a side panel
function openPanel(screenSize, panel) {
    panel.style.width = `${screenSize}px`;
}
//used to close a side panel
function closePanel(panel) {
    panel.style.width = "0px";
}