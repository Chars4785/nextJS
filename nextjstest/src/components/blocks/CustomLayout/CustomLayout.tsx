import Head from 'next/head'

import { Layout,Menu, Breadcrumb  } from 'antd'
import './CustomLayout.module.scss';
import { useRouter } from 'next/router';

const { Header, Content, Footer } = Layout;

function CustomLayout(props){
    const router = useRouter()
    const { children } = props
    
    const onClickMenu = (href) =>{
        router.push(href)
    }

    return(
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={()=> onClickMenu('/')}>
                        홈
                    </Menu.Item>
                    <Menu.Item key="2" onClick={()=> onClickMenu('/IdeaPage')}>
                        아이디어
                    </Menu.Item>
                    <Menu.Item key="3" onClick={()=> onClickMenu('/NewsPage')}>
                        뉴스
                    </Menu.Item>
                    <Menu.Item key="4" onClick={()=> onClickMenu('/CirclesPage')}>
                        동아리
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                { children }
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2022 Created by XING</Footer>
        </Layout>
    )
}

export default CustomLayout