import React from 'react'
import "./blog.css"
import { Article } from '../../components'
import {blog01,blog02,blog03,blog04,blog05} from "./imports"

const articleData=[
  {
    imgUrl:blog02,
    date:"dic 27, 2023",
    title:"GPT3 amd Open AI is the future , let us explore now it is?"
  },
  {
    imgUrl:blog03,
    date:"dic 26, 2023",
    title:"GPT3 amd Open AI is the future , let us explore now it is?"
  },
  {
    imgUrl:blog04,
    date:"dic 25, 2023",
    title:"GPT3 amd Open AI is the future , let us explore now it is?"
  },
  {
    imgUrl:blog05,
    date:"dic 24, 2023",
    title:"GPT3 amd Open AI is the future , let us explore now it is?"
  }
]
function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="dic 28, 2023" title="GPT3 amd Open AI is the future , let us explore now it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          {articleData.map((data,index)=>(
            <Article key={data.title + index} imgUrl={data.imgUrl} date={data.date} title={data.title}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog