enum Side {
	RIGHT = 1,
	LEFT = -1
}

enum Material {
	GLASS = 100,
	MIRROR = 0
}

let randomStatus = Math.floor(Math.random());

interface ITile {
	pairNumber: number;
	tileSide: Side;
	tileMaterial: Material
}

const isValidPair = (tile1: ITile, tile2: ITile) => {
	
}