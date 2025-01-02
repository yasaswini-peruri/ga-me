"use strict";
// console.log(len);

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 1024 && window.innerHeight <= 768) {
    document.querySelector("#continueButton").style.display = "none";
    document.getElementById("desktopAlert").style.display = "block";
    Array.from(document.body.children).forEach(function (child) {
      if (child.id !== "desktopAlert") {
        child.classList.add("blur");
      }
    });
  } else {
    document.getElementById("desktopAlert").style.display = "block";
    document.querySelector("#alertMessage").textContent =
      "This website was not optimized (not beautiful to see), Sorry for this.";
    document.querySelector("#continueButton").classList.remove("hidden");
    document
      .querySelector("#continueButton")
      .addEventListener("click", function () {
        document.getElementById("desktopAlert").style.display = "none";
        $("body > *").not("#desktopAlert").removeClass("blur");
      });
  }
});

buttonDis.removeAttribute("disabled");
btnPlay.removeAttribute("disabled");

// document.querySelector(".btn--num").classList.add("hidden");
let i = 0;
let x;
let nlist = [];
let j, temp;
let t1;
let flag = 0;
let fin;
let k;
let f1 = 0;
let completed_num = [];
let len = 100;
let ran_num = function () {
  let y = Math.trunc(Math.random() * 100) + 1;
  // console.log(y);
  return y;
};

let flag_winner = 0;
let win_2 = 0;
let hover_win_2 = 0;
let win_1 = 0;
let hover_win_1 = 0;
// console.log(nlist.length);

let final_ans = function (temp, temp_list) {
  f1 = 0;
  for (k = 0; k < temp_list.length; k++) {
    if (temp === temp_list[k]) {
      temp = ran_num();
      final_ans(temp, temp_list);
      f1 = 1;
    }
  }

  if (f1 == 0) temp_list.push(temp);

  return temp_list;
};

for (i = 0; i < len; i++) {
  t1 = ran_num();
  temp = t1;

  if (i == 0) {
    nlist.push(t1);
  }

  if (i > 0) {
    nlist = final_ans(temp, nlist);
  }

  // nlist.push(temp);
}

// console.log(nlist);
// console.log([...new Set(nlist)]);

// while (!nlist.includes(0)) {
//   location.reload();
//   if (nlist.includes(0)) {
//     console.log("Entered Loop");
//   }
// }

// console.log(nlist.includes(0));
let checkequal = function (infrom, inout, in_arr_temp) {
  let lacount = 0;
  let larr = [];
  inout = inout + 1;
  for (i = infrom; i < inout; i++) {
    larr = [...in_arr_temp[i]];
    for (j = 0; j < larr.length; j++) {
      if (typeof larr[j] == "string") {
        lacount++;
      }
    }
  }
  return lacount;
};

// console.log(nlist);
// let ytttt = [1, 2, 2, 3];
// console.log([...new Set(ytttt)]);
let ab = -1;
let addi = function (use) {
  let lenUse = document.querySelectorAll(use).length;
  for (i = 0; i < lenUse; i++) {
    ab = ab + 1;
    x = document.querySelectorAll(use)[i].classList;
    if (x.value == "") {
      document.querySelectorAll(use)[i].classList.add(`arr${ab}`);
    }
  }
  return ab;
};

let k1 = addi("th");
let addc = function (use) {
  let lenUse = document.querySelectorAll(use).length;
  for (i = 0; i < lenUse; i++) {
    k1 = k1 + 1;
    x = document.querySelectorAll(use)[i].classList;
    if (x.value == "") {
      document.querySelectorAll(use)[i].classList.add(`arr${k1}`);
    }
  }
};

addc("td");

// console.log(nlist);

let removeSpace = function (spaceArr) {
  spaceArr = spaceArr.join();
  // spaceArr = spaceArr.replaceAll(" ", "");
  // spaceArr = spaceArr.join(",");
  return spaceArr;
  // console.log();
};
let checkWin_arr_1 = [];
let checkWin_arr_2 = [];
let checkForWinner = function () {
  let temp_checkWin_arr_1 = [];
  let temp_checkWin_arr_2 = [];
  hover_win_1 = 0;
  win_1 = 0;
  hover_win_2 = 0;
  win_2 = 0;

  checkWin_arr_1 = [...winnerArray_left];
  checkWin_arr_2 = [...winnerArray_right];

  for (j = 0; j < 10; j++) {
    if (typeof winnerArray_left[j] == "number") {
      temp_checkWin_arr_1.push(winnerArray_left[j]);
      // console.log(winnerArray_left[j]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_1++;
        checkWin_arr_1.splice(j, 1);
      }
      win_1++;
    }
  }

  console.log("1st win_1 : ", win_1);
  for (j = 20; j < 30; j++) {
    if (typeof winnerArray_left[j - 10] == "number") {
      temp_checkWin_arr_1.push(winnerArray_left[j - 10]);
      // console.log(winnerArray_left[j - 10]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_1++;
        checkWin_arr_1.splice(j - 10, 1);
      }
      win_1++;
    }
  }

  console.log("2nd win_1 : ", win_1);

  for (j = 30; j < 40; j++) {
    if (typeof winnerArray_left[j - 10] == "number") {
      temp_checkWin_arr_1.push(winnerArray_left[j - 10]);
      // console.log(winnerArray_left[j - 10]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_1++;
        checkWin_arr_1.splice(j - 10, 1);
      }
      win_1++;
    }
  }

  // console.log("3rd win_1 : ", win_1);

  // winnerArray_left;
  // winnerArray_right;
  // win_1 = checkequal(0, 29, [...winnerArray_left]);

  for (j = 10; j < 20; j++) {
    if (typeof winnerArray_right[j - 10] == "number") {
      temp_checkWin_arr_2.push(winnerArray_right[j - 10]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_2++;
        checkWin_arr_2.splice(j - 10, 1);
      }
      win_2++;
    }
  }

  console.log("1st win_2 : ", win_2);

  // console.log("1st win");
  for (j = 40; j < 50; j++) {
    if (typeof winnerArray_right[j - 30] == "number") {
      temp_checkWin_arr_2.push(winnerArray_right[j - 30]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_2++;
        checkWin_arr_2.splice(j - 30, 1);
      }
      win_2++;
    }
  }

  console.log("2nd win_2 : ", win_2);

  for (j = 50; j < 60; j++) {
    if (typeof winnerArray_right[j - 30] == "number") {
      temp_checkWin_arr_2.push(winnerArray_right[j - 30]);
      // console.log(winnerArray_right[j - 30]);
      if (document.querySelector(`.arr${j}`).classList.contains("seletedBox")) {
        hover_win_2++;
        checkWin_arr_2.splice(j - 30, 1);
      }
      win_2++;
    }
  }

  console.log(checkWin_arr_1);
  console.log(checkWin_arr_2);
  // console.log("3rd win_2 : ", win_2);

  console.log("Before , Winner 1 : ", hover_win_1, win_1);
  console.log("Before Winner 2 : ", hover_win_2, win_2);
  // win_2 = checkequal(0, 29, [...winnerArray_right]);

  console.log("1 Winner :");
  console.log(hover_win_1);
  console.log(win_1);

  console.log("2 Winner :");
  console.log(hover_win_2);
  console.log(win_2);

  let foundNum = 0;
  console.log(checkWin_arr_1);
  console.log(checkWin_arr_2);

  // removeSpace(checkWin_arr_1);
  // removeSpace(checkWin_arr_2);

  // let temp_checkWin_arr_1 = removeSpace([...checkWin_arr_1]);
  console.log(temp_checkWin_arr_1);
  // let temp_checkWin_arr_2 = removeSpace([...checkWin_arr_2]);
  console.log(temp_checkWin_arr_2);

  // console.log(temp_checkWin_arr_1);
  // console.log(temp_checkWin_arr_2);
  // for (i = 0; i < checkWin_arr_1.length; i++) {
  //   for (j = 0; j < checkWin_arr_2.length; j++) {
  //     if (typeof checkWin_arr_2[j] != "string") {
  //       if (checkWin_arr_1.includes(checkWin_arr_2[j])) {
  //         console.log(foundNum);
  //         foundNum++;
  //       }
  //     }
  //   }
  // }

  // console.log(foundNum);
  // console.log(JSON.stringify(temp_checkWin_arr_1) == JSON.stringify(temp_checkWin_arr_2));

  // if (temp_checkWin_arr_1 == temp_checkWin_arr_2) {
  //   console.log("Entered");
  //   document.querySelector(".t-p-u").classList.remove("hidden");
  //   btnPlay.setAttribute("disabled", "disabled");
  //   buttonDis.setAttribute("disabled", "disabled");
  // } else {
  if (hover_win_1 != 0 && hover_win_2 != 0) {
    if (hover_win_1 == win_1) {
      console.log("After Winner 1 : ", hover_win_1, win_1);
      // flag_winner = 1;
      document.querySelector(".winner_1").classList.remove("hidden");
      document.querySelector(".randomnum").classList.add("hidden");
      btnPlay.setAttribute("disabled", "disabled");
      buttonDis.setAttribute("disabled", "disabled");
      // console.log("Winner Got");
    }

    if (hover_win_2 == win_2) {
      // flag_winner = 2;
      console.log("After Winner 2 : ", hover_win_2, win_2);
      document.querySelector(".winner_2").classList.remove("hidden");
      document.querySelector(".randomnum").classList.add("hidden");
      btnPlay.setAttribute("disabled", "disabled");
      buttonDis.setAttribute("disabled", "disabled");
      // console.log("Winner Got");
    }
  }
  // }
};

// console.log("arr");
// console.log(nlist);
let p = 0;
let show_ans = function () {
  document.querySelector(".inum").value = "";
  document.querySelector(".yn-js").classList.add("hidden");
  document.querySelector(".yno-js").classList.add("hidden");
  if (p < 100 && p != 0) {
    document.querySelector(".btn--num").classList.remove("hidden");
    document.querySelector(".randomnum").textContent = nlist[p];
    completed_num.push(nlist[p]);
    // console.log(completed_num);
    p++;
  } else if (p == 0) {
    // console.log("Click On Start");
    document.querySelector(".s-p-u").classList.remove("hidden");
  } else if (p == 100) {
    if (
      document.querySelector(".winner_1").classList.contains("hidden") ||
      document.querySelector(".winner_2").classList.contains("hidden")
    ) {
      document.querySelector(".l-p-u").classList.remove("hidden");
      // document.querySelector(".b-c-js").disabled();
    }
    document.querySelector(".randomnum").classList.add("hidden");
    // console.log("Over Chances");
  }
};

document.querySelector(".s-c-m").addEventListener("click", function () {
  document.querySelector(".s-p-u").classList.add("hidden");
});

// document.getElementById("#buttonDis").disabled() = true;

let startButton = function () {
  document.querySelector(".inum").value = "";
  document.querySelector(".yn-js").classList.add("hidden");
  document.querySelector(".yno-js").classList.add("hidden");
  document.querySelector(".s-p-u").classList.add("hidden");
  // console.log(p);
  if (p == 0) {
    document.querySelector(".btn--num").classList.remove("hidden");
    document.querySelector(".randomnum").textContent = nlist[0];
    completed_num.push(nlist[0]);
    // console.log(completed_num);
    p++;
  }
};

document.querySelector(".showans").addEventListener("click", show_ans);
document.querySelector(".sgame").addEventListener("click", startButton);

let df = 0;
let repln = -20;
let tempnow = 0;
let rn = function () {
  repln = -20;
  df = 0;
  let rlist = [];
  let rvar = 0;
  for (i = 1; i <= 10; i++) {
    let u = 0;
    rvar = i * 10 - df;
    // console.log(df);
    for (j = 1; j <= 3; j++) {
      let b = Math.trunc(Math.random() * rvar) + df + 1;
      rlist.push(b);
    }
    df = i * 10;
  }
  return rlist;
};

let xyz = [...rn(), ...rn()];
// console.log(xyz);

let ufo = -20;
let tr = 0;

// console.log(xyz);

let pyt = 0;
let tea = xyz.length;
let c = 0;
let d = 0;
let final_arr = [];

for (i = 0; i < 20; i++) {
  c = c + 3;
  if (c + 1 != tea) {
    pyt = xyz.slice(c - 3, c);
    final_arr.push(pyt);
  }
}

let tarr = [];
let tempele;
let indstore;
let final_array = [];
let final_array_1 = [];
for (i = 0; i < 20; i++) {
  tarr = [...final_arr[i]];
  // console.log("The tarr : ",tarr);
  // console.log(tarr);
  for (j = 0; j < tarr.length; j++) {
    tempele = tarr[j];
    // console.log("the tempele : ",tarr[j]);
    for (k = 0; k < tarr.length; k++) {
      if (j === k) {
        continue;
      } else {
        if (tempele === tarr[k]) {
          tarr.splice(tarr.indexOf(tempele), 1, "");
        }
      }
    }
  }
  final_array_1.push(tarr);
}

// console.log(final_array_1);

// console.log();
let last_arr_1 = [];
let flagt = 0;
let mop;
let numtemp_1;
let numtemp_2;
let ranRemove;
let mn;
let countString = 0;
let replTemp = new Map();
for (i = 0; i < 20; i++) {
  flagt = 0;
  tarr = [...final_array_1[i]];
  for (j = 0; j < tarr.length; j++) {
    // mop = typeof tarr[j];
    ranRemove = Math.trunc(Math.random() * 2); // 0,1
    // console.log(ranRemove);
    for (k = 1; k <= ranRemove; k++) {
      numtemp_1 = Math.trunc(Math.random() * 3); // 0,1,2

      replTemp.set(i, [j, k, numtemp_1]);
      if (typeof tarr[k] == "number") {
        tarr.splice(numtemp_1, 1, "");
      }
    }
  }
  last_arr_1.push(tarr);
  // console.log(tarr)
}

// console.log(replTemp);

/*
if 3 vertical rows are empyty then replace empyty by numbers
let replacerNow = function () {
  let strow;
  let stele;
  let stcount = 0;
  let stran;
  let temp_last_arr = [];
  let stmul;
  let stvali;
  let stnum;

  for (i = 0; i < 20; i++) {
    stcount = 0;
    strow = [...last_arr_1[i]];
    for (j = 0; j < strow.length; j++) {
      stele = typeof strow[j];
      if (stele == "string") {
        stcount++;
      }

      if (stcount == 3) {
        stvali = Math.trunc(Math.random() * 3) + 1;
        for (k = 0; k < stvali; k++) {
          // console.log(i);
          if (i >= 10) {
            stmul = i - 10;
          } else {
            stmul = i;
          }
          stran = Math.trunc(Math.random() * 3);
          // console.log(stmul, stran);
          stnum =
            Math.trunc(Math.random() * ((stmul + 1) * 10 - stmul * 10)) +
            stmul * 10;
          // console.log(stnum);
          strow.splice(stran, 1, stnum);
        }
      }
    }
    // console.log(strow);
    temp_last_arr.push(strow);
    // console.log("Hi");
  }
  return temp_last_arr;
};
*/

let last_arr_2 = [...last_arr_1];

//splice or slice is there but written for fun

let divideParts = function (split_in, split_out, total_arr) {
  let part_arr = [];
  // console.log("Entered Loop");
  for (i = split_in; i < split_out + 1; i++) {
    part_arr.push([...total_arr[i]]);
    // console.log(part_arr);
  }
  return part_arr;
};

let part_arr_1 = divideParts(0, 9, last_arr_2);
// console.log(part_arr_1);
let part_arr_2 = divideParts(10, 19, last_arr_2);
// console.log(part_arr_2);

// console.log("Before :");
let lacount_1 = checkequal(0, 9, [...last_arr_2]);
// console.log(lacount_1);

let lacount_2 = checkequal(10, 19, [...last_arr_2]);
// console.log(lacount_2);

let last_arr_3_1;
let last_arr_3_2;
let te_arr_1;
let temp_mulRep = new Set();
// console.log(last_arr_2);
// adding numbers to table
let replaceNum = function (ent_flag, no_of_rep, ent_arr, ent_total_arr) {
  let repeateTimes = no_of_rep;
  let arr_change_store;
  let mulRep;
  let fb;
  let re_flag = 0;

  let randomeIndex = Math.trunc(Math.random() * ent_arr.length);
  for (j = 0; j < no_of_rep; j++) {
    re_flag = 0;
    i = 0;
    randomeIndex = Math.trunc(Math.random() * ent_arr.length);
    while (typeof ent_arr[randomeIndex][i] != "string") {
      i++;
      if (i > 2) {
        i = 0;
        randomeIndex = Math.trunc(Math.random() * ent_arr.length);
      }
    }

    let temp_i = i;

    mulRep =
      Math.trunc(
        Math.random() * ((randomeIndex + 1) * 10 - randomeIndex * 10)
      ) +
      randomeIndex * 10;

    // console.log("The ran numbers : ", mulRep);

    for (fb = 0; fb < 3; fb++) {
      if (ent_arr[randomeIndex][fb] == mulRep) {
        // console.log("Succesfully Entered Before :");
        // console.log(randomeIndex, fb, ent_arr[randomeIndex][fb]);
        re_flag = 1;
        // console.log("End");
      }
    }

    arr_change_store = ent_arr[randomeIndex];

    if (re_flag == 1) {
      while (arr_change_store.includes(mulRep)) {
        mulRep =
          Math.trunc(
            Math.random() * ((randomeIndex + 1) * 10 - randomeIndex * 10)
          ) +
          randomeIndex * 10;
      }
    }

    if (ent_flag == 1) {
      ent_total_arr[randomeIndex][i] = mulRep;
      ent_arr[randomeIndex][i] = mulRep;
    } else {
      ent_total_arr[randomeIndex + 10][i] = mulRep;

      ent_arr[randomeIndex][i] = mulRep;
    }
  }
  return [...ent_total_arr];
};

let last_arr_3;
if (lacount_1 != lacount_2) {
  if (lacount_1 > lacount_2) {
    last_arr_3_1 = replaceNum(
      1,
      lacount_1 - lacount_2,
      [...part_arr_1],
      last_arr_2
    );
    last_arr_3 = [...last_arr_3_1];
  } else {
    last_arr_3_2 = replaceNum(
      2,
      lacount_2 - lacount_1,
      [...part_arr_2],
      last_arr_2
    );
    let ent_arr_flag = 2;
    last_arr_3 = [...last_arr_3_2];
  }
} else {
  last_arr_3 = last_arr_2;
}

// console.log(last_arr_3);
// console.log("Final Array :");
// console.log(last_arr_3);
// console.log("Final Parts Of Array :");
let final_part_arr_1 = divideParts(0, 9, last_arr_3);
// console.log(final_part_arr_1);
// console.log([...new Set(final_part_arr_1)].length);
let final_part_arr_2 = divideParts(10, 19, last_arr_3);
// console.log(final_part_arr_2);

lacount_1 = checkequal(0, 9, [...last_arr_3]);
// console.log(lacount_1);
lacount_2 = checkequal(10, 19, [...last_arr_3]);
// console.log(lacount_2);
// console.log(last_arr_3);
// console.log(last_arr_3);
// need now
let p1 = [];
let p2 = [];
let p3 = [];
for (i = 0; i < 20; i++) {
  p1.push(last_arr_3[i][0]);
  p2.push(last_arr_3[i][1]);
  p3.push(last_arr_3[i][2]);
}

// console.log(p1);
// console.log(p2);
// console.log(p3);
let p1_part_1 = p1.slice(0, 10);
// console.log(p1_part_1);

let p1_part_2 = p1.slice(10, 20);
// console.log(p1_part_2);
// console.log();
// console.log(winnerArray);
// console.log();
let p4 = p2.slice(0, 10);
// console.log(p4);
let p5 = p2.slice(10, 20);
// console.log(p5);
let p6 = p3.slice(0, 10);
// console.log(p6);
let p7 = p3.slice(10, 20);
// console.log(p7);

let winnerArray_left = [...p1_part_1, ...p4, ...p6];
// console.log("Winner Array Left:");
// console.log(winnerArray_left);

let winnerArray_right = [...p1_part_2, ...p5, ...p7];
// console.log("Winner Array Right:");
// console.log(winnerArray_right);

if ([...winnerArray_left] == [...winnerArray_right]) {
  location.reload();
}

let s1 = [...p1];
// console.log(s1);

// let s1_part = divideParts(0, 9, [...s1]);
let s2 = [...p4, ...p6];
// console.log(s2);
let s3 = [...p5, ...p7];
// console.log(s3);

let main_arr = [...s1, ...s2, ...s3];
// console.log(main_arr);
// console.log(main_arr);
// console.log("The first element is : ", main_arr[0]);
// let temp_main_ele = main_arr[0];
// console.log(last_arr_3[0][0].includes(temp_main_ele));

if (main_arr.includes(0)) {
  location.reload();
  // console.log("Entered With 0");
}

// while (!main_arr.includes(0)) {
//   location.reload();
// }
// console.log(main_arr);
for (i = 0; i < 60; i++) {
  document.querySelector(`.arr${i}`).textContent = main_arr[i];
}

// console.log(document.querySelectorAll("td")[10].classList[0]);
// console.log(document.querySelectorAll("td")[10].textContent);

// Front-End Connections :

let checkHover;
let checkStart;
let checkNum;
let storeClass;

let mouseHover = function (e) {
  storeClass = e.srcElement.classList[0];
  // console.log(storeClass);
  checkHover = e.srcElement.textContent;
  checkStart = document
    .querySelector(".randomnum")
    .classList.contains("hidden");
  if (!checkStart) {
    checkNum = document.querySelector(".randomnum").textContent;
    if (checkHover == checkNum) {
      // console.log("Slected Green");
      document.querySelector(`.${storeClass}`).classList.add("seletedBox");
      checkForWinner();
    }
  }
};

// console.log(main_arr);
for (i = 0; i < 60; i++) {
  if (typeof main_arr[i] == "number") {
    document
      .querySelector(`.arr${i}`)
      .addEventListener("mouseover", mouseHover);
  }
}

let pageReload = function () {
  document.querySelector(".inum").value = "";
  document.querySelector(".yn-js").classList.add("hidden");
  document.querySelector(".yno-js").classList.add("hidden");
  if (document.querySelector(".randomnum").classList.contains("hidden")) {
    location.reload();
  } else {
    console.log("In game");
    document.querySelector(".p-u").classList.remove("hidden");
  }
};

let buttonOk = function () {
  if (!document.querySelector(".p-u").classList.contains("hidden"))
    // document.querySelector(".randomnum").classList.add("hidden");
    location.reload();
};

let crossMark = function () {
  document.querySelector(".p-u").classList.add("hidden");
};

document.querySelector(".n-g").addEventListener("click", pageReload);
document.querySelector(".button_ok_js").addEventListener("click", buttonOk);

// cross
document.querySelector(".cross_mark").addEventListener("click", crossMark);

let inputText;
let in_flag = 0;

let removeAfter = function (removeId) {
  document.querySelector(`.${removeId}`).classList.add("hidden");
  // console.log();
  document.querySelector(".inum").value = "";
};

let buttonCheck = function () {
  in_flag = 0;
  inputText = document.querySelector(".inum").value;
  // console.log(inputText);
  if (document.querySelector(".randomnum").classList.contains("hidden")) {
    document.querySelector(".yno-js").classList.remove("hidden");
    // document.querySelector(".yn-js").classList.remove("hidden");
    // document.querySelector(".yn-js").textContent = "Game Over";

    // if (
    //   completed_num.length == 100 ||
    //   !document.querySelector(".winner_1").classList.contains("hidden") ||
    //   !document.querySelector(".winner_2").classList.contains("hidden")
    // ) {
    //   document.querySelector(".yno-js").classList.add("hidden");
    //   document.querySelector(".yn-js").classList.remove("hidden");
    //   document.querySelector(".yn-js").textContent = "Game Over";
    // }

    // setTimeout(removeAfter, 20000, "yno-js");
    // document.querySelector(".yn-js").textContent = "Please Click On Start Game";
  } else {
    for (i = 0; i < completed_num.length; i++) {
      if (completed_num[i] == inputText) {
        // console.log("Selected Element present");
        document.querySelector(".yn-js").classList.remove("hidden");
        document.querySelector(".yn-js").textContent = "Yes Number Over";
        in_flag = 1;
      }
    }

    if (in_flag == 0) {
      document.querySelector(".yn-js").classList.remove("hidden");
      document.querySelector(".yn-js").textContent = "Not Yet Over";
    }

    if (in_flag == 1) {
      let mouseHoverCheck = function (e) {
        let storeClassCheck = e.srcElement.classList[0];
        // console.log(storeClassCheck);
        let hoverCheckTemp = e.srcElement.textContent;
        let checkStartTemp = document
          .querySelector(".randomnum")
          .classList.contains("hidden");
        if (!checkStartTemp) {
          let checkNumTemo = document.querySelector(".inum").value;
          if (hoverCheckTemp == checkNumTemo && in_flag == 1) {
            // console.log("Slected Green");
            document
              .querySelector(`.${storeClassCheck}`)
              .classList.add("seletedBox");
            checkForWinner();
          }
        }
      };

      for (i = 0; i < 60; i++) {
        if (typeof main_arr[i] == "number") {
          document
            .querySelector(`.arr${i}`)
            .addEventListener("mouseover", mouseHoverCheck);
        }
      }
    }
    // setTimeout(removeAfter, 15000, "yn-js");
  }
};

document.querySelector(".b-c-js").addEventListener("click", buttonCheck);

document.querySelector(".w-c-m-1").addEventListener("click", function () {
  document.querySelector(".w-p-u-1").classList.add("hidden");
});

document.querySelector(".w-c-m-2").addEventListener("click", function () {
  document.querySelector(".w-p-u-2").classList.add("hidden");
});

document
  .querySelector(".winner_ok_js-1")
  .addEventListener("click", function () {
    document.querySelector(".w-p-u-1").classList.add("hidden");
    location.reload();
  });

document
  .querySelector(".winner_ok_js-2")
  .addEventListener("click", function () {
    document.querySelector(".w-p-u-2").classList.add("hidden");
    location.reload();
  });

document.querySelector(".lost_ok_js").addEventListener("click", function () {
  location.reload();
  document.querySelector(".l-p-u").classList.add("hidden");
});

document.querySelector(".l-c-m").addEventListener("click", function () {
  document.querySelector(".l-p-u").classList.add("hidden");
});

document.querySelector(".t-c-m").addEventListener("click", function () {
  document.querySelector(".t-p-u").classList.add("hidden");
});

document.querySelector(".tie_ok_js").addEventListener("click", function () {
  document.querySelector(".t-p-u").classList.add("hidden");
  location.reload();
});
// console.log(document.querySelector(`.arr50`).textContent);
// console.log(document.querySelector(`.arr51`).textContent);
/*
// console.log(document.querySelectorAll("td")[11].textContent);
// document.querySelector(".showans").addEventListener("mouseover")

// document.querySelector(".textBox").addEventListener("mouse")
/*
// Color Change :

let countOver = 0;
let mouseOver = function (e) {
  console.log(e);
  // console.log(e.srcElement.classList);
  // console.log(e.srcElement.firstElementChild.classList[0]);
  console.log("Hi");
  countOver++;
  console.log(countOver);
};

let mouseOverColor = function (onWhatTable) {
  document
    .querySelector(`${onWhatTable}`)
    .addEventListener("mouseover", mouseOver);
};

// mouseOverColor("table");

// for (i = 1; i < 3; i++) {
//   mouseOverColor("section");
// }

*/