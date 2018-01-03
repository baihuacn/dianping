export default{
  getItem(key){
    let value
    try {
      value=localStorage.getItem(key)
    }catch (err){
      console.error('localStorage.getItem报错',err.message)
    }finally {
      return value
    }
  },
  setItem(key,value){
    try {
      // ios safari 无痕模式下localStorage.setItem报错
      localStorage.setItem(key,value)
    }catch(err){
      console.error('localStorage.setItem报错',err.message)
    }
  }
}