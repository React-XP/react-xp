export const useModal = (name: string) => {
  const open = () => {
    console.log(`open ${name}`);
  };

  const close = () => {
    console.log(`close ${name}`);
  };

  return {
    open,
    close,
  };
};
