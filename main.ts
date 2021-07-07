scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile5, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (Hero, monkey) {
    monkey.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile4, function (sprite, location) {
    game.over(true)
})
let enemy: Sprite = null
let player2 = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(player2)
controller.moveSprite(player2)
info.setLife(3)
tiles.setTilemap(tilemap`level1`)
game.onUpdateInterval(200, function () {
    enemy = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Enemy)
    enemy.setFlag(SpriteFlag.AutoDestroy, true)
    enemy.setFlag(SpriteFlag.DestroyOnWall, true)
    enemy.setPosition(160, Math.randomRange(0, 120))
    enemy.setVelocity(-50, 0)
    tiles.placeOnRandomTile(enemy, sprites.castle.tilePath5)
})
