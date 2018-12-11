export default (text = "Intersllar is great") => {
    const element = document.createElement("div");

    element.innerHTML = text;
    return element;
}