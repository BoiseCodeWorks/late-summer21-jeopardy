import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";

class PlayersService {
  setActivePlayer(name) {
    const player = ProxyState.players.find(p => p.name == name)
    ProxyState.activePlayer = player
    console.log("the active player is: ", player)
  }
  async getAllPlayers() {
    const res = await sandbox.get()
    console.log(res.data);
    ProxyState.players = res.data
  }

  async createPlayer(name) {
    const res = await sandbox.post('', { name })
    ProxyState.activePlayer = res.data
    ProxyState.players = [...ProxyState.players, res.data]
  }

  // RESTful convention for put is collection/id
  async givePoints(val) {
    ProxyState.activePlayer.points += val
    await sandbox.put(ProxyState.activePlayer.id, { points: ProxyState.activePlayer.points })
    ProxyState.activePlayer = ProxyState.activePlayer
  }
}

export const playersService = new PlayersService();