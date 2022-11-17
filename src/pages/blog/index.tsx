// import { Component, PropsWithChildren } from 'react'
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { WebView } from '@tarojs/components'
// import Taro from '@tarojs/taro'
import './index.less'

function Blog(props: any) {
  return (
    <WebView className='Blog' src='https://blog.html-js.site/' />
  )
}

export default Blog