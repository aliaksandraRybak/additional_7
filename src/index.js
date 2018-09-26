module.exports = function solveSudoku(matrix) {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const findNumbers = (row, col) => {
		let	rowOptions = numbers.slice(),
			colOptions = numbers.slice();

		//searching for possible options in a row
		for (let i = 0; i < 9; i++) {
			let elem = rowOptions.indexOf(matrix[row][i]);
			if (elem != -1) rowOptions.splice(elem, 1); 
		}

		//searching for possible options in a column
		for (let i = 0; i < 9; i++) {
			let elem = colOptions.indexOf(matrix[i][col]);
			if (elem != -1) colOptions.splice(elem, 1);
		}

		let res = [];
		for (let i = 0, len = rowOptions.length; i < len; i++) {
			for (let j = 0, len = colOptions.length; j < len; j++) {
				(rowOptions[i] == colOptions[j]) && res.push(rowOptions[i]);
			}
		}

		return res;
	};

	for (let i = 0; i < 9; i++) {
		let rowOfMatrix = matrix[i].slice();
		if (rowOfMatrix.sort().every((value, index) => value == numbers[index])) continue;
		
		for (let j = 0; j < 9; j++) {
			if (matrix[i][j] == 0) matrix[i][j] = findNumbers(i, j);
		}
	}




	return matrix;
}