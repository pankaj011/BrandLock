const db = require('../../database/mysql/db.config');
Player = db.Player;
Skill = db.Skill;

class PlayerService {}
PlayerService.getPlayer = async () => {
  try {
    const players = await Player.findAll({
      include: [
        {
          model: Skill,
        },
      ]
      // attributes: ['name'],
      // include: [
      //   {
      //     model: Skill,
      //     attributes: ['skill'],
      //   },
      // ],

      // include: {
      //   model: Skill,
      //   as: 'Skills',
      //   attributes: ['skill']
      // },
      // attributes: ['id', 'name', 'position'] // specify the attributes you want to include for Player
    });
    return players;
  } catch (err) {
    console.log("err==", err)
    throw new Error(err)
  }
}

// PlayerService.getPlayer = async () => {
//   try {
//     const players = await Player.findAll({
//       include: {
//         model: Skill,
//         as: 'Skills',
//         attributes: ['skill']
//       },
//       attributes: ['id', 'name', 'position'] // specify the attributes you want to include for Player
//     });
//     return players;
//   } catch (err) {
//     console.log("err==", err)
//     throw new Error(err)
//   }
// }
// PlayerService.getPlayer = async () => {
//   try {
//     const players = await Player.findAll({
//       include: {
//         model: skill,
//         as: 'Skills' // the alias of the association
//       }
//     });
//     return players;
//   } catch (err) {
//     console.log("err==", err)
//     throw new Error(err)
//   }
// }
PlayerService.createPlayer = async (data) => {
  try {
    const player = await Player.create({ name: data.name, position: data.position });
    console.log("id===", player.id);
    for (const skill of data.skills) {
      await Skill.create({ skill: skill, playerId: player.id });
    }
    return player;
  } catch (error) {
    console.log("errr==", error)
    return { error: error.message }
  }
};

module.exports = PlayerService;