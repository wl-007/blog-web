# uni.request

```js
export class Request {
	static SERVE_URL = "http://127.0.0.1:3000"; //服务器地址
	static request({
		apiUrl,
		data = '',
		method = 'post'
	} = {}) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.SERVE_URL + apiUrl, //仅为示例，并非真实接口地址。
				data,
				method,
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				success: (res) => {
					resolve(res.data);
				},
				fail: (err) => {
					reject("err",err);
				}
			});
		})

	};
	/*
	 * post 请求
	 */
	static post({
		apiUrl,
		data = ''
	} = {}) {
		return this.request({
			apiUrl,
			data,
			method: 'post'
		})
	};
	/*
	 * post 请求
	 */
	static get({
		apiUrl,
		data = ''
	} = {}) {
		return this.request({
			apiUrl,
			data,
			method: 'get'
		})
	};
	// 微信登录 基础库2.27.1 以下版本
	static  weChatLogin() {
		try {
			return new Promise(async (resolve, reject) => {
				const userRes = await this.getUserProfile();
				const loginRes = await this.wxLogin();
				resolve({
					code: loginRes.code,
					rowData: userRes.encryptedData,
					iv: userRes.iv
				})
			});
		} catch (e) {
			//TODO handle the exception
			console.log(e);
		}

	};
	// 微信小程序获取用户基本信息，
	// 微信小程序端基础库2.27.1及以上版本，wx.getUserProfile 接口被收回
	static getUserProfile() {
		return new Promise((resolve, reject) => {
			uni.getUserProfile({
				desc: "我要登录",
				success(res) {
					resolve(res);
				},
				fail(err) {
					reject(err);
				}
			})
		});
	};
	// 微信授权登录，获取唯一code
	static wxLogin() {
		return new Promise((resolve, reject) => {
			uni.login({
				success: loginRes => {
					resolve(loginRes);
				},
				fail(err) {
					reject(err);
				}
			});
		})

	}
}
```

# Session

```js
export class Session {
	static LOGIN_INFO = "LoginInfo";
	// data	需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象
	static setStorageSync(key, data) {
		try {
			data=JSON.stringify(data)
			uni.setStorageSync(key, data);
		} catch (error) {
			console.log("Session setStorageSync", error);
		}
	};
	static getStorageSync(key) {
		try {
			const value = uni.getStorageSync(key) || '{}';
			return JSON.parse(value);
		} catch (error) {
			console.log("Session getStorageSync", error);
		}
	};
	// 获取储存信息
	static getStorageInfoSync(key) {
		try {
			const value = uni.getStorageInfoSync() ;
			return value;
		} catch (error) {
			console.log("Session getStorageInfoSync", error);
		}
	};
	// 清除本地存储
	static clearStorageSync(key) {
		try {
			 uni.clearStorageSync() ;
			 return 1
		} catch (error) {
			console.log("Session clearStorageSync", error);
		}
	};
	// 存储登录信息
	static setLogin(data) {
		return this.setStorageSync(this.LOGIN_INFO, data);
	};
	// 获取登录信息
	static getLogin() {
		return this.getStorageSync(this.LOGIN_INFO);
	}
}
```



# api动态注册

```js
import {
	Request
} from './Request.js';
const BASE_URL = '/api/';

function post(url, data) {
	const api = BASE_URL + url;
	return Request.post({
		apiUrl: api,
		data,
	});
}

function get(url, data) {
	const api = BASE_URL + url;
	return Request.get({
		apiUrl: api,
		data,
	});
}

// post
const postArr = [
	'getStatisticsByDId', 'getDoctorStatisticsByUserId', 'getServiceByDIdLimit', "chcsLogin",
	"getServiceDetailByDoctorId", 'saveResident', 'getAllResidentLabel', 'getNotSignResident',
	'getServiceByRId', 'getResidentLabelHealthById', 'updateRLHById', 'getDoctorDefaultTeamOrgById',
	'getLabelAndResidentCount', "getDoctorByUserId", "getDoctorTeamOrgById", 'getAllChcsOrgan', 'getAllChcsService',
	'updateSignStatusById', 'saveSign', 'getSignById', "getServiceByDIdRidStatus", 'getServiceDetailById',
	'getTeamByOrganId', 'updateStatusByServiceDetailId', 'getDefaultTeamIdByDoctorId', 'getDoctorByTeamId',
	'getServiceDetailByResidentId', 'getServiceLabelItem', 'saveServiceDetail', 'saveHealthFollowUp',
	'getWeightByResidentId'

]; //接口名称，与尾地址同名
const getArr = [];
const tempObj = {};
for (let i = 0; i < postArr.length; i++) {
	const element = postArr[i];
	tempObj[element] = function(data = {}) {
		return post(element, data);
	};
}
for (let i = 0; i < getArr.length; i++) {
	const element = getArr[i];
	tempObj[element] = function(data = {}) {
		return get(element, data);
	};
}
export default tempObj;
```



# 界面相切判断

```js
export default {
	/**
	 * uniapp 节点布局交叉 相交方向判断
	 * res ：objObserver.observe 的回调参数
	 * return -1: 异常 ，601 从下往上切出 ，602 从上往下切出，603 从上往下切入，604 从下往上切入
	 */
	
	judgeDirection(res) {
		let rtn = -1;
		if (0 == res.intersectionRect.bottom) {
			//切出
			if (res.boundingClientRect.bottom > res.relativeRect.bottom) {
				//目标区域的的下边距离顶部的距离大于参照区域的距离 向下切出
				rtn=602;
			} else {
				this.selectNo = res.dataset.index + 1;
				rtn=601;
			}
		} else {
			//切入
			if (res.relativeRect.top==res.intersectionRect.top) {
				//相交区域的上边界等于目标的上边界，从上往下切入
				//也可以判断目标的top 小于参照区域的top
				rtn =603;
			} else {
				//从下往上切入
				rtn =604;
			}
		}
	}
}

```

### 相切案例

```vue
<scroll-view style="height: 900rpx; width: 100%;" :scroll-top="scrollTop" scroll-y="true"
             class="scroll-Y" :scroll-into-view="scrollIntoview" :scroll-with-animation="true">
    <view class="point"></view>
    <nl-card-basic class="js_title" :data-title="item.typeName" :data-index="index"
                   :title="item.typeName" :id="'A'+item.id" v-for="(item,index) in serveData"
                   :btnSwtich="false">
        <view style="display: flex;flex-wrap: wrap; justify-content: space-around;">
            <nl-card-img style="margin-right: 100rpx;" v-for="sub in item.children"
                         :info="sub.typeName"></nl-card-img>
        </view>
    </nl-card-basic>
</scroll-view>
```

```js
onObserve() {
    // console.log("onObserve");
    //创建观察者对象，用于监听两个盒子之间的相关状态
    this.objObserver = uni.createIntersectionObserver(this, {
        observeAll: true
    });

    //设置相交的参考物为整个视窗界面
    // objObserver.relativeToViewport({
    // 	top: 200,
    // });
    //  scroll-Y point

    this.objObserver.relativeTo('.scroll-Y', {
        top: -100,
        bottom: -100
    })
    let isGo = true; // 控制一定时间前不允许触发相交事件
    setTimeout(() => {
        isGo = false
    }, 300)
    //监听所有first_title的盒是否与视窗相关
    this.objObserver.observe(".js_title", (res) => {
        /**
					 * objObserver left、right、top、bottom 猜测  
					 * top、bottom为距离视口上边界的距离
					 * left、right为距离视口左边界的距离
					 * */
        if (isGo) {
            return
        }
        if (0 == res.intersectionRect.bottom) {
            //切出
            if (res.boundingClientRect.bottom > res.relativeRect
                .bottom) {
                //目标区域的的下边距离顶部的距离大于参照区域的距离 向下切出

                this.selectNo = res.dataset.index - 1;
            } else {

                this.selectNo = res.dataset.index + 1;
            }
        } else {
            //切入

            if (res.relativeRect.top == res.intersectionRect.top) {
                //相交区域的上边界等于目标的上边界，从上往下切入
                console.log("从上往下切入", res);
            } else {
                //从下往上切入
                console.log("从下往上切入", res);
            }

        }
    });
    // this.$nextTick(() => {
    // 	//在下一次界面渲染完成后触发该回调函数, 权在下一次渲染时调用一次。


    // })
},
```

