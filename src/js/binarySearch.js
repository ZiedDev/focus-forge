function binarySearch(arr = [], parm1, id1, parm2, id2 = null) {
    let start = 0;
    let end = arr.length - 1;

    arr.sort((a, b) => a[parm1] - b[parm1])
    arr.sort((a, b) => a[parm2] - b[parm2])

    while (start < end) {
        let mid = parseInt(Math.floor((start + end) / 2));
        if (id2 == null) {
            if (arr[mid][parm1] < id1) {
                start = mid + 1
            } else {
                end = mid
            }
        } else {
            if (arr[mid][parm2] < id2) {
                start = mid + 1
            } else if (arr[mid][parm2] > id2) {
                end = mid
            } else {
                if (arr[mid][parm1] < id1) {
                    start = mid + 1
                } else {
                    end = mid
                }
            }
        }
    } return [end, arr[end]]
}

export { binarySearch }