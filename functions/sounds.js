export const stopPreviousSound = ({ sounds }) => {
    Object.values(sounds).forEach((elem) => {
        elem.pause();
        elem.currentTime = 0;
    });
}
