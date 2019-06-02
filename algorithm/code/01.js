
/**
 * 有1, 2, 3, 4个数字,
 * 组成互不相同且无重复的三位数
 */

function noRepeat() {
    var i = 100
    var sum = 0;
    // for (var i = 0; i < 1000; i ++) {}
    while(i < 1000) {
        let ge = i % 10
        let shi = i / 10 % 10
        let bai = i / 100 % 100
        if (
            ge <= 4 && shi <= 4 && bai <= 4 && ge >= 1 && shi >= 1 && bai >= 1
        ) {
            if (ge != shi && ge != bai && shi != bai) {
                console.log(i)
                sum ++
            }
        }
        ++ i 
    }
    console.log(sum)
}

// noRepeat();


function noRepeat2 () {
    for (var i = 1; i < 5; i ++) {
        for (var j = 1; j < 5; j ++) {
            for (var k = 1; k < 5; k ++) {
                if (i != j && j != k && k != i) {
                    console.log(
                        `${i}${j}${k}`
                    )
                }
            }
        }
    }
}

noRepeat2()