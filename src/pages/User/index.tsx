import React from 'react';
import { Col, Row, Button, List } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import Card from 'components/Card';
import { personalInfo, TABLIST, TEAMS } from './consts';
import ReactEcharts from 'echarts-for-react';
import Style from './index.module.less';

const { ListItem, ListItemMeta } = List;

const User = () => (
  <div className={Style.user}>
    <Row gutter={16}>
      <Col xs={12} lg={12} xl={9}>
        <Card borded={false} className={Style.welcome}>
          <Row justify='space-between'>
            <Col className={Style.name}>
              Hi，issgy <span className={Style.regular}>下午好！这是你加入的第100天</span>
            </Col>
            <Col>
              <img src='https://tdesign.gtimg.com/starter/assets-tencent-logo.png' className={Style.logo} />
            </Col>
          </Row>
        </Card>
        <Card
          title='个人信息'
          borded={false}
          className={Style.userInfo}
          extra={
            <Button shape='square' theme='default' variant='text'>
              <IconFont name='edit' />
            </Button>
          }
        >
          <div className={Style.info}>
            {personalInfo.map((item, index) => (
              <Card.Grid style={{ padding: '0', boxShadow: 'none', width: '25%' }} key={index}>
                <div className={Style.label}>{item.label}</div>
                <div className={Style.value}>{item.value}</div>
              </Card.Grid>
            ))}
          </div>
        </Card>
        <Card borded={false} className={Style.statistics} tabList={TABLIST} headStyle={{ borderBottom: 0 }}>
          <div className={Style.title}>
            主页访问数据<span className={Style.unit}>（次）</span>
          </div>
          <ReactEcharts
            option={{
              tooltip: {
                trigger: 'item',
              },
              legend: {
                data: ['杯子', '茶叶', '蜂蜜', '面粉'],
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true, //防止标签溢出
              },
              toolbox: {
                feature: {
                  saveAsImage: {},
                },
              },
              xAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
              },
              yAxis: {
                type: 'value',
              },
              series: [
                {
                  name: '杯子',
                  type: 'line',
                  data: [21, 99, 56, 66, 55, 7, 83],
                },
                {
                  name: '茶叶',
                  type: 'line',
                  data: [84, 30, 70, 14, 19, 75, 73],
                },
                {
                  name: '蜂蜜',
                  type: 'line',
                  data: [57, 3, 25, 13, 49, 80, 11],
                },
                {
                  name: '面粉',
                  type: 'line',
                  data: [8, 85, 2, 77, 10, 65, 90],
                },
              ],
            }}
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 360, marginTop: 16 }}
          ></ReactEcharts>
        </Card>
      </Col>
      <Col xs={12} lg={12} xl={3}>
        <Card borded={false} className={Style.postmsg}>
          <div className={Style.avatar}>
            <span>T</span>
          </div>
          <div className={Style.name}>My Account</div>
          <div className={Style.position}>XXG 港澳业务拓展组员工 直客销售</div>
        </Card>
        <Card
          className={Style.teams}
          borded={false}
          title='团队成员'
          extra={
            <Button shape='square' theme='default' variant='text'>
              <IconFont name='edit' />
            </Button>
          }
        >
          <List>
            {TEAMS.map((item) => (
              <ListItem key={item.id}>
                <ListItemMeta title={item.name} description={item.position} />
              </ListItem>
            ))}
          </List>
        </Card>
        <Card
          title='服务产品'
          borded={false}
          className={Style.product}
          extra={
            <Button shape='square' theme='default' variant='text'>
              <IconFont name='edit' />
            </Button>
          }
        >
          <Row gutter={32}>
            <Col>
              <img src='https://tdesign.gtimg.com/pro-template/tdesign-icon1.png' className={Style.logo} />
            </Col>
            <Col>
              <img src='https://tdesign.gtimg.com/pro-template/tdesign-icon2.png' className={Style.logo} />
            </Col>
            <Col>
              <img src='https://tdesign.gtimg.com/pro-template/tdesign-icon3.png' className={Style.logo} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
);

export default React.memo(User);
