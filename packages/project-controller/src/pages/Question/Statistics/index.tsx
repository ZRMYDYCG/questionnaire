import React from 'react'
import { Spin, Result, Button } from 'antd'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData.ts'
import useGetPageInfo from '../../../hooks/useGetPageInfo.ts'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'
import StatisticsHeader from './components/statistics-header.tsx'

const Statistics: React.FC = () => {
  const { loading } = useLoadQuestionData()
  const { isPublished } = useGetPageInfo()
  const navigate = useNavigate()
  useTitle('一刻 • 问卷 | 问卷统计')

  if (!isPublished) {
    return (
      <div className="h-full w-full flex justify-center items-center -mt-[100px]">
        <Result
          status="warning"
          title="该问卷尚未发布"
          subTitle="请等待管理员审核通过后再查看统计信息"
          extra={
            <Button type="primary" onClick={() => navigate(-1)}>
              返回上一页
            </Button>
          }
        ></Result>
      </div>
    )
  }
  return (
    <div className="h-full w-full flex flex-col min-h-screen bg-gray-500/40">
      <StatisticsHeader />
      <div className="flex-auto py-[12px]">
        <div className="flex mx-[24px]">
          <div className="w-[350px] mr-[24px]">左侧</div>
          <div className="flex-auto bg-white py-[12px] px-[18px]">中间</div>
          <div className="w-[400px] ml-[24px] bg-white py-[12px] px-[18px]">
            右侧
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
