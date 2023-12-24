
module.exports =
{
	shuffle: (array) =>
	{
		if(!Array.isArray(array))
		{
			console.log(`random.shuffle: Se esperaba que array fuese una array, pero es ${typeof array}`);
			return array;
		}
	
		let item;
		let replace;
	
		let r;
		for(let i = array.length - 1; i >= 0; i--)
		{
			r = range(0, array.length - 1);
	
			item = array[i];
			replace = array[r];
	
			array[i] = replace;
			array[r] = item;
		}
	
		return array;
	},
	range
}

function range(min, max)
{
	if(max === undefined)
	{
		console.log('random.range: no se ha especificado el valor máximo');
		return null;
	}
	if(min === undefined) min = 0;

	let n = max ** 2;

	let r = Math.floor(Math.random() * (n - min) + min);

	while(r > max)
	{
		r -= max;
	}

	if(r < min)
	{
		console.log('random.range: resultado es < min');
		r = max - 1;
	}

	if(r > max)
	{
		console.log('random.range: el resultado es > max');
		r = min;
	}

	return r;
}