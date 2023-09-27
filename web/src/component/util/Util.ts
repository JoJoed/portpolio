export const getPositionY = (id: string) => {
  const positionY = window.document.getElementById(id) as HTMLElement;
  return window.scrollTo({
    left: 0,
    top: positionY.getBoundingClientRect().top - 20,
    behavior: "smooth",
  });
};

export const getContentPositionY = (id: string) => {
  const y = window.document.getElementById(id) as HTMLElement;
  return y.getBoundingClientRect().top;
};
