// import { Component, PropsWithChildren } from 'react'
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Request } from '../../lib/request';
// import Taro from '@tarojs/taro'
import './index.less'

type UserType = {
  avatar_url: string;
  blog: string;
  company: string;
  email: string;
  followers: string;
  id: string;
  location: string;
  login: string;
  name: string;
  ranknum: string;
  record_date: string;
  total_users: string;
}

function Ranklist (props: any) {
  const [list, setList] = useState<UserType[]>([]);
  const pageRef = useRef({
    page: 1,
    pageSize: 100,
    count: 0
  })
  const getList = async () => {
    const res: any = await Request({ // Taro.request({
      method: 'POST',
      url: 'http://log.html-js.site/rank/list.rjson',
      data: {
        page: pageRef.current.page,
        pageSize: pageRef.current.pageSize,
        record_date: new Date().toISOString().slice(0, 10)
      }
    })
    pageRef.current.count = res.count;
    setList(res.list);
  }
  useLayoutEffect(() => {
    getList()
  }, [])

  return (
    <View className='ranklist'>
      <View className='r-table main t-FBV'>
        <View className='r-tb-theader t-FBH'>
          <View className='r-tb-th' style='width: 15%'>排名</View>
          <View className='r-tb-th' style='width: 15%'>头像</View>
          <View className='r-tb-th t-FB1'>信息</View>
          <View className='r-tb-th' style='width: 20%'>关注着</View>
        </View>
        <View className='r-tb-body t-FB1'>
          {
            list.map((item: UserType, index: number) => {
              return (
                <View className='r-tb-tr t-FBH' key={item.id}>
                  <View className='r-tb-td r-rank' style='width: 15%'>{item.ranknum}</View>
                  <View className='r-tb-td r-pic' style='width: 15%'>
                    <Image
                      className='r-pic-img'
                      src={item.avatar_url}
                    />
                  </View>
                  <View className='r-tb-td r-info t-FB1' >
                    <Text className='r-info-1'>{item.name}</Text>
                    <Text className='r-info-2'>{item.location}</Text>
                  </View>
                  <View className='r-tb-td r-follower' style='width: 20%'>{item.followers}</View>
                </View>
              )
            })
          }
        </View>
      </View>

    </View>
  )
}

export default Ranklist