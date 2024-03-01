

// "ABS": {
//     "body": "ABS( )",
//     "createtime": "",
//     "description": "ABS(X)：取的X的绝对值。\\r\\n\\r\\n注：\\r\\n1、正数的绝对值是它本身；\\r\\n2、负数的绝对值是它的相反数；\\r\\n3、0的绝对值还是0；\\r\\n\\r\\n例1：\\r\\nABS(-10);//返回10。\\r\\n例2：\\r\\nABS(CLOSE-10);//返回收盘价和的10价差的绝对值。\\r\\n例3：\\r\\nABS(C-O);//当前K线实体长度",
//     "explanation": "绝对值",
//     "markettype": 0,
//     "modifytime": "",
//     "param": "",
//     "tip": "ABS(X),求X的绝对值",
//     "type": 4
// },

class MyFunc {
    public body: string = ""
    public description: string = ""
    public explanation: string = ""
    public markettype: number = 0
    public tip: string = ""
    public type: number = 0
}

const ABS = new MyFunc()
ABS.body = "ABS(X)"
ABS.description = `
ABS(X)：取的X的绝对值。
注：
1、正数的绝对值是它本身；
2、负数的绝对值是它的相反数；
3、0的绝对值还是0；
例1：
ABS(-10);//返回10。
例2：
ABS(CLOSE-10);//返回收盘价和的10价差的绝对值。
例3：
ABS(C-O);//当前K线实体长度
`

export default {
    ABS
}