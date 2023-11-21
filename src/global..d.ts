declare module '*.svg' {
  export default src as string;
}

declare module '*.svg?component' {
  export default src as string;
}

// 声明对css和less模块文件的处理方式，告诉TypeScript编译器，在引入.module.css和.module.less文件时，
// 将其视为模块，并导出具有类名和样式字符串键值对的对象。同时也声明了对普通.less文件的处理方式。
// 避免编译报错或警告
declare module '*.module.css' {
  export default classes as { readonly [key: string]: string };
}

declare module '*.module.less' {
  export default classes as { readonly [key: string]: string };
}

declare module '*.less' {
  export default classes as { readonly [key: string]: string };
}
