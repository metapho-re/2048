export const handleShift = (elements: HTMLDivElement[]): void => {
  if (elements.length === 0) {
    return;
  }

  if (elements.every((element) => element.innerHTML === "")) {
    return;
  }

  while (elements[0].innerHTML === "") {
    for (let i = 0; i < elements.length - 1; i++) {
      elements[i].innerHTML = elements[i + 1].innerHTML;
    }

    elements[elements.length - 1].innerHTML = "";
  }

  const [_, ...rest] = elements;

  handleShift(rest);
};
