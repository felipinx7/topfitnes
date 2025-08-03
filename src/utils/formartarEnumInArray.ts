export function formatEnumList(enumList: string[]) {
  return enumList.map((item) => {
    const valueFront = item
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      valueFront,
      valueBack: item,
    };
  });
}