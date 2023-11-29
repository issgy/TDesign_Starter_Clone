import React from 'react';
import classnames from 'classnames';
import { SearchIcon } from 'tdesign-icons-react';
import { Tree, Input } from 'tdesign-react';
import { SelectTable } from '../Select/index';
import { treeList } from './consts';
import Style from './index.module.less';
import CommonStyle from 'styles/common.module.less';

const TreeTable: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithColor, Style.content)}>
    <div className={Style.treeContent}>
      <Input className={Style.search} suffixIcon={<SearchIcon />} placeholder='请输入关键词' />
      <Tree data={treeList} activable hover transition />
    </div>
    <div className={Style.tableContent}>
      <SelectTable />
    </div>
  </div>
);

export default React.memo(TreeTable);
