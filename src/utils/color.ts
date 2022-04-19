export const colorLevel = (level: string) => {
  switch (level) {
    case 'easy':
      return {
        background: 'success',
        color: 'white',
      };
    case 'medium':
      return {
        background: 'warning',
        color: 'white',
      };
    case 'hard':
      return {
        background: 'error',
        color: 'white',
      };
  }
};
