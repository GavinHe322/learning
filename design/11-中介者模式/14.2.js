// 14.2 中介者模式的例子--泡泡堂游戏

const log = console.log

// function Player(name) {
//   this.name = name
//   this.enemy = null  // 敌人
// }

// Player.prototype.win = function() {
//     log(this.name, 'win')
// }

// Player.prototype.lose = function() {
//   log(this.name, 'lose')
// }

// Player.prototype.die = function() {
//   this.lose()
//   this.enemy.win()
// }

// var player1 = new Player('皮蛋')
// var player2 = new Player('小怪')

// player1.enemy = player2
// player2.enemy = player1
// player1.die() // 皮蛋lose 小怪win

// 14.2.1 为游戏增加队伍
// player1.partners = [player1, player2, player3, player4]
// player1.enemies = [player5, player6, player7, player8]

// Player5.partners = [player5, player6, player7, player8]
// Player5.enemies = [player1, player2, player3, player4]

// var players = []

// function Player(name, teamColor) {
//   this.partners = []
//   this.enemies = []
//   this.state = 'live'
//   this.name = name
//   this.teamColor = teamColor
// }

// Player.prototype.win = function() {
//   log('winner:', this.name)
// }

// Player.prototype.lose = function() {
//   log('loser:', this.name)
// }

// Player.prototype.die = function() {
//   var all_dead = true
//   this.state = 'dead'
//   for (var i = 0, partner; partner = this.partners[i++];) {
//      // 如果还有一个队友没有死亡，则游戏还未失败
//     if (partner.state !== 'dead') {
//       all_dead = false
//       break
//     }
//   }
//   if (all_dead === true) {
//     this.lose() // 通知自己游戏失败

//     for (var i = 0, partner; partner = this.partners[i++];) {
//       partner.lose()
//     }

//     for (var i = 0, enemy; enemy = this.enemies[i++];) {
//       enemy.win()
//     }
//   }
// }

// var playerFactory = function(name, teamColor) {
//   var newPlayer = new Player(name, teamColor)

//   for (var i = 0, player; player = players[i++];) {
//     if (player.teamColor === newPlayer.teamColor) {
//       player.partners.push(newPlayer)
//       newPlayer.partners.push(player)
//     } else {
//       player.enemies.push(newPlayer)
//       newPlayer.enemies.push(player)
//     }
//   }
//   players.push(newPlayer)
//   return newPlayer
// }

// // 红队
// var player1 = playerFactory('皮蛋', 'red')
// var player2 = playerFactory('小怪', 'red')
// var player3 = playerFactory('八宝', 'red')
// var player4 = playerFactory('小强', 'red')

// // // 蓝队
// var player5 = playerFactory('黑妞', 'blue')
// var player6 = playerFactory('葱头', 'blue')
// var player7 = playerFactory('胖墩', 'blue')
// var player8 = playerFactory('海盗', 'blue')

// player1.die()
// player2.die()
// player3.die()
// player4.die()


// 14.2.2 万家增多带来的困扰

// 14.2.3 用中介者模式改造泡泡堂游戏
/**
 * 实现中介者有两种方式
 * 1.利用发布-订阅。
 * 2.提供一些开放接口来给playerDirector
 */
var playerDirector = (function() {
  var players = {},
      operations = {}

  operations.addPlayer = function(player) {
    var teamColor = player.teamColor
    players[teamColor] = players[teamColor] || []
    players[teamColor].push(player)
  }

  operations.removePlayer = function(player) {
    var teamColor = player.teamColor,
        teamPlayers = players[teamColor] || []
    for (var i = teamPlayers.length - 1; i >=0; i--) {
      if (teamPlayers[i] === player) {
        teamPlayers.splice(i, 1)
      }
    }
  }

  operations.changeTeam = function(player, color) {
    operations.removePlayer(player)
    player.teamColor = color
    operations.addPlayer(player)
  }
  
  operations.playerDead = function(player) {
    var teamColor = player.teamColor,
        teamPlayers = players[teamColor],
        all_dead = true
    for (var i = 0, player; player = teamPlayers[i++];) {
      if (player.state != 'dead') {
        all_dead = false
        break
      }
    }

    if (all_dead === true) {
      for  (var i = 0, player; player = teamPlayers[i++];) {
        player.lose()
      }

      for (var color in players) {
        if (color !== teamColor) {
          var teamPlayers = players[color]
          for (var i = 0, player; player = teamPlayers[i++];) {
            player.win()
          }
        }
      }
    }
  }

  var reciveMessage = function() {
    var message = Array.prototype.shift.call(arguments)
    operations[message].apply(this, arguments)
  }

  return {
    reciveMessage
  }
})()



function Player(name, teamColor) {
  this.name = name
  this.teamColor = teamColor
  this.state = 'alive'
}

Player.prototype.win = function() {
  log(this.name, 'win')
}

Player.prototype.lose = function() {
  log(this.name, 'lose')
}

Player.prototype.die = function() {
  this.state = 'dead'
  playerDirector.reciveMessage('playerDead', this)
}

Player.prototype.remove = function() {
  playerDirector.reciveMessage('removePlayer', this)
}

Player.prototype.changeTeam = function(color) {
  playerDirector.reciveMessage('changeTeam', this, color)
}

var playerFactory = function(name, teamColor) {
  var newPlayer = new Player(name, teamColor)
  playerDirector.reciveMessage('addPlayer', newPlayer)
  return newPlayer
}

// 红队
var player1 = playerFactory('皮蛋', 'red')
var player2 = playerFactory('小怪', 'red')
var player3 = playerFactory('八宝', 'red')
var player4 = playerFactory('小强', 'red')

// // 蓝队
var player5 = playerFactory('黑妞', 'blue')
var player6 = playerFactory('葱头', 'blue')
var player7 = playerFactory('胖墩', 'blue')
var player8 = playerFactory('海盗', 'blue')

player1.die()
player2.die()
player3.die()
player4.die()
