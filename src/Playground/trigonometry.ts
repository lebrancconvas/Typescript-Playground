type Angle = 0 | 30 | 45 | 60 | 90 | 180 | 270 | 360;

interface Triangle {
	opp: number,
	adj: number, 
	hyp: number 
}

const triangle1: Triangle = {
	opp: 3,
	adj: 4,
	hyp: 5
}

function sinTriangle(triangle: Triangle): number {
	return triangle.opp / triangle.hyp;
} 

function cosTriangle(triangle: Triangle): number {
	return triangle.adj / triangle.hyp; 
}

function tanTriangle(triangle: Triangle): number {
	return triangle.opp / triangle.hyp; 
}