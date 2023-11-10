import React from 'react';
import classnames from 'classnames';
import { Tabs, List, Tag } from 'tdesign-react';
import PageBox from 'components/PageBox';
import { dataItemList } from './consts';

import Style from './index.module.less';

const { TabPanel } = Tabs;
const { ListItem } = List;

export default React.memo(() => (
  <PageBox withColor={false} withPadding={false}>
    <div className={classnames(Style.secondaryNotification)}>
      <Tabs placement={'top'} size={'medium'} defaultValue={'1'}>
        <TabPanel value={'1'} label='全部通知'>
          <div className={Style.tabsContent}>
            <div className={Style.msgList}>
              <List>
                {dataItemList.map((item, index) => (
                  <ListItem key={index} className={Style.listItem} action={<li>{item.createTime}</li>}>
                    <p className={Style.content}>
                      <Tag size='small' variant='dark' className={Style.tag}>
                        {item.tag}
                      </Tag>
                      {item.content}
                    </p>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={'2'} label='未读通知'>
          <div className={Style.tabsContent}>
            <div className={Style.info}>已读通知</div>
          </div>
        </TabPanel>
        <TabPanel value={'3'} label='已读通知'>
          <div className={Style.tabsContent}>
            <div className={Style.info}>已读通知</div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </PageBox>
));
