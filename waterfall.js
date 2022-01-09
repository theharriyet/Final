const gap = 14
const photosContainer= document.getElementById('photos-container')
const photos = document.getElementsByClassName('photo')

function cascadeDisplay() {
    //container的寬度
    const photosContainerWidth = photosContainer.offsetWidth
    //item的寬度(照片寬度)，前面透過getElementClassName取得class為photo的item，會取得一個陣列，但只需要知道其中一個item的寬度，所以用photo[0]來獲得width的值
    const photoWidth = photos[0].offsetWidth
    //一列想要有三欄，510/(156+14)
    const columnsCount = parseInt((photosContainerWidth) / ( photoWidth + gap ))
    //準備一個陣列來給後面紀錄第一列item的高度
    const fistRowPhotosHeightArray = []
    //進行照片排序
    //在for迴圈中，先把第一排先排滿，會有三欄來放第一列的item
    //放入item的同時把被放入第一列的item們的高記錄在陣列中
    for (let i = 0; i < photos.length; i++) {
        // 放上第一列的照片
        if (i < columnsCount) {
        photos[i].style.top = 0
        photos[i].style.left = (photoWidth + gap) * i + 'px'
        // 紀錄第一列的照片高
        fistRowPhotosHeightArray.push(photos[i].offsetHeight)
        } else {
        // 放上第二列開始的照片
        // 找出第一列的最小高度
        let minHeight = Math.min(...fistRowPhotosHeightArray)
        // 紀錄最小高度的index，以取得對應到第一列的位置，來決定left要移動多少
        let index = fistRowPhotosHeightArray.indexOf(minHeight)
        //把第一列item的最小的高度+間距設定成現在要擺放的item的top，拿最小高的item的offsetLeft設定成要擺放的item的left
        photos[i].style.top = minHeight + gap + 'px'
        photos[i].style.left = photos[index].offsetLeft + 'px'
        // 最後把原本儲存在陣列裡面為最小高度的值，更新上最新的高度(原本的高度+新的高度+間隔)
        fistRowPhotosHeightArray[index] = fistRowPhotosHeightArray[index] + photos[i].offsetHeight + gap
        }
    }

}
// 畫面一進來
window.onload = function() {
    cascadeDisplay()
}


