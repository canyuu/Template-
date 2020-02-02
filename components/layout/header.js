import React from 'react';
import Link from 'next/link'
import {Layout,Tooltip,Icon} from "antd";

import JWPLogo from './logo'


class JWPHeader extends React.Component {
    render() {
        return (
            <Layout.Header className="header">
                <JWPLogo/>
                <div className="right">
                    {/*passHref传递把Link的href传递给A标签*/}
                    <Link href="/task/publish" passHref>
                        <Tooltip title="发布">
                            <a className="header-button">
                                <Icon type="plus" />
                            </a>
                        </Tooltip>
                    </Link>
                </div>
                <style jsx>{`
                :global(.header){
                    display:flex;
                    padding: 0 24px;
                    background-color: white;
                    box-shadow:0 1px 4px rgba(0,21,41, .08);
                    z-index:1
                    
                          }
                    .right{
                    margin-left:auto}
                    
`}

                </style>


            </Layout.Header>
        );
    }
}

export default JWPHeader;