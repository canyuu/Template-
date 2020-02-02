import React from 'react';
import {Button} from 'antd'

import {JWPLayoutSimple} from '../components'

//复杂页面级别组件用class类定义 方便的使用状态和生命周期方法函数
class IndexPage extends React.Component {
    render() {
        return (
            <JWPLayoutSimple>
                {/*<Button>Hello</Button>*/}
            </JWPLayoutSimple>
        );
    }
}

export default IndexPage;