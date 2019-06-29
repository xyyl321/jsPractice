// window.onload=function(){
//     let hdList=document.querySelectorAll(".hd>li")
//     let content=document.querySelectorAll(".content>div")
//     content[0].style.display="block";
//     hdList.forEach((v,i)=>{
//         v.onmouseover=function(){
//             content.forEach((value)=>{
//                 value.style.display="none";
//             })
//             content[i].style.display="block";
//         }
//     })
// }

// 1.获取html元素
// 通过css将所有的内容都隐藏
// 默认显示第一个，获取到所有要显示的内容，放在一个集合中，控制集合中第一个显示
// 鼠标移入第一个显示第一个的内容，其他隐藏，鼠标移入第二个，显示第二个的内容，其他的隐藏，第三个一样
// 移入元素的下标与要显示的内容的下标已知，可以ton郭泽中关系实现相应的小狗

// 1.将所有内容都隐藏css
// 2.进入页面默认显示第一个
// 3.移入对应的元素显示相应的内容
// 4.头部元素与内容的联系：下标一一对应


let b=document.querySelector("div");
console.log(b);
// let w=200;
// box.style.width=w+"px";
// box.style.height=w+"px";
// box.style.backgroundColor="red";
// box.getElementsByClassName.cssText=""


