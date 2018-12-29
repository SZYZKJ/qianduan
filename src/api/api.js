import {
  wxRequestPost
} from '@/utils/wxRequest';

const apiMain = 'https://www.lianaizhuli.com/api/'
// const apiTest = 'https://www.xingnanzhuli.com/api/'

//微信的jscode换取sessionKey
const getOpenid = (params) => wxRequestPost(params, apiMain+'getOpenid');
//判断是否存在openid
const checkOpenid = (params) => wxRequestPost(params, apiMain+'checkOpenid');
//获取手机号码
const getPhoneNumber = (params) => wxRequestPost(params, apiMain+'getPhoneNumber');
//搜索话术
const searchHuashu = (params) => wxRequestPost(params, apiMain+'searchHuashu');
//搜索惯例
const searchGuanli = (params) => wxRequestPost(params, apiMain+'searchGuanli');
//搜索表情
const searchBiaoqing = (params) => wxRequestPost(params, apiMain+'searchBiaoqing');
//获取理论
const getMethodologyList = (params) => wxRequestPost(params, apiMain+'getMethodologyList');
//获取关键字列表
const getHiswordList = (params) => wxRequestPost(params, apiMain + 'getHiswordList');
//获取关键字清除
const clearHiswords = (params) => wxRequestPost(params, apiMain + 'clearHiswords');
//获取热搜
const getRecommend = (params) => wxRequestPost(params, apiMain + 'getRecommend');
//获取文章列表
const getWenzhangList = (params) => wxRequestPost(params, apiMain+'getWenzhangList');
//获取视频列表
const getGanhuoList = (params) => wxRequestPost(params, apiMain+'getGanhuoList');
//获取课程列表
const getKechengList = (params) => wxRequestPost(params, apiMain+'getKechengList');
//搜索文章
const searchWenzhangList = (params) => wxRequestPost(params, apiMain+'searchWenzhangList');
//搜索视频
const searchGanhuoList = (params) => wxRequestPost(params, apiMain+'searchGanhuoList');
//获取prepay_id
const get_prepay_id = (params) => wxRequestPost(params, apiMain + 'get_prepay_id');
//获取特权
const getTequan = (params) => wxRequestPost(params, apiMain + 'getTequan');
//获取积分
const getJifen = (params) => wxRequestPost(params, apiMain + 'getJifen');
//获取订单
const getDingdan = (params) => wxRequestPost(params, apiMain + 'getDingdan');
//获取联盟
const getIslianmeng = (params) => wxRequestPost(params, apiMain + 'getIslianmeng');
//存储记录
const setJilu = (params) => wxRequestPost(params, apiMain + 'setJilu');
//获取土味情话列表
const getTuweiqinghuaList = (params) => wxRequestPost(params, apiMain + 'getTuweiqinghuaList');
//随机获取土味情话
const getTuweiqinghua = (params) => wxRequestPost(params, apiMain + 'getTuweiqinghua');
//获取广告列表
const getAdList = (params) => wxRequestPost(params, apiMain + 'getAdList');

export default {
  getOpenid,
  checkOpenid,
  getPhoneNumber,
  searchHuashu,
  searchGuanli,
  searchBiaoqing,
  getMethodologyList,
  getWenzhangList,
  getGanhuoList,
  getKechengList,
  getHiswordList,
  clearHiswords,
  getRecommend,
  searchWenzhangList,
  searchGanhuoList,
  get_prepay_id,
  getTequan,
  getJifen,
  getDingdan,
  getIslianmeng,
  setJilu,
  getTuweiqinghuaList,
  getTuweiqinghua,
  getAdList,
}
