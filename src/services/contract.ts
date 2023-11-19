import request from 'utils/request';

export interface IContract {
  adminName: string;
  amount: string;
  contractType: number;
  index: number;
  name: string;
  no: string;
  paymentType: 1 | 2;
  status: number;
  updateTime: string;
}

// 返回的结果
interface IResult {
  list: IContract[];
}

// 参数
interface IParams {
  pageSize: number;
  current: number;
}

export const getContractList = async (params: IParams) => {
  const result = await request.get<IResult>('/api/get-list');

  let list = result?.data?.list || [];
  const total = list.length;
  list = list.splice(params.pageSize * (params.current - 1), params.pageSize);
  return {
    list,
    total,
  };
};
