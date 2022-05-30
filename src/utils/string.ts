export const removeSpecificScore = (value: string, removeList: string[]) => {
  if (!value) return;
  const splitedValue = value.split('');
  const valueWithoutScore = splitedValue.filter(
    (val) => !removeList.includes(val)
  );
  return valueWithoutScore.join('');
};
