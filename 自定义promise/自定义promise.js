class Promise{
    constructor(executer){
        const that = this
        this.PromiseState = "pending"
        this.PromiseResult = null
        this.callbacks = []
        function resolve(data){
            //修改对象的状态promiseState
            //设置对象的结果值promiseResult
            if(that.PromiseState !== "pending") return//限定状态只能修改一次。
            that.PromiseState="resolved"
            that.PromiseResult=data
            setTimeout(()=>{
                that.callbacks.forEach(item=>{
                item.onResolved(data)
                })
            })
        }
    
        function reject(data){
            if(that.PromiseState !== "pending") return
            that.PromiseState="rejected"
            that.PromiseResult=data
            setTimeout(()=>{
                that.callbacks.forEach(item=>{
                item.onRejectd(data)
                })
            })
        }
    
        try{
            executer(resolve,reject);
        }catch(e){
            reject(e)
        }
    }

    then(onResolved,onRejectd){
    const that = this
    if(typeof onRejectd !== "function"){
        onRejectd = reason => {throw reason}
    }
    if(typeof onResolved !== "function"){
        onResolved = value => value
    }
    return new Promise((resolve,reject)=>{

        function callback(type){
            try{
                let res = type(that.PromiseResult)//res
                if(res instanceof Promise){
                    res.then(v=>{
                        resolve(v)
                    },r=>{
                        reject(r)
                    })
                }else{
                    resolve(res)
                }
                }catch(e){
                    reject(e)
            }
        }

        if(this.PromiseState ==="resolved"){
            setTimeout(()=>{
                callback(onResolved)
            },1000)
        }

        if(this.PromiseState === "rejected"){
            setTimeout(()=>{
                callback(onRejectd)
            },1000)
        }

        if(this.PromiseState === "pending"){
            this.callbacks.push({
                onResolved:function(){
                    callback(onResolved)
                },
                onRejectd:function(){
                    callback(onRejectd)
                }
            })
        }

    })
    }

    catch(onRejectd){
        return this.then(undefined,onRejectd)
    }

    static resolve(value){
        return new Promise((resolve,reject) => {
            if(value instanceof Promise){
                value.then(
                    v=>resolve(v),
                    r=>reject(r)
                    )
            }else{
                resolve(value)
            }
        })
    }

    static reject(reason){
        return new Promise((resolve,reject) => {
            reject(reason)
        })
    }

    static all(promises){
        return new Promise((resolve,reject) => {
            let count = 0 
            let arr = []
            for(let i=0;i<promises.length;i++){
                promises[i].then(v => {
                    count++;
                    arr[i] = v
                    if(count === promises.length){
                        resolve(arr)
                    }
                },r => {
                    reject(r)
                })
            }
        })
    }

    static race(promises){
        return new Promise((resolve,reject) => {
            for(let i=0;i<promises.length;i++){
                promises[i].then(v =>{
                    resolve(v)
                },r => {
                    reject(r)
                })
            }
        })
    }
}   


/* function Promise(executer){

    const that = this
    this.PromiseState = "pending"
    this.PromiseResult = null
    this.callbacks = []
    function resolve(data){
        //修改对象的状态promiseState
        //设置对象的结果值promiseResult
        if(that.PromiseState !== "pending") return//限定状态只能修改一次。
        that.PromiseState="resolved"
        that.PromiseResult=data
        setTimeout(()=>{
            that.callbacks.forEach(item=>{
            item.onResolved(data)
            })
        })
    }

    function reject(data){
        if(that.PromiseState !== "pending") return
        that.PromiseState="rejected"
        that.PromiseResult=data
        setTimeout(()=>{
            that.callbacks.forEach(item=>{
            item.onRejectd(data)
            })
        })
    }

    try{
        executer(resolve,reject);
    }catch(e){
        reject(e)
    }
}
 */
/* Promise.prototype.then = function(onResolved,onRejectd){//then方法中的回调是异步执行的

    const that = this
    if(typeof onRejectd !== "function"){
        onRejectd = reason => {throw reason}
    }
    if(typeof onResolved !== "function"){
        onResolved = value => value
    }
    return new Promise((resolve,reject)=>{

        function callback(type){
            try{
                let res = type(that.PromiseResult)//res
                if(res instanceof Promise){
                    res.then(v=>{
                        resolve(v)
                    },r=>{
                        reject(r)
                    })
                }else{
                    resolve(res)
                }
                }catch(e){
                    reject(e)
            }
        }

        if(this.PromiseState ==="resolved"){
            setTimeout(()=>{
                callback(onResolved)
            },1000)
        }

        if(this.PromiseState === "rejected"){
            setTimeout(()=>{
                callback(onRejectd)
            },1000)
        }

        if(this.PromiseState === "pending"){
            this.callbacks.push({
                onResolved:function(){
                    callback(onResolved)
                },
                onRejectd:function(){
                    callback(onRejectd)
                }
            })
        }

    })
} */
/* Promise.prototype.catch = function(onRejectd){
    return this.then(undefined,onRejectd)
} */
/* Promise.resolve = function(value){
    return new Promise((resolve,reject) => {
        if(value instanceof Promise){
            value.then(
                v=>resolve(v),
                r=>reject(r)
                )
        }else{
            resolve(value)
        }
    })
} */
/* Promise.reject = function(reason){
    return new Promise((resolve,reject) => {
        reject(reason)
    })
}
 */
/* Promise.all = function(promises){
    return new Promise((resolve,reject) => {
        let count = 0 
        let arr = []
        for(let i=0;i<promises.length;i++){
            promises[i].then(v => {
                count++;
                arr[i] = v
                if(count === promises.length){
                    resolve(arr)
                }
            },r => {
                reject(r)
            })
        }
    })
} */
/* Promise.race = function(promises){
    return new Promise((resolve,reject) => {
        for(let i=0;i<promises.length;i++){
            promises[i].then(v =>{
                resolve(v)
            },r => {
                reject(r)
            })
        }
    })
} */

