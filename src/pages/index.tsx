import React from 'react'
// import Button from 'antd/lib/button'
// import 'antd/lib/button/style/css'
import { Link } from 'gatsby'
import { Header } from '../Header'
import { Button, PageHeader, Icon } from 'antd'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        React-Suite Components
      </p>
      <h2>一款提供React-Suite体验的开发文档生成器</h2>
      <br />
      <Button.Group size="large">
        <Button
          href="https://twitter.com/jannikbuschke"
          target="_blank"
        >
          Wechat
          <Icon type="twitter" />
        </Button>
        <Button
          href="https://github.com/jannikbuschke/gatsby-antd-docs"
          target="_blank"
        >
          Github
          <Icon type="github" />
        </Button>
        <Button type="primary" >
          <Link to="/docs/get-started/introduction">开始使用</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
