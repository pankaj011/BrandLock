const dbConfig = require("../config/dbConfig");
const { playerService } = require(`../services/${dbConfig.DB_CHOICE?.toLowerCase()}`);


class PlayerController { }

PlayerController.getPlayers = async (req, res) => {
    try {
        let player = await playerService.getPlayer();
        return res.status(200).send(player) 
    } catch (err) {
        return res.status(500).send(err)
    }
};

PlayerController.createPlayers = async (req, res) => {
    try {
        const { name, position, skills } = req.body;
        let result = await playerService.createPlayer({ name, position, skills });
        return res.status(201).send(result);
    } catch (err) {
        console.log({error: err})
    }
}

// PlayerController.createPlayers = async (req, res) => {
//     const { name, position, skills } = req.body;
//     try {
//       const player = await Player.create({ name, position });
//       for (const skill of skills) {
//         await Skill.create({ name: skill.name, value: skill.value, playerId: player.id });
//       }
//       res.json(player);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
// };
  

module.exports = PlayerController