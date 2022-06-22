export const setStatus = ({ statusBar }, status) => statusBar.innerHTML = status;

export const setFlags = ({ flagsBar }, flag) => flagsBar.innerHTML = flag;

export const setTimer = ({ timer }, { timerBar }) => timerBar.innerHTML = timer;

const random = (number) => Math.floor(Math.random() * number);
export const giveCheers = ({ cheers }) => cheers[random(cheers.length)];
