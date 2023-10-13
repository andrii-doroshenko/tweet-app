export const formatFollowers = number => {
  return new Intl.NumberFormat('en-US').format(number);
};
