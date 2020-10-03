module.exports = function createDreamTeam(members) {
    let a = [];
    if (!Array.isArray(members)) {
        return false;
    } else {
        for (let i = 0; i < members.length; i++) {
            if (typeof(members[i]) === 'string') {
                let item = members[i].trim().toUpperCase();
                a.push(item[0]);
            }
        }
    }
    return a.sort().join('');
};
