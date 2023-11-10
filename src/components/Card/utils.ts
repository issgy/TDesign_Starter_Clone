// 获取类名前缀
export const getPrefixCls = (className: string, customPreClass?: string) => {
  if (customPreClass) {
    return `${customPreClass}-${className}`;
  }
  return `td-${className}`;
};
