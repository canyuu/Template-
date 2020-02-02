import React from 'react';
import {Layout} from 'antd'

import JWPHeader from './header'
import JWPFooter from './footer';

export default function JWPLayoutSimple({
                                           children, pathname
                                       }) {
    return (
        //页面高度填满整个视图
        <Layout style={{minHeight: '100vh'}}>
            <JWPHeader pathname={pathname}/>

            <Layout.Content>
                {/*页面组件渲染的内容*/}
                {children}
            </Layout.Content>
            <JWPFooter />
        </Layout>
    )
}
