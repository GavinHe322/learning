// 22.2 合并重复的条件片段

const jump = function(page) {
  console.log(page)
}

const totalPage = 10

// before
var paging = function(currPage) {
  if (currPage <= 0) {
    currPage = 0
    jump(currPage)
  } else if (currPage >= totalPage) {
    currPage = totalPage
    jump(currPage)
  } else {
    jump(currPage)
  }
}

// after
var paging = function(currPage) {
  if (currPage <= 0) {
    currPage = 0
  } else if (currPage >= totalPage) {
    currPage = totalPage
  }
  jump(currPage) // 把jump函数独立出来
}
