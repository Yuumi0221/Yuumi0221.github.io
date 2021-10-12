/**
 * 像素辅助类
 *
 * @class Pixel
 */
 class Pixel {
    constructor(r, g, b) {
      this._r = r;
      this._g = g;
      this._b = b;
    }
    get rgb() {
      return {
        r: this._r,
        g: this._g,
        b: this._b,
      };
    }
  }
  
  /**
   * 图像的RGB颜色空间中对应的点集合
   *
   * @class RGBSpace
   */
  class RGBSpace {
    constructor(canvasContext, img) {
      // 获取图像的rgb数据
      let data = canvasContext.getImageData(0, 0, img.width, img.height).data;
      let rgbSpace = [];
      for (let row = 0; row < img.height; row++) {
        for (let col = 0; col < img.width; col++) {
          // 因为使用getImageData返回来的依次为点的r g b alpha（透明度），所以要加四
          let r = data[(img.width * row + col) * 4];
          let g = data[(img.width * row + col) * 4 + 1];
          let b = data[(img.width * row + col) * 4 + 2];
          rgbSpace.push(new Pixel(r, g, b));
        }
      }
      this._rgbSpace = rgbSpace;
      this._length = img.height * img.width;
    }
    // 获取指定位置上的Pixel
    getPixel(idx) {
      if (idx > this._length) return;
      return this._rgbSpace[idx];
    }
    // 随机获取一个图像中的Pixel
    getRandomPixel() {
      return this.getPixel(Math.floor(Math.random() * this._length));
    }
    // 获取点的个数
    get size() {
      return this._length;
    }
  }
  
  /**
   *
   * @class Cluster
   */
  class Cluster {
    // 中心rgb和该cluster包含的点
    constructor(pixel) {
      this._centerR = pixel._r;
      this._centerG = pixel._g;
      this._centerB = pixel._b;
      this._cluster = [pixel];
    }
    // 添加到cluster中
    addToCluster(pixel) {
      this._cluster.push(pixel);
    }
    // 重新计算质心centroid
    recalculateCenter() {
      let oldCenter = new Pixel(this._centerR, this._centerG, this._centerB);
      let length = this._cluster.length;
      let reduced = this._cluster.reduce(
        (pre, cur) => {
          let { r: rPre, g: gPre, b: bPre } = pre;
          let { r: rCur, g: gCur, b: bCur } = cur.rgb;
          return {
            r: rPre + rCur,
            g: gPre + gCur,
            b: bPre + bCur,
          };
        },
        { r: 0, g: 0, b: 0 }
      );
      let r = reduced.r / length;
      let g = reduced.g / length;
      let b = reduced.b / length;
      this.cluster = [new Pixel(r, g, b)];
      this._centerR = r;
      this._centerG = g;
      this._centerB = b;
      // 返回原来的质心（后面用于比较新旧质心之间的距离是否“足够近”，从而可以结束算法
      return new Cluster(oldCenter);
    }
    // 获取某个pixel相对于这个cluster的centroid的距离，或者两个cluster的centroid之间的距离
    getDistance(pixel) {
      let { _centerR, _centerG, _centerB } = this;
      if (pixel instanceof Pixel) {
        let { r, g, b } = pixel.rgb;
        return (r - _centerR) ** 2 + (g - _centerG) ** 2 + (b - _centerB) ** 2;
      }
      if (pixel instanceof Cluster) {
        let { _centerR: r, _centerG: g, _centerB: b } = pixel;
        return (r - _centerR) ** 2 + (g - _centerG) ** 2 + (b - _centerB) ** 2;
      }
    }
  }
  
  /**
   * 用来分类
   *
   * @param {*} ClusterList
   * @param {*} space
   * @return {*}
   */
  function classify(ClusterList, space) {
    space._rgbSpace.forEach((pixel) => {
      // 每个像素都和目前的cluster的centroid计算距离
      let distanceArray = ClusterList.map((Cluster) => {
        return Cluster.getDistance(pixel);
      });
      // 将该像素加入到最近的cluster
      let min = Math.min(...distanceArray);
      let minIndex = distanceArray.indexOf(min);
      ClusterList[minIndex].addToCluster(pixel);
    });
    // 重新计算每个cluster的centroid，并将原来的clusterList返回
    return ClusterList.map((Cluster) => {
      return Cluster.recalculateCenter();
    });
  }
  
  /**
   * 判断新点和旧点是否足够近
   *
   * @param {*} old
   * @param {*} now
   * @param {*} threshold
   * @return {*}
   */
  function isCloseEnough(old, now, threshold) {
    let index = 0;
    for (let oldCenter of old) {
        // 如果任意cluster的centroid与旧cluster的centroid大于某一阈值，说明还不足够近
      if (oldCenter.getDistance(now[index++]) > threshold) return false;
    }
    return true;
  }
  
  /**
   * 使用Kmeans找相应点颜色
   *
   * @param {*} context
   * @param {*} image
   * @param {*} colorPanel
   * @param {*} K
   * @param {*} threshold
   */
  function main(context, image, colorPanel, K, threshold) {
    // 获取一个RGBSpace类的实例
    let space = new RGBSpace(context, image);
    // 随机选取K个像素，并作为K个cluster的centroid
    let ClusterList = Array(K)
      .fill(1)
      .map(() => new Cluster(space.getRandomPixel()));
    let i = 0;
    // 这里和DOM相关了，如果有色板，就创建相应的容器
    if (colorPanel) {
      ClusterList.forEach((el, idx) => {
        let div = document.createElement("div");
        div.className = `panel-${idx}`;
        colorPanel.appendChild(div);
      });
    }
    // 一直循环，直到各个cluster的centroid都和上一次的centroid“足够近”
    while (true) {
      console.log(i++);
      let oldClusterList = classify(ClusterList, space);
      console.log(oldClusterList);
      if (isCloseEnough(oldClusterList, ClusterList, threshold)) {
        break;
      }
      // 将结果展示到对应色板上
      if (colorPanel) {
        ClusterList.forEach((cc, index) => {
          let div = document.createElement("span");
          div.style.backgroundColor = `rgb(${cc._centerR},${cc._centerG},${cc._centerB})`;
          colorPanel.children[index].appendChild(div);
        });
      }
    }
  }