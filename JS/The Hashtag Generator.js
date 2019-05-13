const generateHashtag = str => {
  //   if (str.length > 140) return false;

  str = str.split(" ");

  if (str.every(i => i === "")) return false;

  const hash = str.map(word => {
    if (word === "") return "";
    else {
      const firstLitter = word[0].toUpperCase();
      restLitters = word.slice(1);
      newWord = `${firstLitter}${restLitters}`;
      if (newWord.length >= 140) return false;
      else return newWord;
    }
  });
  if (hash.includes(false)) return false;
  return `#${hash.join("").replace(/\s+/g, "")}`;
};

// console.log(generateHashtag(""), false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string");
// console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(
  generateHashtag("Codewars"),
  "#Codewars",
  "Should handle a single word."
);
console.log(
  generateHashtag("Codewars            Is Nice"),
  "#CodewarsIsNice",
  "Should remove spaces."
);
console.log(
  generateHashtag("Codewars is nice"),
  "#CodewarsIsNice",
  "Should capitalize first letters of words."
);
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars");
console.log(
  generateHashtag(
    "Loooooooooooooooooooooooooodfklsjfdgklsjflkgjsdf;lkgjsfdrtregfdgsfgsdfgfdfgdffgffffffffffffffffdfffoooooooooooooooooooooooooooooooooooong Cat"
  ),
  false,
  "Should return false if the final word is longer than 140 chars."
);
// console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
// console.log(generateHashtag("a".repeat(140)), false, "Too long");
let tt = "abcd";
tt = tt.slice(1);
console.log(tt.length);

console.log(
  "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
    .length
);
