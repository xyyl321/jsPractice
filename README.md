# jsPractice

### 拖拽事件：  
1. 鼠标按下事件
    1. 根据事件对象保存初始位置的数据 x,y
2. 鼠标移动事件
    1. 保存鼠标移动过的位置
    2. 将移动的位置和初始位置进行运算得出元素的定位位置
    3. 给元素设置相对应的定位属性，实现元素跟随鼠标移动一起移动
    4. 元素移动的距离的判断条件（边界）
3. 鼠标抬起事件
    1. 鼠标抬起时需要清除掉鼠标的移动事件，将元素放在当前位置
        1. 使用onmousemove添加的事件，将它改为null
        2. 通过addEventListener添加的事件监听，使用removeEventListener移除事件


### 倒计时：
1.确定当前时间  
2.确定目标时间  
3.将目标时间与当前时间进行减法运算，再根据结果算倒计时的时间  
4.通过时间函数不断的获取当前的时间来实现最终的倒计时  

获取当前时间  的毫秒
获取目标时间  的毫秒

计算秒数，分钟数，小时数

### 按需加载：
根据用户的需求去显示相应的内容，当页面滚动到某一阶段时再进行图片的加载  
图片：加载中---加载完成

1.确定按需加载的定义  

2.如何去进行  

3.通过将图片的地址放在自定义属性中，当我们更需要的时候再将这个地址放在img标签的src中  

4.获取到操作元素，将图片的路径放在自定义属性中  

5.根据条件，页面滚动过的距离来判断用户是否需要加载图片，如果需要将自定义属性中的路径放在src属性中，如果不需要就不需要进行这个操作  


不能拖拽：
-webkit-user-drag:none;

步骤：
1.js通过for循环，加图
用字符串的拼接保存，然后放在相应的盒子中

2.将图片的地址放在自定义属性中
获取img标签
设置自定义属性：  .setAttribute("属性名","属性值");

3.

> 页面中常见效果：轮播图，选项卡，楼层跳转，返回顶部，按需加载

### 1、轮播

1. 图片都在一个位置显示，所以css需要修改
2. 使用setInterval实现自动轮播
3. 需要一个变量记录当前显示的图片的下标
4. 动态的改变下标实现轮播
5. 轮播点的选中状态与当前显示的图片一一对应
6. 添加轮播点移入效果
使用淡入淡出的效果，通过opacity透明度来实现淡入淡出的效果，给透明度一个动画时间
1. 获取要操作的元素
2. 默认显示第一张图片
3. 变量，记录当前显示图片的下标

移入轮播点，显示对应的图片。根据轮播点下标与图片下标一致的特点，通过将index的值

### 2、横向滚动轮播
1. 当前图片在中间显示，下一张图片应该从右边进入到中间结束。
2. 如果点击显示上一张，当前图片向右移，下一张图片从左往右移移动中间位置
3. 轮播点点击或移入显示对应的图片，将轮播点下标与图片一一对应。需要判断下一张与当前张的下标大小，决定轮播的方向。


1. 获取操作元素。
2. 轮播图，默认显示第一张，改定位
3. 轮播点，默认显示第一个轮播点
4. 两个下标，index当前显示的图片，next将要移入的图片。
5. 动态的改变next ，index跟着变
6. 引用animate实现横向滚动 animate(运动的元素，{属性：属性值});


### 3、悬浮框：
1. 通过动态的修改元素的定位的left和top来实现悬浮框
    1. 获取元素
    2. 运动的速度（left值增大步进值）
    3. 通过时间函数让left数值不断的变化
    4. 判断最大值 最小值
    5. top与left相同

### 4、楼层跳转：
offsetTop,下标的一一对应，scrollTo
1. 先将每个楼层距离文档顶部的距离保存下来
2. 根据点击的按钮不同将页面滚动到相应的位置（保存下来的距离）
3. 通过时间函数自己定义一个动画
4. 滚动速度

添加鼠标滚轮事件，