module.exports = function createDreamTeam(members) {

  if(Array.isArray(members)) {

    let name = [];

    members.map(el => {
      if(typeof (el) === "string") {
        let myel = el.trimLeft();
        name.push(myel[0].toUpperCase());
      }
    })

    return name.sort().join('');
  }

  return false;
};