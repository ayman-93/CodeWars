const solution = (str, ending) => str.endsWith(ending);

console.log(solution("abccddsfcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
