const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== "string") {
        return false;
    }

    let activityNumber = sampleActivity.match(/^\d+(\.\d+)?/g);
    if ((!activityNumber) ||
        (Number(activityNumber[0]) > 15) ||
        (Number(activityNumber[0]) <= 0)) {
        return false;
    }



    return Math.ceil(Math.log((MODERN_ACTIVITY / Number(activityNumber[0]))) / (0.693 / HALF_LIFE_PERIOD));
};
