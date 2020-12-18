import React, { useCallback, useEffect, useState } from 'react';
import { Col, Input, Row } from 'antd';
import IconFont from '@/components/IconFont';
import { MenuUnfoldOutlined } from '@ant-design/icons';

import style from './index.less';

/**
 * 全局表头，在每个页面上都有，包含搜索、个人中心、菜单选择功能
 *
 * @constructor
 */
const GlobalTitle: React.FC = () => {
  const [_top, _setTop] = useState<string | number>(0);

  const onGlobalScroll = useCallback(() => {
    if(document.documentElement.scrollTop > document.documentElement.clientHeight / 2) {
      _setTop('-5.5vh');
    } else {
      _setTop(0);
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onGlobalScroll);
    return () => {
      window.removeEventListener("scroll", onGlobalScroll);
    }
  }, []);

  return (
    <Row
      className={style['base-line']}
      justify="space-around"
      align="middle"
      style={{
        top: _top
      }}
    >
      <Col span={4}>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', fontStyle: 'italic' }}><span style={{ color: '#597ef7' }}>Fi</span><span>Blog</span></span>
      </Col>
      <Col flex="auto">
        <Input placeholder="搜索你想要的内容" />
      </Col>
      <Col span={2} className={style['button-style']}>
        <span>
          <IconFont type="icon-user" />
        </span>
      </Col>
      <Col span={2} className={style['button-style']}>
        <span>
          <MenuUnfoldOutlined />
        </span>
      </Col>
    </Row>
  );
};

export default GlobalTitle;
