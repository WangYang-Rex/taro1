import Taro from '@tarojs/taro';

export const Request = async ({ url, data, success, fail }: any) => {
  const defaultOptions = {
    // header: {
    //   'content-type': 'application/json',
    // },
    method: 'POST',
  }
  const option: any = Object.assign({}, defaultOptions, {
    url,
    data,
    // success: (res) => {
    //   success && success(res)
    // },
    // fail: (res) => {
    //   fail && fail(res)
    // }
  })
  try {
    const res:any = await Taro.request(option)
    const { data: resData, message, result } = res.data;
    console.log(res, message)
    if (result == 200) {
      return resData
    }
    // this.setState({
    //   threads: res.data,
    //   loading: false
    // })
  } catch (error) {
    Taro.showToast({
      title: '载入远程数据错误'
    })
  }
}