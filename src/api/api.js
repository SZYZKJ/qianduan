import {
  wxRequestPost
} from '@/utils/wxRequest';

const apiMain = 'https://www.lianaizhuli.com/api/'
// const apiMain = 'https://www.xingnanzhuli.com/api/'
const wangzhi = 'https://www.xingnanzhuli.com/'

//微信的jscode换取sessionKey
const getOpenid = (params) => wxRequestPost(params, apiMain + 'getOpenid');
//判断是否存在openid
const checkOpenid = (params) => wxRequestPost(params, apiMain + 'checkOpenid');
//获取手机号码
const getPhoneNumber = (params) => wxRequestPost(params, apiMain + 'getPhoneNumber');
//搜索话术
const searchLiaomeihuashu = (params) => wxRequestPost(params, apiMain + 'searchLiaomeihuashu');
//搜索惯例
const searchGuanli = (params) => wxRequestPost(params, apiMain + 'searchGuanli');
//搜索表情
const searchBiaoqing = (params) => wxRequestPost(params, apiMain + 'searchBiaoqing');
//搜索表情
const searchBaike = (params) => wxRequestPost(params, apiMain + 'searchBaike');
//获取撩妹套路
const getLiaomeitaoluList = (params) => wxRequestPost(params, apiMain + 'getLiaomeitaoluList');
//获取关键字列表
const getHiswordList = (params) => wxRequestPost(params, apiMain + 'getHiswordList');
//获取关键字清除
const clearHiswords = (params) => wxRequestPost(params, apiMain + 'clearHiswords');
//获取热搜
const getRecommend = (params) => wxRequestPost(params, apiMain + 'getRecommend');
//获取文章列表
const getWenzhangList = (params) => wxRequestPost(params, apiMain + 'getWenzhangList');
//获取视频列表
const getGanhuoList = (params) => wxRequestPost(params, apiMain + 'getGanhuoList');
//获取形象建设列表
const getXingxiangjiansheList = (params) => wxRequestPost(params, apiMain + 'getXingxiangjiansheList');
//获取撩妹实战列表
const getLiaomeishizhanList = (params) => wxRequestPost(params, apiMain + 'getLiaomeishizhanList');
//搜索文章
const searchWenzhangList = (params) => wxRequestPost(params, apiMain + 'searchWenzhangList');
//搜索视频
const searchGanhuoList = (params) => wxRequestPost(params, apiMain + 'searchGanhuoList');
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
//获取情感百科
const getQingganbaike = (params) => wxRequestPost(params, apiMain + 'getQingganbaike');
//获取情感百科列表
const getQingganbaikeList = (params) => wxRequestPost(params, apiMain + 'getQingganbaikeList');
//获取百科
const getBaike = (params) => wxRequestPost(params, apiMain + 'getBaike');
//获取问答列表
const getWendaList = (params) => wxRequestPost(params, apiMain + 'getWendaList');
//获取问答
const getWenda = (params) => wxRequestPost(params, apiMain + 'getWenda');
//获取心理测试列表
const getXinliceshiList = (params) => wxRequestPost(params, apiMain + 'getXinliceshiList');
//获取心理测试
const getXinliceshi = (params) => wxRequestPost(params, apiMain + 'getXinliceshi');
//获取心理测试答案
const getCeshidaan = (params) => wxRequestPost(params, apiMain + 'getCeshidaan');
//获取首页块
const getShouyekuai = (params) => wxRequestPost(params, apiMain + 'getShouyekuai');
//获取首页慢
const getShouyeman = (params) => wxRequestPost(params, apiMain + 'getShouyeman');
//获取撩妹实战
const getLiaomeishizhan = (params) => wxRequestPost(params, apiMain + 'getLiaomeishizhan');
//获取形象建设
const getXingxiangjianshe = (params) => wxRequestPost(params, apiMain + 'getXingxiangjianshe');
//获取私教列表
const getSijiaoList = (params) => wxRequestPost(params, apiMain + 'getSijiaoList');
//获取课程列表
const getKechengList = (params) => wxRequestPost(params, apiMain + 'getKechengList');
//获取课程内容
const getKecheng = (params) => wxRequestPost(params, apiMain + 'getKecheng');
//设置点赞收藏数
const setDianzanshoucangshu = (params) => wxRequestPost(params, apiMain + 'setDianzanshoucangshu');
//获取点赞收藏
const getDianzanshoucang = (params) => wxRequestPost(params, apiMain + 'getDianzanshoucang');
//获取点赞收藏列表
const getDianzanshoucangList = (params) => wxRequestPost(params, apiMain + 'getDianzanshoucangList');
//设置点赞收藏
const setDianzanshoucang = (params) => wxRequestPost(params, apiMain + 'setDianzanshoucang');
//获取课程prepay_id
const get_kechengprepay_id = (params) => wxRequestPost(params, apiMain + 'get_kechengprepay_id');
export default {
  get_kechengprepay_id,
  getKechengList,
  getKecheng,
  setDianzanshoucang,
  getDianzanshoucangList,
  getDianzanshoucang,
  setDianzanshoucangshu,
  getSijiaoList,
  getXingxiangjianshe,
  getLiaomeishizhan,
  wangzhi,
  getOpenid,
  checkOpenid,
  getPhoneNumber,
  searchLiaomeihuashu,
  searchGuanli,
  searchBiaoqing,
  searchBaike,
  getLiaomeitaoluList,
  getWenzhangList,
  getGanhuoList,
  getXingxiangjiansheList,
  getLiaomeishizhanList,
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
  getShouyekuai,
  getShouyeman,
  getQingganbaike,
  getQingganbaikeList,
  getBaike,
  getWendaList,
  getWenda,
  getXinliceshiList,
  getXinliceshi,
  getCeshidaan,
}
