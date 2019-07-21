/**
 * 工具类
 */
let Tools = (function(){
    let children = [];

    /**
     * 获取子级
     *     循环所有的数据，把每个数据的pid和传进来的pid对比，
     *     如果一致，说明就就放到一个数组中，这个数据就是同级的了 
     */
    //通过父级的id获取子项
    function getChild(pid){
        let flag = false;
        let arr = [];
        for(let attr in data){
            if(data[attr].pid === pid){
                arr.push(data[attr]);
                flag = true;
            }
        }
        if(flag){
            return arr;
        }else{
            return null;
        }
    }
    
    //通过父级id获取所有子项
    function getChildren(pid){
        let arr = getChild(pid);//有子级
        arr & arr.forEach(e=>{
            children.push(e);
            getChildren(e.id);
        });
    }

    //通过id获取父级的pid
    function getParent(id){
        //如果data里没有对应id，或者当前data中的id下的pid为-1就是微云，返回null
        if(!data[id] || data[id].pid == -1)return null;
        return data[data[id].pid];
    }

    //找父级的父级
    function getParents(id){
        let parentArr = [];
        let now = data[id];
        while(now){
            parentArr.unshift(now);
            now = getParent(now.id);
        }
        console.log(parentArr);
        
        return parentArr;
    }

    //添加属性
    function addAttr(attr,value){
        for(let k in data){
            if(Array.isArray(value)){
                data[k][attr] = [];
            }else{
                data[k][attr] = value;
            }
        }
    }

    //查找ele元素上是否包含此节点
    function targetP(ele,cName){
        //ele元素上包含cName
        if(ele.classList.contains(cName)){
            return true;
        }
        //返回ele元素父节点包含cName
        return ele.parentNode.classList.contains(cName);
    }

    //判断两个盒子碰撞
    function crash(obj1,obj2){
        let l1 = obj1.offsetLeft;
        let t1 = obj1.offsetTop;
        let b1 = t1 + obj1.offsetHeight;
        let r1 = l1 + obj1.offsetWidth;

        let l2 = obj2.offsetLeft;
        let t2 = obj2.offsetTop - folders.scrollTop;
        let b2 = t2 + obj2.offsetHeight;
        let r2 = l2 + obj2.offsetWidth;

        if(r1<l2 || b1<t2 || l1>r2 || t1>b2){
            return false;
        }else{
            true;
        }
    }

    //返回函数接口
    return{
        children,
        getChild,
        getChildren,
        getParent,
        getParents,
        addAttr,
        targetP,
        crash
    }

})();