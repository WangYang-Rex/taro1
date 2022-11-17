import { Component, PropsWithChildren } from 'react'
import { View, Text, Icon, Image } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.less'
import GithubPic from '../../images/github.png';
import BlogPic from '../../images/blog.jpg';

const Index = () => {
  const onClick = (key: 'githubrank' |'blog') => {
    let urls = {
      'githubrank': '/pages/ranklist/index',
      'blog': '/pages/blog/index'
    }
    if (urls[key]) {
      Taro.navigateTo({
        url: urls[key]
      })
    }
  }

  return (
    <View className='indexPage'>
      <View className='header t-FBH'>
        {/* <Icon type='' /> */}
        <Image className='header-pic' src='https://dingtalkcdn.superboss.cc/dingcrm/img/field/icon_DATE.png' />
        <Text className='header-title'>实用工具</Text>
      </View>
      <View className='home-content t-FBH'>
        <View className='home-item t-FBV' onClick={() => { onClick('githubrank') }}>
          <View className='home-item-icon t-center'>
            <Image className='home-item-pic' src={GithubPic} />
          </View>
          <Text className='home-item-title'>Github排名</Text>
        </View>
        <View className='home-item t-FBV' onClick={() => { onClick('blog') }}>
          <View className='home-item-icon t-center'>
            <Image className='home-item-pic' src={BlogPic} />
          </View>
          <Text className='home-item-title'>Blog</Text>
        </View>
        {/* <View className='home-item t-FBV' onClick={() => { onClick('githubrank') }}>
          <View className='home-item-icon t-center'>
            <Image className='home-item-pic' src={GithubPic} />
          </View>
          <Text className='home-item-title'>Github排名</Text>
        </View> */}
      </View>
    </View>
  )
}

export default Index;
// export default class Index extends Component<PropsWithChildren> {

//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//         <Text onClick={}>Hello world!</Text>
//       </View>
//     )
//   }
// }
