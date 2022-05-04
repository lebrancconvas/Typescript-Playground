const [x, y] = useVector();

function useVector() {
	return [1,() => 2]; 
}

console.log(`x: ${x}\ny: ${y}`);   
