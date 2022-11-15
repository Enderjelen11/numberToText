function numberToText(number) {
  number = parseInt(number);
  if (number == 0) {
    return "zero";
  } else {
    const jedynki = [
      "jeden",
      "dwa",
      "trzy",
      "cztery",
      "pięc",
      "sześć",
      "siedem",
      "osiem",
      "dziewięć",
    ];
    const dziesiatki = [
      "",
      "dwadzieścia",
      "trzydzieści",
      "czterdzieści",
      "pięćdziesiąt",
      "szęśćdziesiąt",
      "siedemdziesiąt",
      "osiemdziesiąt",
      "dziewięćdziesiąt",
    ];
    const setki = [
      "sto",
      "dwieście",
      "trzysta",
      "czterysta",
      "pięćset",
      "sześćset",
      "siedemset",
      "osiemset",
      "dziewięćset",
    ];
    const slownie = [jedynki, dziesiatki, setki];
    const natki = [
      "dziesięć",
      "jedenaście",
      "dwanaście",
      "trzynaście",
      "czternaście",
      "pietnaście",
      "szesnaście",
      "siedemnaście",
      "osiemnaście",
      "dziewiętnaście",
    ];
    const tysiaceMian = [
      "",
      "tysiąc",
      "milion",
      "miliard",
      "biliard"
    ];
    const tysiaceDop = [
      "",
      "tysięcy",
      "milionów",
      "miliardów",
      "biliardów"
    ];
    const tysiaceBier = [
      "",
      "tysiące",
      "miliony",
      "miliardy",
      "biliardy"
    ];

    const mainArr = String(number).split("").reverse();
    const array1 = mainArr.length>4?mainArr:mainArr.slice(0,4);
    const array2 = mainArr.length>4?mainArr.slice(0,4):[];
    const arr = new Array();
    for (let i = 0; i < array1.length; i += 3) {
      const chunk = array1.slice(i, i + 3);
      arr.push(chunk);
    }
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      let strArr = [];
      for (let j = 0; j < 3; j++) {
        let text;
        if (j == 0 && num[j + 1] == "1") {
          text = natki[parseInt(num[j])];
        } else {
          text = slownie[j][parseInt(num[j]) - 1];
        }
        if (text) {
          strArr.push(text);
        }
      }
      const last = strArr[0];
      strArr = strArr.reverse();
      if (strArr[0] == "jeden" && strArr.length == 1) {
        strArr.push(tysiaceMian[i]);
      } else if (last === "dwa" || last === "trzy" || last === "cztery") {
        strArr.push(tysiaceBier[i]);
      } else if (!(num[0] == "0" && num[1] == "0" && num[2] == "0")) {
        strArr.push(tysiaceDop[i]);
      }
      resultArr.push(strArr);
    }
    resultArr = resultArr.reverse();
    let result = "";
    for (num of resultArr) {
      for (word of num) {
        result = result + word + " ";
      }
    }
    return result;
  }
}

console.log(numberToText(process.env.NUMBER) + "\n");