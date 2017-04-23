

function findQuantityNumbersWithoutFive (start, end) {
    let result = 0;
    for (start; start <= end; start++) {
        if (start % 10!== 5 && start % 10 !== -5) result++;
    }
    return result;
}

findQuantityNumbersWithoutFive(-7, 7);