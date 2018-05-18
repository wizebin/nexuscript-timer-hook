import { wrapHook } from 'nexusdk';

export default wrapHook((properties, messages) => {
  const { trigger } = messages;
  const { interval } = properties;

  let iteration = 0;

  setInterval(() => {
    trigger({ interval, iteration });
    iteration += 1;
  }, interval);
});
