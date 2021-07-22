import { ProxyState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"

function _drawAll() {
  const players = ProxyState.players
  let template = '<option selected disabled>choose a player</option>'
  players.forEach(p => template += `<option>${p.name}</option>`)
  document.getElementById('player-name').innerHTML = template
}

function _updateScore() {
  document.getElementById('score').innerText = ProxyState.activePlayer.points
}

export default class PlayersController {
  constructor() {
    ProxyState.on('players', _drawAll)
    ProxyState.on('activePlayer', _updateScore)

    this.getAllPlayers()
  }
  async getAllPlayers() {
    try {
      await playersService.getAllPlayers()
    } catch (error) {
      console.error(error)
    }
  }

  // NOTE creating player with sweet alert as opposed to form submission
  async addPlayer() {
    try {
      // return the value of the input as the variable name
      const { value: name } = await Swal.fire({
        title: 'New Player',
        input: 'text',
        inputLabel: 'Your Name',
        showCancelButton: true,
        inputPlaceholder: 'Enter your Name'
      })
      if (name) {
        await playersService.createPlayer(name)
      }
    } catch (error) {
      console.error("something broke:", error)
    }
  }

  setActivePlayer(event) {
    // NOTE event.target.value is the value of the selected option
    playersService.setActivePlayer(event.target.value)
  }

  async givePoints(val) {
    try {
      await playersService.givePoints(val)
    } catch (error) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      })

      Toast.fire({
        icon: 'error',
        title: 'something went wrong'
      })
    }
  }
}